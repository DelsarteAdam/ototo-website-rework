# beautiful Soup : pip install bs4
# requests send HTTP/1.1 requests : pip install requests
import os
import re
import json
import requests


from bs4 import BeautifulSoup

baseUrlSite = "https://www.ototo.fr/"

blockWord = ['Accueil',  'Catalogue', 'Planning',
             'LectureEnLigne', 'Contact', 'Actualites',  'CodePrix']

genre = ['shonen', 'seinen', 'mues', 'other', 'shojo']


def getdata(url, timeout=10):
    try:
        r = requests.get(url, timeout=timeout)
        r.raise_for_status()  # Raises an exception for non-2xx responses
        return r.text
    except requests.exceptions.Timeout:
        print(f"Request to {url} timed out after {timeout} seconds.")
        return None
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return None


def get_img_url(url):
    datalist = []
    htmldata = getdata(url)
    soup = BeautifulSoup(htmldata, 'html.parser')
    for item in soup.find_all('img'):
        if './img/Couverture' in item['src']:
            linkClean = item['src'][1:]
            completeLink = f"https://www.ototo.fr{linkClean}"
            datalist.append(completeLink)

    return datalist


def get_id_name(url):
    datalist = []
    htmldata = getdata(url)
    soup = BeautifulSoup(htmldata, 'html.parser')
    for item in soup.find_all('section'):
        datalist.append(item['id'])

    return datalist


def get_url_link(url):
    datalist = []
    htmldata = getdata(url)
    soup = BeautifulSoup(htmldata, 'html.parser')
    for item in soup.find_all('a'):
        if item['href'] not in blockWord:
            if 'http://' not in item['href'] and 'https://' not in item['href'] and '#' not in item['href'] and 'News' not in item['href']:
                completeLink = f"https://www.ototo.fr/{item['href']}"
                datalist.append(completeLink)

    return datalist


def get_link_byid(url, ids):
    datalist = {}
    htmldata = getdata(url)
    soup = BeautifulSoup(htmldata, 'html.parser')
    for gen in ids:
        local = soup.find(id=gen)
        datatemp = []
        for item in local.find_all("a"):
            if item['href'] not in blockWord:
                if 'http://' not in item['href'] and 'https://' not in item['href'] and '#' not in item['href'] and 'News' not in item['href']:
                    completeLink = f"https://www.ototo.fr/{item['href']}"

                    datatemp.append(completeLink)
        datalist = {**datalist, gen: datatemp}
    return datalist


def download_image(image_url, folder_path):

    try:
        img_data = requests.get(image_url).content
        # Extract the image filename from the URL
        img_name = os.path.basename(image_url)
        img_path = os.path.join(folder_path, img_name)

        with open(img_path, 'wb') as img_file:
            img_file.write(img_data)

        print(f"Downloaded {img_name} to {img_path}")
    except Exception as e:
        print(f"Failed to download {image_url}: {e}")


def create_folder_files(url, ids, baseUrl):
    datadict = get_link_byid(url, ids)
    for key, links in datadict.items():

        folder_path = os.path.join(".", key)
        os.makedirs(folder_path, exist_ok=True)

        for link in links:
            relative_path = link.replace(baseUrl, "").lstrip("/")
            file_path = os.path.join(folder_path, relative_path)
            os.makedirs(file_path, exist_ok=True)

            imgUrl = get_img_url(link)

            for img in imgUrl:
                download_image(img, file_path)


def create_data_json():
    data = []
    baseDir = os.listdir()
    for subDir in baseDir:
        mangaDir = os.listdir(subDir)
        for manga in mangaDir:
            path = os.path.join(subDir, manga)
            # regex not working with replace import re
            clean_manga_name = re.sub(r"Serie-\d+-", "", manga)
            objManga = {"manga_name": clean_manga_name, "manga_serie": manga.replace(
                clean_manga_name, "").replace("-", " "), "path": f"{subDir}/{manga}", "tomes": os.listdir(path), "auteur": "", "illustrateur": "", "genre": subDir, "theme": "", "resume": ""}
            data.append(objManga)
    return data


data = create_data_json()
with open("ototoData.json", "w") as export:
    json.dump(data, export, indent=4)

# create_folder_files('https://www.ototo.fr/Catalogue', genre, baseUrlSite)

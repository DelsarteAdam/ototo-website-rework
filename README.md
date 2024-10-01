# ototo website rework

## rework of the website of ototo manga publisher

> [!IMPORTANT]
> all pictures and assets are copyrighted by them and the originals authors/publishers

[![Button Icon]][Link]

[Link]: # "https://www.ototo.fr/"
[Button Icon]: https://img.shields.io/badge/📖%20original%20website%20📖-97be0d?style=for-the-badge&logoColor=white

---

using react and typescript

### Getting pictures 📷 :

using python to get all picture of the manga collection

```
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

```

🐍 then create a json with all the picture and some additional data .

### Building part of the website ✏

Re-create a manga reader with the same logic as using Background-image and not the img tag
click left or right or use keyboard left or right
_you can test it by clicking on "lecture en ligne" in the footer_

```
  function handleClickImage(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const coordX = e.clientX;

    const divElement = e.currentTarget;

    if (divElement) {
      const rect = divElement.getBoundingClientRect();
      const divX = rect.left;

      const divWidth = rect.width;

      //check right or left

      const Xref = coordX - divX;
      const middle = divWidth / 2;
      if (Xref <= middle) {
        if (pageCount > 0) {
          setPageCount(pageCount - 1);
        }
      } else {
        if (pageCount < pageMangaData.length - 1) {
          setPageCount(pageCount + 1);
        }
      }
    }
  }
```

### comparaison vs the original website as of October 2024

---

### main page

![comparaison 01 ](readmeImg/page%20comp01.webp)

---

search tab created

![search ](readmeImg/recherche%20.png)

---

### main manga page

![comparaison 02 ](readmeImg/page%20comp02.webp)

---

### catalogue page

![comparaison 02 ](readmeImg/page%20comp03.webp)

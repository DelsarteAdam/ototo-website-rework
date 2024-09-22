# ototo website rework

## rework of the website of ototo manga publisher

> [!IMPORTANT]
> all pictures and assets are copyrighted by them and the original author/publisher

[📖 original website 📖](https://www.ototo.fr/){.btn .btn-info}

---

using react and typescript

### Getting pictures 📷 :

using python to get all picture of the manga collection

```def getdata(url, timeout=10):
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

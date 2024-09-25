import os
import json

data = []
folders = os.listdir()

for folder in folders:
    subfile = os.listdir(folder)
    for file in subfile:
        data.append(
            {"manga_name": folder, "path": f"/lecture/{folder}/{file}"})


with open("lectureData.json", "w") as export:
    json.dump(data, export, indent=4)

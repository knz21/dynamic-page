import json
import requests

response = requests.get("https://api.github.com/users/knz21/repos")
repos = response.json()

new_links = {repo['name']: repo['html_url'] for repo in repos}

with open('data.json', 'r+') as file:
    data = json.load(file)
    data['links'] = new_links
    file.seek(0)
    json.dump(data, file, indent=4)
    file.truncate()
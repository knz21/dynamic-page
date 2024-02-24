document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const nav = document.getElementById('navigation');
            const navList = document.createElement('ul');
            Object.values(data.navigations).forEach(text => {
                const listItem = document.createElement('li');
                listItem.textContent = text;
                navList.appendChild(listItem);
            });
            nav.appendChild(navList);

            const articlesSection = document.getElementById('articles');
            data.articles.forEach(article => {
                const articleElem = document.createElement('article');
                const h2 = document.createElement('h2');
                h2.textContent = article.title;
                const p = document.createElement('p');
                p.textContent = article.content;
                articleElem.appendChild(h2);
                articleElem.appendChild(p);
                articlesSection.appendChild(articleElem);
            });

            const linksAside = document.getElementById('links');
            const linksList = document.createElement('ul');
            Object.entries(data.links).forEach(([text, url]) => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = url;
                link.textContent = text;
                listItem.appendChild(link);
                linksList.appendChild(listItem);
            });
            linksAside.appendChild(linksList);
        })
        .catch(error => console.error('Error loading the JSON data: ', error));
});
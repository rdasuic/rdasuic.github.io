let app = document.getElementById('app');

const API_KEY = "aQhwhMsmrhNU6hrV3dWAvcckVdaTPkdPALzigjeg";
const API_ENDPOINT = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY
fetch(API_ENDPOINT)
    .then(response => {return response.json()})
    .then(json => {
        let img = document.createElement('img');
        let title = document.createElement('h1');
        let exp = document.createElement('p');
        title.textContent = json.title;
        exp.textContent = json.explanation;
        img.src = json.url;
        app.appendChild(title);
        app.appendChild(img);
        app.appendChild(exp);
    });
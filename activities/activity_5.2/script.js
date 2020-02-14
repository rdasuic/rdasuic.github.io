let app = document.getElementById('app');

const API_KEY = "W6Qr0nAAf5daXuGxkZLVfBZDwx5pl1yH";
const API_ENDPOINT = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=code&api-key=" + API_KEY
fetch(API_ENDPOINT)
    .then(response => {return response.json()})
    .then(json => {
        console.log(json.response)
        for(let article of json.response.docs) {
            
//             let img = document.createElement('img');
//             let title = document.createElement('h1');
//             let exp = document.createElement('p');
//             title.textContent = article.headline.main
//             exp.textContent = article.abstract
//             img.src = "https://nyt.com/" + article.multimedia[0].url
//     //         exp.textContent = json.explanation;
//     //         img.src = json.url;
//             app.appendChild(title);
//             app.appendChild(img);
//             app.appendChild(exp);
            
            
            // create a card element for each item
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.classList.add('col-4');

            // create the card img
            let cardImg = document.createElement('img');
            cardImg.setAttribute('class', 'card-img-top');
            // create the card body div
            let cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            // create the card title div
            let cardTitle = document.createElement('div');
            cardTitle.setAttribute('class', 'card-title');
            // set card title to employee name
            cardTitle.textContent = article.headline.main;
            // create the card subtitle div
            let cardSubtitle = document.createElement('div');
            cardSubtitle.setAttribute('class', 'card-subtitle');
            cardSubtitle.setAttribute('class', 'text-muted');

            //set card subtitle to department
            cardSubtitle.textContent = article.abstract;
            // create the card text div
            let cardText = document.createElement('div');
            cardText.setAttribute('class', 'card-text');
            // set card text to salary
            cardText.textContent = article.lead_paragraph;
            // set the card img
            cardImg.src = "https://nyt.com/" + article.multimedia[0].url;
            // construct card element
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            // add the card element into the document tree
            app.appendChild(card);

        }
    });
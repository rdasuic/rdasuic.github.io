let apiEndpoint = "https://data.cityofchicago.org/resource/xzkq-xp2w.json?$limit=50";
let div = document.querySelector('div.container'); // the main element we are inserting the data into
fetch(apiEndpoint)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        for(person of response) {
            console.log(person)
            // create a card element for each item
            let card = document.createElement('div');
            card.setAttribute('class', 'card')
            // create the card body div
            let cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            // create the card title div
            let cardTitle = document.createElement('div');
            cardTitle.setAttribute('class', 'card-title');
            // set card title to employee name
            cardTitle.textContent = person.name;
            // create the card subtitle div
            let cardSubtitle = document.createElement('div');
            cardSubtitle.setAttribute('class', 'card-subtitle');
            cardSubtitle.setAttribute('class', 'text-muted');

            //set card subtitle to department
            cardSubtitle.textContent = person.department;
            // create the card text div
            let cardText = document.createElement('div');
            cardText.setAttribute('class', 'card-text');
            // set card text to salary
            cardText.textContent = "$" + person.annual_salary;
            // construct card element
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardBody);
            // add the card element into the document tree
            div.appendChild(card);
    }
});
/*
 * <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

*/
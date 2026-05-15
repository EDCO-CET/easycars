const seeCarsBtn = document.querySelector("#see-cars-btn");
const contactBtn = document.querySelector("#contact-btn");
const carsUrl = "https://gist.githubusercontent.com/jhonatan89/98bfed488d77092b0bf0566dec57a5f0/raw/559e6f696172a058586d6ad0b6cb227b7aea9237/cars.json";


function fetchCars() {
    fetch(carsUrl)
        .then(response => response.json())
        .then(data => {
            setCarDataSection(data);
        })
        .catch(error => {
            console.error(error);
        })
};

fetchCars();


function setCarDataSection(data){
    const cardContainer = document.querySelector(".card-container");
    const cars = data.results;
    
    for(let car of cars){
        buildCardFromData(car, cardContainer);
    }
}


function buildCardFromData(car, container){
    const articleElement = document.createElement("article")
    articleElement.className = "card";
    
    const headerElement = document.createElement("header")
    headerElement.className = "card__head"
    
    const titleElement = document.createElement("h3")
    titleElement.textContent = car.name;

    const cardTag = document.createElement("span")
    cardTag.className = "card__tag"
    cardTag.textContent = car.isMostPopular ? "Most Popular" : "Sport"
    
    headerElement.appendChild(titleElement);
    headerElement.appendChild(cardTag)

    articleElement.appendChild(headerElement);

    const imageElement = document.createElement("img")
    imageElement.className = "card--image"
    imageElement.src = car.image
    imageElement.alt = car.name
    
    articleElement.appendChild(imageElement);

    const ulElement = document.createElement("ul")
    ulElement.className = "card__specs";
    
    const liSpeedElement = document.createElement("li")
    liSpeedElement.textContent = car.speed;
    ulElement.appendChild(liSpeedElement);

    const li0100Element = document.createElement("li")
    li0100Element.textContent = car["0-100"];
    ulElement.appendChild(li0100Element);

    const liSeatsElement = document.createElement("li")
    liSeatsElement.textContent = car.seats;
    ulElement.appendChild(liSeatsElement);
    
    articleElement.appendChild(ulElement);

    const priceElement = document.createElement("p")
    priceElement.className = "card--price"
    const priceSpan = document.createElement("span")
    priceSpan.className = "card--price__amount";
    priceSpan.textContent = car.price
    
    priceElement.appendChild(priceSpan)
    
    articleElement.appendChild(priceElement);

    const buttonContainer = document.createElement("div")
    buttonContainer.className = "card--button-container"
    
    const rentButton = document.createElement("button")
    rentButton.className = "btn btn-primary"
    rentButton.textContent = "Rent"
    
    const favoriteButton = document.createElement("button")
    favoriteButton.className = "btn btn-favorite"
    favoriteButton.setAttribute("aria-label", "Add to favorites")
    favoriteButton.textContent = "♡"
    
    buttonContainer.appendChild(rentButton)
    buttonContainer.appendChild(favoriteButton)
    
    articleElement.appendChild(buttonContainer)


    
    container.appendChild(articleElement);
}

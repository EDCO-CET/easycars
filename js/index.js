const seeCarsBtn = document.querySelector('#see-cars-btn');
const contactBtn = document.querySelector('#contact-btn');

const carsData = [
    {
        name: 'Porsche Panamera',
        image: 'img/porshe-p4.avif',
        speed: '300 km/h',
        '0-100': '3.5s',
        seats: '4',
        price: '$320',
        type: 'Luxury',
        isMostPopular: false
    },
    {
        name: 'Ferrari Roma',
        image: 'https://www.amalgamcollection.com/cdn/shop/files/Wideedit_44fe4a82-c08b-449e-87e3-5380099e6329_2000x850_crop_center.jpg?v=1706017250',
        speed: '320 km/h',
        '0-100': '3.4s',
        seats: '2+2',
        price: '$520',
        type: 'Sport',
        isMostPopular: true
    }, 
    {
        name: 'Volvo XC90',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Volvo_XC90_front.JPG',
        speed: '240 km/h',
        '0-100': '5.8s',
        seats: '7',
        price: '$280',
        type: 'SUV',
        isMostPopular: false
    },
    {
        name: 'BMW M3',
        image: 'https://cdn.motor1.com/images/mgl/1ZQrxK/s1/2023-bmw-m3-cs-first-drive-review.webp',
        speed: '280 km/h',
        '0-100': '4.1s',
        seats: '4',
        price: '$420',
        type: 'Sport',
        isMostPopular: false
    },
    {
        name: 'Audi R8',
        image: 'https://www.audiusa.com/content/dam/audi/us/en/own/vehicles/r8/2024/overview/overview-2024-audi-r8.jpg',
        speed: '330 km/h',
        '0-100': '3.2s',
        seats: '2+2',
        price: '$580',
        type: 'Sport',
        isMostPopular: false
    }, 
    {
        name: 'Lamborghini Huracán',
        image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model/aventador/2024/huracan/huracan_st/2024/huracan_st_2024_01.jpg',
        speed: '325 km/h',
        '0-100': '2.9s',
        seats: '2+2',
        price: '$650',
        type: 'Sport',
        isMostPopular: false
    }
]

console.log(carsData);


const cardContainer = document.querySelector('.card-container');

for(let car of carsData){
    const articleElement = document.createElement('article')
    articleElement.className = 'card';
    
    const headerElement = document.createElement('header')
    headerElement.className = 'card__head'
    
    const titleElement = document.createElement('h3')
    titleElement.textContent = car.name;

    const cardTag = document.createElement('span')
    cardTag.className = 'card__tag'
    cardTag.textContent = car.isMostPopular ? 'Most Popular' : 'Sport'
    
    headerElement.appendChild(titleElement);
    headerElement.appendChild(cardTag)

    articleElement.appendChild(headerElement);

    const imageElement = document.createElement('img')
    imageElement.className = 'card--image'
    imageElement.src = car.image
    imageElement.alt = car.name
    
    articleElement.appendChild(imageElement);

    const ulElement = document.createElement('ul')
    ulElement.className = 'card__specs';
    
    const liSpeedElement = document.createElement('li')
    liSpeedElement.textContent = car.speed;
    ulElement.appendChild(liSpeedElement);

    const li0100Element = document.createElement('li')
    li0100Element.textContent = car['0-100'];
    ulElement.appendChild(li0100Element);

    const liSeatsElement = document.createElement('li')
    liSeatsElement.textContent = car.seats;
    ulElement.appendChild(liSeatsElement);
    
    articleElement.appendChild(ulElement);

    const priceElement = document.createElement('p')
    priceElement.className = 'card--price'
    const priceSpan = document.createElement('span')
    priceSpan.className = 'card--price__amount';
    priceSpan.textContent = car.price
    
    priceElement.appendChild(priceSpan)
    
    articleElement.appendChild(priceElement);

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'card--button-container'
    
    const rentButton = document.createElement('button')
    rentButton.className = 'btn btn-primary'
    rentButton.textContent = 'Rent'
    
    const favoriteButton = document.createElement('button')
    favoriteButton.className = 'btn btn-favorite'
    favoriteButton.setAttribute('aria-label', 'Add to favorites')
    favoriteButton.textContent = '♡'
    
    buttonContainer.appendChild(rentButton)
    buttonContainer.appendChild(favoriteButton)
    
    articleElement.appendChild(buttonContainer)


    
    cardContainer.appendChild(articleElement);

}

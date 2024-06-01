const API_SERVER = 'https://dog.ceo/api/breeds/image/random';

var dogPortrait;

// Función para crear elementos HTML
const createElement = (tag, className, attributes = {}) => {
    const element = document.createElement(tag);

    if (className) {
        element.classList.add(className);
    }

    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
};

// Función para cargar películas en la cuadrícula de tendencias
async function fetchDog() {
    let data = await fetch(API_SERVER);

    data.json().then((response) => {
        let src = response.message;
        let mainsection = document.getElementsByClassName("dog-div")[0]
        let element = createElement("img", "dog-image", attributes = {src});
        eraseDog();
        dogPortrait = element;
        mainsection.appendChild(element);
    });
};

function eraseDog() {
    let mainsection = document.getElementsByClassName("dog-div")[0]
    if (dogPortrait) {
        mainsection.removeChild(dogPortrait);
    }
    dogPortrait = null;
}

document.querySelector('.apitest').addEventListener('click', () => {
    fetchDog();
});

document.querySelector('.apiclose').addEventListener('click', () => {
    eraseDog();
});

/* ------Sélection les flèches, image du carrousel, txt et points (dots) dans le DOM --------*/

let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let bannerImg = document.querySelector('.banner-img');
let bannerTagline = document.querySelector('#banner p');
let dotsContainer = document.querySelector('.dots');

/* ------------ chemins des slides ------------------*/
let slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

/* -----------------Variable pour suivre la position actuelle de l'image dans le carrousel ----------------*/
let currentSlide = 0;

/* --------------- Crée les points de navigation en fonction du nombre de slides -------------------------*/
function createDots() {
    let dots = dotsContainer.querySelectorAll('.dot');
    for (let dot of dots) {
      dot.classList.remove('dot_selected'); // enleve class 'dot_selected' des pts existants
    }
  
    for (let i = 0; i < slides.length; i++) { /* let i = 0: variable pour suivre position actuelle dans tableau 
                                                 i < slides.length: boucle continue tant que variable i < a longueur du tableau slides
                                                i++: ajoute +1 à variable donc passe à l'elemt suivant dans tableau */
      let dot = document.createElement('dots'); 
      dot.className = 'dot'; // ajout la class 'dot' à chaque point
      if (i === currentSlide) {
        dot.classList.add('dot_selected'); // Ajout 'dot_selected' si pt = slide actuelle
      }
      dotsContainer.appendChild(dot); // ajout pt au conteneur du HTML
    }
  }


/* --------------------- Fonction pour mettre à jour l'image, le texte et les points du carrousel -----------------*/
function updateCarousel() {
    // Mise à jour de l'image et du texte
    bannerImg.src = slides[currentSlide].image;
    bannerTagline.innerHTML = slides[currentSlide].tagLine;

    // Mise à jour des points (dots)
    let dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {  // dot = pt actuel, index son n°
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Event listener pour la flèche gauche
arrowLeft.addEventListener('click', function() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateCarousel();
});

// Event listener pour la flèche droite
arrowRight.addEventListener('click', function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateCarousel();
});

// Initialiser le carrousel
createDots();
updateCarousel();
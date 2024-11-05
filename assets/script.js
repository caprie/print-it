// Sélection des flèches, de l'image et du texte de la bannière, et du conteneur des dots
// Regroupe en début de code car plus pratique pour travailler avec ensuite
var arrowLeft = document.querySelector('.arrow_left');  // "var" donne un nom à la variable crée + recherche l'element dans le html
var arrowRight = document.querySelector('.arrow_right');  // "document"explore page HTML et trouve éléments appelés dans le html
var bannerImg = document.querySelector('.banner-img');  // recherche par ID ou class (. ou #)
var bannerTagline = document.querySelector('#banner p');
var dotsContainer = document.querySelector('.dots');

// Diapositives du carrousel: 
// variable slides stocke le chemin vers les images qui se trouvent dans le dossier assets
// écrit dans le code pour chaque diapositive = txt à afficher sous l’image correspondante
// <span> reprend la mise en page du css contenu dans élément par <p> du html
var slides = [  // [ ] crée liste ou "tableau" de chaque elemts qui représente 1 diapo
    // {} groupe es infos en un objet
    { "image": "./assets/images/slideshow/slide1.jpg", "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>", "alt": "Impression tous formats"},
    { "image": "./assets/images/slideshow/slide2.jpg", "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>", "alt": "Tirages haute definition"},
    { "image": "./assets/images/slideshow/slide3.jpg", "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>", "alt": "grand choix de couleurs"},
    { "image": "./assets/images/slideshow/slide4.png", "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>", "alt": "Grand choix de couleur"}
];  // ";"pour indiquer la fin de la commande

let currentSlide = 0; // indique la 1ere slide. 0 = 1ere. Let car element changeable contrairement à "const" qui est 1 parametre fixe

// Création des dots de navigation
// "function" pour regrouper le code et pouvoir l'appeler chaque fois qu'on en a besoin
function createDots() {  // "function" crée les autres dots sous le carrousel -- () vides car pas besoin de parametres spécifiques
    dotsContainer.innerHTML = ''; // dotsContainer = variable avec container dans HTML où les "dots" vont apparaître. 
                                  // .innerHTML = '' = vider tout l'intérieur de container et remplace contenu par '' (rien du tout)
                                  // recommence à zéro + recrée autres dots pour empecher qu'ils se rajoutent plusieurs fois 
                                  //quand on relance la fonction.
    for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        
        // Ajoute un clic pour changer de diapositive
        dot.onclick = function(index) {
            return function() {
                currentSlide = index;
                updateCarousel();
            };
        }(i); // Simplifie l'utilisation de l'index actuel pour chaque dot
        
        dotsContainer.appendChild(dot); // Ajoute le dot au conteneur
    }
}

// Met à jour l'image, le texte et l'état des dots
function updateCarousel() {
    bannerImg.src = slides[currentSlide].image;
    bannerTagline.innerHTML = slides[currentSlide].tagLine;
    updateDots();
}

// Fonction pour mettre en surbrillance le dot actif
function updateDots() {
    var dots = dotsContainer.querySelectorAll('.dot');
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.toggle('dot_selected', i === currentSlide);
    }
}

// Navigation avec les flèches gauche et droite
arrowLeft.onclick = function() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateCarousel();
};

arrowRight.onclick = function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateCarousel();
};

// Initialisation des dots et affichage de la première diapositive
createDots();
updateCarousel();



// ajout nouvelle couleur de dot dans css: #ff008e ligne 168 car j'ai trouvé qu'il n'était pas visible
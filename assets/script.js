
/* ------------ Chercher les fleches dans la page web -------------*/

if (typeof arrowLeft === 'undefined') {
    let arrowLeft = document.querySelector('.arrow_left'); // Trouver la fleche gauche sur la page
}
if (typeof arrowRight === 'undefined') {
    let arrowRight = document.querySelector('.arrow_right');
} 
// Chercher l'img + le txt du carrousel dans la page web
if (typeof bannerImg === 'undefined') {
    let bannerImg = document.querySelector('.banner-img'); // Trouver l'img du carrousel
}
if (typeof bannerTagline === 'undefined') {
    let bannerTagline = document.querySelector('#banner p'); 
}


/* ------------ Créeer un tableau des img du carrousel si elle n'existe pas encore (tableau) ----------*/

if (typeof slides === 'undefined') {
    let slides = [
        {
            "image": "./assets/images/slideshow/slide1.jpg", // Chemin vers la 1ere img
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "./assets/images/slideshow/slide2.jpg", // Chemin vers la 2eme img
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "./assets/images/slideshow/slide3.jpg", // Chemin vers la 3eme img
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "./assets/images/slideshow/slide4.png", // Chemin vers la 4eme img
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];
}

/* ------------------ Définir la 1ere img à afficher -------------- */

let currentSlide = 0; // Variable de l'img affichee
function updateCarousel() {
    // Changer l'img de la bannière pour la nouvelle img
    bannerImg.src = slides[currentSlide].image;
    bannerTagline.innerHTML = slides[currentSlide].tagLine;
}

/* --------------- eventListeners ---------- */

arrowLeft.addEventListener('click', function() {
    // Aller à l'img precedente, et revenir à la dernière img si on est deja à la 1ere
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateCarousel(); // Mettre à jour img + tagline
});
/* ------------------ Idem arrowRight ---------*/
arrowRight.addEventListener('click', function() {
    // Passer à l'img suivante, et revenir à la 1ere img si on est déjà à la dernière
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateCarousel(); // Mettre à jour l'img et le txt du carrousel pour montrer la nouvelle img
});

/* -------------- Afficher la 1ere img du carrousel quand la page se charge ----------- */
updateCarousel();
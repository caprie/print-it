
/* récupèrent les elmts du DOM correspondant aux flèches gauche et droite.
 permetde leur associer des événements pour la navigation du carrousel. */

//selectionne les fleches avec la class "arrowLeft"
    var arrowLeft = document.querySelector('.arrow_left'); // sélectionne l'élément HTML ayant la classe arrow_left
//selectionne les fleches avec la class "arrowRight"
    var arrowRight = document.querySelector('.arrow_right'); // sélectionne l'élément HTML ayant la classe arrow_right

// Affiche dans la console les éléments sélectionnés pour vérification
    console.log("Fleche gauche :", arrowLeft); // Afficher l'élément arrowLeft dans la console -- "Fleche gauche" = message descriptif pour clarté
    console.log("Flèche droite :", arrowRight); // Afficher l'élément arrowRight dans la console -- "Fleche droite" = message descriptif pour clarté


// Chercher l'img + le txt du carrousel dans la page web
// Sélectionne l'image de la bannière avec la classe 'banner-img'
    var bannerImg = document.querySelector('.banner-img'); // Trouver l'img du carrousel
// Sélectionne le paragraphe à l'intérieur de l'élément avec l'ID 'banner'
    var bannerTagline = document.querySelector('#banner p'); // Trouver le txt de la banniere du carrousel
    console.log("Image de la bannière :", bannerImg); // avec message descriptif "image de la bannière"
    console.log("Texte de la bannière :", bannerTagline); // avec message descriptif "texte de la bannière"

    // Définition des diapositives du carrousel
// Créeer la liste des img du carrousel si elle n'existe pas encore
 
    var slides = [  /* = tableau = structure de données pour stocker une collection ordonnée d'éléments
                    comme des nombres, des trings ou des objets */

                    /* gere les différentes diapos du carrousel. Quand un utilisateur clic sur flèches 
                     le JS modifie l'index courant (currentSlide) pour afficher l'img et le txt correspondants à la diapo voulue */
        {
        // Chemin de l'image de la première diapositive
            "image": "./assets/images/slideshow/slide1.jpg", // Chemin vers la 1ere img
        // Texte associé à la première diapositive   
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        // Chemin de l'image de la 2eme diapositive
        {
            "image": "./assets/images/slideshow/slide2.jpg", // Chemin vers la 2eme img
            // Texte associé à la 2eme diapositive 
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        // Chemin de l'image de la 3eme diapositive
        {
            "image": "./assets/images/slideshow/slide3.jpg", // Chemin vers la 3eme img
            // Texte associé à la 3eme diapositive 
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        // Chemin de l'image de la 4eme diapositive
        {
            "image": "./assets/images/slideshow/slide4.png", // Chemin vers la 4eme img
            // Texte associé à la 4eme diapositive 
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];
    console.log("Diapositives du carrousel :", slides); // avec message descriptif pour afficher le contenu des slides


//  Définir la 1ere img à afficher
let currentSlide = 0; // Variable qui permet de suivre l'img affichee non constante

// Fonction qui met à jour l'img et le txt du carrousel
function updateCarousel() {
    console.log('Mise à jour du carrousel avec la diapositive', currentSlide);
    // Changer l'img de la bannière pour la nouvelle img
    bannerImg.src = slides[currentSlide].image;
    // Changer le txt de la banniere pour correspondre à la nouvelle img
    bannerTagline.innerHTML = slides[currentSlide].tagLine;
}

// Ajouter des actions à faire quand on clique sur les flèches (EventListeners)
arrowLeft.addEventListener('click', function() {
/* "addEventListener" ecoute 1 événemt sur cet élémet. Le 1er argument, 'click', signifie que l'événemt à écouter est un clic de souris.
/* "arrowLeft" = variable en ref à l'elemt du DOM de la flèche gauche 
    variable initialisée par la ligne "var arrowLeft = " */
/* "function()" exécutée chaque fois que l'event appelé se produit. Ici cette f° contient le code à exécuter quand l'utilisateur clic
     sur la flèche gauche du carrousel. */
     console.log('Avant clic gauche, currentSlide =', currentSlide);
 
    // Aller à l'img precedente, et revenir à la dernière img si on est deja à la 1ere
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    // currentSlide = variable qui indique quelle image est affichée dans le carrousel
    // === est 1 opérateur qui vérifie si 2 valeurs sont strictement égales et ont le même type (ex string)
    // L'opérateur ternaire "?"" manière d'écrire une condition.
        //syntaxe : condition ? valeur_si_vrai : valeur_si_faux;
        //Si la condition est vraie, l'expression renvoie "valeur_si_vrai" sinon renvoie "valeur_si_faux." 
    // slides.length - 1 = les img sont numérotées à partir de 0. -1 est l'image avant la 1ere, donc la derniere
    console.log('Après clic gauche, currentSlide =', currentSlide);
    updateCarousel(); // Mettre à jour l'img et le txt du carrousel pour montrer la nouvelle image
});

// Ajouter des actions à faire quand on clique sur la flèche droite
arrowRight.addEventListener('click', function() {
    // Passer à l'img suivante, et revenir à la 1ere img si on est déjà à la dernière
    console.log('Avant clic droit, currentSlide =', currentSlide);
    //currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    if (currentSlide === slides.length -1){
        currentSlide = 0;
    } else {                    // pourquoi enlever les "if/else"? "?" les remplace?
        currentSlide++;
    }
    console.log('Après clic droit, currentSlide =', currentSlide);
    updateCarousel(); // Mettre à jour l'img et le txt du carrousel pour montrer la nouvelle img
});

// Afficher la 1ere img du carrousel quand la page se charge
updateCarousel();  //le carrousel affiche immédiatement la première image et son texte associé lorsque la page est chargée
// () si fonction n'a pas besoin de parametres specifiques, on laisse les parenthèses vides
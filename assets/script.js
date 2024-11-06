// Sélection des flèches, de l'image et du texte de la bannière, et du conteneur des dots
// Regroupe en début de code car + pratique pour travailler avec ensuite

var arrowLeft = document.querySelector('.arrow_left');  
// "var" donne un nom à var cree + cherche elemt dans html

var arrowRight = document.querySelector('.arrow_right');  
// "document" cherche page HTML et trouve elemnts avec meme nom dans html

var bannerImg = document.querySelector('.banner-img');  
// cherche par ID ou class 
var bannerTagline = document.querySelector('#banner p');
var dotsContainer = document.querySelector('.dots');


// Diapos du carrousel: 

// écrit dans le code pour chaque diapositive = txt à afficher sous l’image correspondante
// <span> reprend la mise en page du css contenu dans élément par <p> du html
var slides = [  
// var " slides "" stocke chemin vers img dans dossier assets
// [ ] cree list ou "tableau" de chq elemts qui representent 1 diapo
    { "image": "./assets/images/slideshow/slide1.jpg", "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>", "alt": "Impression tous formats"},
    { "image": "./assets/images/slideshow/slide2.jpg", "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>", "alt": "Tirages haute definition"},
    { "image": "./assets/images/slideshow/slide3.jpg", "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>", "alt": "grand choix de couleurs"},
    { "image": "./assets/images/slideshow/slide4.png", "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>", "alt": "Grand choix de couleur"}
// {} groupe les infos en un objet
];
console.log("Slides chargés:", slides);


let currentSlide = 0;  
// indique la 1ere slide 0 = 1ere
// "Let" = elemt changeable contrairement à "const" qui est 1 parametre fixe
console.log("Diapositive actuelle (initialisée):", currentSlide);


// "function" pour regrouper le code et pouvoir l'appeler chaque fois qu'on en a besoin
function createDots() {  
// Création des dots de navigation    
// "function" crée les autres dots sous le carrousel 
// "()" vide car pas besoin de parametres spécifiques
    dotsContainer.innerHTML = ''; 
// recommence a zero + recrée autres dots pour empecher qu'ils se rajoutent plusieurs fois 
// "dotsContainer" = var avec container dans HTML où les "dots" devront apparaitre
// ".innerHTML = '' " = vider tt l'interieur du container + remplace contenu par '' (rien du tout) qd on relance la fonct°
console.log("Conteneur de dots vidé.");


    for (var i = 0; i < slides.length; i++) {
// " for "" = boucle = repete 1 act° 1 certain nbre de fois + cree 1 dot pour chq diapo. 
// boucle le fait automatiquemt -> repete code dans boucle autant de fois qu'il y a de diapos 
// "var i = 0;" = 1ere partie initialise le compteur "i" à 0
// "i < slides.length;" = condit° qui verifie si boucle doit continuer (i + petit que nbre de diapos)
// a Chq nouvelle valeur de "i" boucle cree 1 dot en +
        var dot = document.createElement('span');
// "var dot" = cree 1 var appelee "dot" pour stocker ce nv point
// "document.createElement('span')" crée 1 dot mit de côté (dans dot) pour l'ajouter ensuite au carrousel 
        dot.classList.add('dot');
// dit a "dot" d'ajouter 1 class "dot" pour style spécifique dans le CSS + controle apparence (changemt couleur dot dans css)        
console.log("Dot créé pour la diapositive", i);       
        dot.onclick = function(index) {
// "dot.onclick" = ajoute 1 act° au clic sur pt
// "function(index)" = cree 1 fonct° pour gérer le clic. 
// "index" = n° qui trouve quelle diapo le "." represente + garde en mémoire le n° de la diapo pour savoir laquelle s'affiche au clic sur 1 dot
            return function() {
// " return " = code renvoie qque chose  
// " function() " sans parametres specifiques -- nv fonct° pour etre executee + tard   
                currentSlide = index;
// "currentSlide" diapo actuellemt affichée + " = index; " affiche la bonne diapo qd clic dessus                
console.log("Dot cliqué - Diapositive actuelle mise à jour:", currentSlide);               
                updateCarousel();
// "updateCarousel();" = fonct° met à jour ce qui est affiché dans le carrousel + montre la nvelle diapo                
            };

        (i);}  
// Utilise le n° actuel de l'index pour chaque dot
// Ajoute le dot au conteneur
        dotsContainer.appendChild(dot); 
// "dotsContainer" = var qui cree le container pour mettre les dots en bas du carrousel
// "appenChild" place dot comme 1 elemt "enfant" dans dotsContainer
console.log("Dot ajouté au conteneur.");
    }
}


// Met à jour l'img, txt + etat des dots pour afficher diapo sélectionnee
function updateCarousel() {  
//met a jour le carrousel pour afficher la bonne img + bon txt + bon dot 
    bannerImg.src = slides[currentSlide].image; 
// "bannerImg" = ou l'img est affichee dans  HTML 
// ".src" = chemin de l’img a afficher 
// "slides[currentSlide].image" = prend l’img qui correspond a la diapo choisie (currentSlide)
    bannerTagline.innerHTML = slides[currentSlide].tagLine;
// "bannerTagline" = endroit ou la tagline s’affiche dans l'img du carrousel  
// ".innerHTML" = partie remplace contenu dans bannerTagline par le nv txt pour ecrire txt et balises HTML (ex: <span>)
// "slides[currentSlide].tagLine" = prend la tagline de la diapo actuelle (currentSlide)"
console.log("Carrousel mis à jour - Image:", slides[currentSlide].image, "Tagline:", slides[currentSlide].tagLine);
    updateDots();
// "updateDots();" actualise les dots pour montrer celui de l'img affichee 
}


// Fonction pour mettre en surbrillance le dot actif
function updateDots() {  
// "updateDots();" nom de la fonct°
    var dots = dotsContainer.querySelectorAll('.dot');  
// "var dots" garde la liste tous les points
// "dotsContainer.querySelectorAll('.dot') " = cherche ttes les class ".dot" => liste de dots
    for (var i = 0; i < dots.length; i++) { 
// "for" = boucle
// "(var i = 0; i < dots.length; i++) " = structure de la boucle 
// " var i = 0 " cree 1 var "i" qui commence a 0 => represente le n° de chq point dans la liste
// "i < dots.length " = boucle continue tant que "i" + petit que nbre total de points => permet de parcourir chq point 
// " i++ " = augmente "i" de 1 a chq tour de boucle pour passer au dot suivant
        dots[i].classList.toggle('dot_selected', i === currentSlide);
// "dots[i]" = prend le pt actuel dans la liste dots
// ".classList.toggle" = ajoute ou retire 1 class CSS d’1 elemt
//  "toggle" ajoute ou enleve class "dot_selected" si elle est deja la
// " 'dot_selected' " = nom de la class qu'on veut ajouter ou enlever = class fait briller le pt
// " i === currentSlide " = verifie si n° du pt actuel "(i)" est = au n° de diapo actuelle (currentSlide)
// si i = "currentSlide " class "dot_selected" ajoutee pour mettre en evidence le dot sinon class retiree
console.log("Dot", i, "mis à jour - Actif:", i === currentSlide);
    }
}


// Navigation avec les flèches gauche et droite
arrowLeft.onclick = function() {
//" arrowLeft " = fleche gauche selectionnee dans HTML
// ".onclick" = qd on clic sur elmt
// "function() " = cree 1 fonct° qui sera executee qd clic sur fleche gauche.
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
// Si on est sur 1ere diapo on saute a dernière sinon recule d’1 diapo
// " currentSlide" = diapo affichee
// " (currentSlide === 0) " = verifie si on est sur 1ere diapo (index 0)
// " ? slides.length - 1 " = si "true" (sinon) passe a dernière diapo (slides.length - 1)
// "currentSlide - 1" = passe a diapo d'avant en diminuant " currentSlide de 1 "
console.log("Flèche gauche cliquée - Diapositive actuelle:", currentSlide);
    updateCarousel();
// met à jour le carrousel pour afficher la derniere diapo
// " updateCarousel() " = nom de la fonct° deja definie + appelee ici pour actualiser l’img, txt, dots 
// "()" = parenthese qui execute immédiatement cette fonct°
};


// idem que pour "arrowRight"
arrowRight.onclick = function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    console.log("Flèche droite cliquée - Diapositive actuelle:", currentSlide);
    updateCarousel();
};


// cree les dots + affiche 1ere img du carrousel.
createDots();
// cree ts les dots de navigat°
updateCarousel();
// affiche la 1ere img + 1er txt + met en evidence le bon dot
console.log("Initialisation terminée : dots créés et première diapositive affichée.");

// ajout nouvelle couleur de dot dans css: #ff008e ligne 168 car j'ai trouvé qu'il n'était pas assez visible
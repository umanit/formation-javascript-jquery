"use strict";

var images = document.getElementsByTagName("img");

// 1. Au survol de la première image, faire apparaître img/laptop.jpg.
images[0].addEventListener("mouseover", function(e){
    this.src = "img/laptop.jpg";
});
images[0].addEventListener("mouseout", function(e){
    this.src = "img/laptop-grayscale.jpg";
});

// 2. Mettre la seconde image en noir et blanc lorsqu'on la survole. Cette fois, utiliser CSS.
images[1].addEventListener("mouseover", function(e){
    this.style.filter = "grayscale(100%)";
    this.style["-webkit-filter"] = "grayscale(100%)";
});
images[1].addEventListener("mouseout", function(e){
    this.style.filter = "grayscale(0%)";
    this.style["-webkit-filter"] = "grayscale(0%)";
});

// 3. Au clic sur la deuxième image, afficher son texte alternatif dans #legend.
images[1].addEventListener("click", function(e){
    document.getElementById("legend").innerHTML = this.alt;

    // 4. Trois secondes après ce clic, réinitialiser le contenu de #legend.
    setTimeout(function(){
        document.getElementById("legend").innerHTML = "";
    }, 3000);
});

// 5. Toutes les 750 millisecondes, incrémenter la barre de progression de 10 en 10 jusqu'à atteindre 100%.
var progressBar = document.getElementsByClassName("progress-bar")[0],
    progress = 0;
var progressBarInterval = setInterval(function(){
    progressBar.setAttribute("aria-valuenow", progress);
    progressBar.style.width = progress + "%";
    progressBar.innerHTML = progress + "%";

    // 6. Lorsque la barre atteint 100%, lui ajouter la classe progress-bar-success.
    if (progress === 100) {
        progressBar.className += " progress-bar-success";
        clearTimeout(progressBarInterval);
    }
    progress += 10;
}, 750);

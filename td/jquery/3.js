"use strict";

// Lorsque les éléments audio et video sont chargés
$(window).load(function(){

    // 1. Jouer keyboard.mp3 à la saisie de texte dans le textarea, à chaque fois qu'une touche est pressée.
    var audios = $("audio");

    var keyboardSound = audios.get(0),
        carriageReturnSound = audios.get(1);

    $("#message").on("keydown", function(e){

        // 2. Lorsque la touche Entrée est pressée, jouer carriage-return.mp3.
        if (e.keyCode === 13) {
            carriageReturnSound.currentTime = 0;
            carriageReturnSound.play();
        } else {
            keyboardSound.currentTime = 0;
            keyboardSound.play();
        }
    });

    var video = $("video").get(0);

    // 3. Supprimer l'attribut controls de la balise video.
    video.removeAttribute("controls");

    // 4. Sur les boutons #play et #pause, brancher les méthodes play et pause de l'élément DOM <video>.
    $("#play").click(function(e){
        e.preventDefault();
        video.play();
    });
    $("#pause").click(function(e){
        e.preventDefault();
        video.pause();
    });

    // 5. Utiliser le plugin Slider de jQuery UI sur #volume.
    $("#volume").slider({
        value: video.volume * 100,
        min: 0,
        max: 100,
        slide: function(e, ui) {
            // 6. Faire coulisser le slider doit modifier le volume de la vidéo.
            video.volume = ui.value / 100;
        }
    });

});

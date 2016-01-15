"use strict";

// 1. Transformer ce select en select multiple.
var selects = document.getElementsByTagName("select"),
    select = selects[0];
select.multiple = true;

// 2. Corriger ma faute d'orthographe.
var ceriseOption = select.children[1];
ceriseOption.innerHTML = "Cerise";

// 3. Sélectionner les deux dernières options uniquement.
for (var i=0; i<select.children.length; i++) {
    var option = select.children[i];
    option.selected = i<1 ? false : true;
}

addOption("Banane");

// 5. Au clic sur le bouton, utiliser le champ de saisie pour ajouter dynamiquement un nouvel élément à la liste.
var input = document.getElementById("fruit"),
    addButton = document.forms[0].elements[2];

addButton.addEventListener("click", function(e){
    e.preventDefault();
    var value = input.value;
    addOption(value);
});

// 6. Ajouter un second bouton pour supprimer le dernier élément de la liste.
var form = document.forms[0],
    removeButton = document.createElement("input");
removeButton.type = "submit";
removeButton.value = "Supprimer";
removeButton.addEventListener("click", function(e){
    e.preventDefault();
    var lastOption = select.lastElementChild;
    if (lastOption !== null) { // 7. Que se passe-t-il lorsque la liste est vide ? Ajouter une structure de contrôle pour éviter cette erreur.
        lastOption.remove();
    }
});
form.appendChild(removeButton);

// 8. Utiliser la structure de contrôle for pour ajouter tous les éléments contenus dans la variable fruits.
for (var i=0; i<fruits.length; i++) {
    var fruit = fruits[i];
    addOption(fruits[i]);
}

// 9. Créer une fonction addOption et l'utiliser dans les points 4, 5 et 8.
function addOption(optionName) {
    // 4. Ajouter un élément à la liste.
    var option = document.createElement("option");
    option.innerHTML = optionName;
    select.appendChild(option);
}

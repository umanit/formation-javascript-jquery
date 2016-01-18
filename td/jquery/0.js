"use strict";

$(document).ready(function(){

    var ul = $("#books");

    // 2. Faire un appel ajax.
    $.ajax({
        url: "https://raw.githubusercontent.com/vrobic/formation-javascript-jquery/master/td/jquery/books.json",
        dataType: "json",
        success: function(data){

            // 3. Stocker la réponse de cet appel dans une variable.
            var json = data;

            // 4. Boucler sur cette variable pour compléter la liste à puces.
            for (var i=0; i < json.books.length; i++) {

                var book = json.books[i];

                var li = $('<li>'),
                    a = $('<a>');

                a.html(book.title + " (" + book.author + ")");
                a.attr("href", book.url);

                // 5. Si la propriété external d'un livre vaut true, le lien devra s'ouvrir dans un nouvel onglet.
                if (book.external) {
                    a.attr("target", "_blank");
                }

                li.append(a);
                ul.append(li);
            }
        }
    });
});
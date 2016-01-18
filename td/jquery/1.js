"use strict";

$("ul.nav-tabs li a").click(function(e){

    e.preventDefault();

    var selector = $(this).attr("href");

    var onglets = $("section");
    var ongletToDisplay = onglets.filter(selector);

    onglets.removeClass("visible");
    ongletToDisplay.addClass("visible");

});

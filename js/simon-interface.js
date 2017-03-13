var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var newSimon = new Simon;
    $("#turn").click(function(event) {
        event.preventDefault();
        $('.output').empty();
        var firstturn = newSimon.sequenceBuild();
        $('.output').append("<p>" + firstturn + "</p>");
    });

    $("#start").click(function(event) {
        event.preventDefault();
        newSimon.sequence = [];
        $('.output').empty();
        $('.output').append("<p>" + "click new turn to play " + "</p>");
    });

    $('#yellow').click(function(event) {
        event.preventDefault();
        newSimon.guessPush(1);
    });

    $('#green').click(function(event) {
        event.preventDefault();
        newSimon.guessPush(2);
    });

    $('#blue').click(function(event) {
        event.preventDefault();
        newSimon.guessPush(3);
    });

    $('#red').click(function(event) {
        event.preventDefault();
        newSimon.guessPush(4);
    });

    $("#play").click(function(event) {
        event.preventDefault();
        $('.output').empty();

        if (newSimon.checkGuess() === true){
            $('.output').append("<p>" + "You are right, click new turn to keep playing "+ "</p>");
        }else{
              $('.output').append("<p>" + "You are wrong, click new game to play again "+ "</p>");
        }
        newSimon.guesses = [];
    });

});

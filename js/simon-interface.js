var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var newSimon = new Simon;
    $("#turn").click(function(event) {
        event.preventDefault();
        $('.output').empty();
        var turn = newSimon.sequenceBuild();
        var fullArray = newSimon.sequence;

        fullArray.forEach(function(color) {
          if (color === 1) {
            $('#yellow').css("background-color", "yellow");
            setTimeout(function(){ $('#yellow').css("background-color", "white");}, 500);
          } else if (color === 2) {
            setTimeout(function(){$('#green').css("background-color", "green");}, 500);
            setTimeout(function(){$('#green').css("background-color", "white");}, 1000);
          } else if (color === 3) {
            setTimeout(function(){$('#blue').css("background-color", "blue");}, 1000);
            setTimeout(function(){$('#blue').css("background-color", "white");}, 1500);
          } else {
            setTimeout(function(){$('#red').css("background-color", "red");}, 2000);
            setTimeout(function(){$('#red').css("background-color", "white");}, 2500);
          }

        });

        $('.output').append("<p>" + turn + "</p>");
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

var guesses = [];
var sequence = [];

function sequenceBuild() {
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    sequence.push(randomNumber);
    return sequence;
};

function checkGuess() {
    if (sequence.length !== guesses.length) {
      return false;
    }
    for (var i = 0; i <= sequence.length; i++) {
        if (sequence[i] !== sequence[i]) {
            return false;
        } else {
            return true;
        }
    }
};



$(document).ready(function() {
    $("#turn").click(function(event) {
        event.preventDefault();
        var firstturn = sequenceBuild();
        $('.output').append("<p>" + firstturn + "</p>");
    });

    $("#start").click(function(event) {
        event.preventDefault();
        sequence = [];
        guesses = [];
        $('.output').append("<p>" + "click new turn to play " + "</p>");
    });

    $('#yellow').click(function(event) {
        event.preventDefault();
        guesses.push(1);
    });
    $('#green').click(function(event) {
        event.preventDefault();
        guesses.push(2);
    });
    $('#blue').click(function(event) {
        event.preventDefault();
        guesses.push(3);
    });
    $('#red').click(function(event) {
        event.preventDefault();
        guesses.push(4);
    });

    $("#play").click(function(event) {
        event.preventDefault();
        if (checkGuess() === true){
            $('.output').append("<p>" + "You are right, click new turn to keep playing "+ "</p>");
        }else{
              $('.output').append("<p>" + "You are wrong, click new game to play again "+ "</p>");
        }
        guesses = [];
      console.log("guesses" + guesses);
      console.log("sequence"  + sequence);

    });

});

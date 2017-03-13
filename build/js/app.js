(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon() {
  this.sequence = [];
  this.guesses = [];
};

Simon.prototype.sequenceBuild = function () {
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    this.sequence.push(randomNumber);
    return this.sequence;
};

Simon.prototype.guessPush = function (guess) {
    this.guesses.push(guess);
    return this.guesses;
};

Simon.prototype.checkGuess = function () {
   if (this.sequence.length !== this.guesses.length) {
      return false;
    }
    for (var i = 0; i <= this.sequence.length; i++) {
        if (this.sequence[i] !== this.guesses[i]) {
            return false;
        }
    }
    return true;
};

exports.simonModule = Simon;

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);

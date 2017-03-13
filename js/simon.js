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

function Player (playerName){
  this.playerName = name;
  this.score = 0;
  this.guesses = [];
}

function Game(turn){
  this.turn = turn;
  this.sequence = [];

}

Game.prototype.sequenceBuild = function () {
  var randomNumber = Math.floor((Math.random()* 4) + 1);
  this.sequence.push(randomNumber);
  console.log(this.sequence);
  return randomNumber;
};

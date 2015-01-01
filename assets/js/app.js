"use strict";
var StartState = function StartState(game) {
  this.commandForm = document.getElementById('command-form');
};
($traceurRuntime.createClass)(StartState, {
  preload: function() {
    this.load.spritesheet('meaow', 'assets/images/cat.png', 40, 40, 4);
  },
  create: function() {
    var $__0 = this;
    this.cat = this.add.sprite(0, 0, 'meaow');
    this.cat.animations.add('turnUp', [0], 6, true);
    this.cat.animations.add('turnDown', [1], 6, true);
    this.cat.animations.add('turnLeft', [2], 6, true);
    this.cat.animations.add('turnRight', [3], 6, true);
    this.commandForm.addEventListener('submit', (function(event) {
      event.preventDefault();
      var command = document.querySelector('#command-form > input[name=command]').value;
      if (command === 'left') {
        $__0.cat.animations.play('turnLeft');
        $__0.cat.x -= 40;
      }
      if (command === 'right') {
        $__0.cat.animations.play('turnRight');
        $__0.cat.x += 40;
      }
      if (command === 'up') {
        $__0.cat.animations.play('turnUp');
        $__0.cat.y -= 40;
      }
      if (command === 'down') {
        $__0.cat.animations.play('turnDown');
        $__0.cat.y += 40;
      }
      document.querySelector('#command-form > input[name=command]').value = '';
    }));
    this.cat.animations.play('turnRight');
  }
}, {});
var MeaowGame = function MeaowGame() {
  $traceurRuntime.superConstructor($MeaowGame).call(this, 400, 300, Phaser.AUTO, 'meaow');
  this.state.add('startgame', StartState);
  this.state.start('startgame');
};
var $MeaowGame = MeaowGame;
($traceurRuntime.createClass)(MeaowGame, {}, {}, Phaser.Game);
new MeaowGame();
//# sourceURL=app.js
"use strict";

var preload = function(game) {
};

preload.prototype = {
	preload: function() {
		this.game.load.spritesheet('cell', 'assets/images/cell.png', 128, 128, 2);
		this.game.load.image('leaderboard', 'assets/images/leaderboard.png');
	},

	create: function() {
		this.game.state.start("Play");
	}
}
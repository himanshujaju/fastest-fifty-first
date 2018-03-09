"use strict";

var preload = function(game) {
};

preload.prototype = {
	preload: function() {
		this.game.load.spritesheet('cell', 'assets/images/cell.png', 160, 160, 2);
	},

	create: function() {
		this.game.state.start("Play");
	}
}
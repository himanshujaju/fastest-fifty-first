"use strict";

var boot = function(game) {
};

boot.prototype = {
	preload: function() {
		this.game.load.image("background", "assets/images/background.png");
	},

	create: function() {
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(false, true);
        this.input.maxPointers = 2;
        this.state.start('Preload');
	}
}
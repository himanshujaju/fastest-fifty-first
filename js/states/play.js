"use strict";

var play = function(game) {
};

play.prototype = {
	preload: function() {
		console.log("Preload");
	},

	create: function() {
		this.init();
		this.drawBackground();
		this.drawBoard();
		this.drawTimer();
	},

	init: function() {
		this.hasGameStarted = false;
		this.generateArrays();
		this.nextNumber = 1;
	},

	update: function() {
		if (this.hasGameStarted == true) {
			this.updateTimer();
		}
	},

	drawBackground: function() {
		var bg = this.game.add.image(0, 0, "background");
		bg.inputEnabled = false;
	},

	drawBoard: function() {
		var posTop = CONSTANTS.BOARD.OFFSET.TOP;
		var id = 0;
		for (var row = 0; row < CONSTANTS.BOARD.ROWS; row++) {
			var posLeft = CONSTANTS.BOARD.OFFSET.LEFT;
			for (var col = 0; col < CONSTANTS.BOARD.COLS; col++) {
				this.addCellOnBoard(posLeft, posTop, this.prettify(this.firstFace[id], 2));
				posLeft += CONSTANTS.BOARD.CELL.WIDTH + CONSTANTS.BOARD.CELL_SPACING;
				id += 1;
			}
			posTop += CONSTANTS.BOARD.CELL.HEIGHT + CONSTANTS.BOARD.CELL_SPACING;
		}
	},

	generateArrays: function() {
		this.firstFace = [];
		this.secondFace = [];
		for (var i = 1; i <= 25; i++) {
			this.firstFace.push(i);
			this.secondFace.push(i + 25);
		}
		this.firstFace = this.shuffle(this.firstFace);
		this.secondFace = this.shuffle(this.secondFace);
	},

	prettify: function(num, length) {
		var ret = "";
		var div = 1;
		for (var i = 0; i < length; i++) {
			div *= 10;
		}
		for (var i = 0; i < length; i++) {
			div /= 10;
			ret += ("" + Math.floor(num / div));
			num %= div;
		}
		return ret;
	},

	shuffle: function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex){
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	},

	addCellOnBoard: function(x, y, text) {
		let tempCell = this.game.add.button(x, y, "cell", this.onClick, this, 0, 0, 1, 0);
		let style = {
			font: "90px Helvetica",
			fill: "#D9DBF0"
		};
		let buttonText = this.game.add.text(CONSTANTS.BOARD.CELL.WIDTH/2, CONSTANTS.BOARD.CELL.HEIGHT/2, text, style);
		buttonText.anchor.setTo(0.5);
		tempCell.addChild(buttonText);
		tempCell.inputEnabled = true;
		buttonText.inputEnabled = false;
	},

	onClick: function(button) {
		let numberClicked = parseInt(button.children[0]._text);
		if (numberClicked == this.nextNumber) {
			this.nextNumber += 1;
			if (this.nextNumber > 50) {
				this.endGame();
			}

			if (numberClicked > 25) {
				button.children[0].setText("");
				button.inputEnabled = false;
				button.visible = false;
			} else {
				if (numberClicked == 1) {
					this.startGame();
				}

				// can be optimised to O(1) by keeping reverse lookup
				for (var i = 0; i < 25; i++) {
					if (numberClicked == this.firstFace[i]) {
						button.children[0].setText(this.secondFace[i]);
						break;
					}
				}
			}
		}
	},

	drawTimer: function() {
		let textStyle = {
			font: "100px Montserrat",
			align: "center",
			fill: "#FCFFE5"
		};
		this.timer = this.game.add.text(384, 33, "000.000", textStyle);
		this.timer.anchor.setTo(0.5, 0);
		
		textStyle.font = "40px Montserrat";
		let timerInfo = this.game.add.text(384, 140, "SECONDS ELAPSED", textStyle);
		timerInfo.anchor.setTo(0.5, 0);
	},

	updateTimer: function() {
		this.endTime = new Date().getTime();
		let diff = this.endTime - this.startTime;
		this.timer.text = this.prettify(Math.floor(diff / 1000), 3) + "." + this.prettify(diff % 1000, 3);
		if (diff >= 999999) {
			this.endGame();
		}
	},

	startGame: function() {
		this.hasGameStarted = true;
		this.startTime = new Date().getTime();
	},

	endGame: function() {
		this.hasGameStarted = false;
	}
}

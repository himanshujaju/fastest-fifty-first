"use strict";

let CONSTANTS = {
	GAME: {
		WIDTH: 1080,
		HEIGHT: 1920
	},
	STRINGS: {
		DEFAULT_TIMER: "000.000",
		TIMER_DESCRIPTION: "seconds elapsed"
	},
	BOARD: {
		ROWS: 5,
		COLS: 5,
		OFFSET: {
			LEFT: 80,
			TOP: 579
		},
		CELL: {
			HEIGHT: 160,
			WIDTH: 160
		},
		CELL_SPACING: 30
	},
	STATES: {
		BOOT: "boot",
		GAME_OVER: "gameOver",
		MENU: "menu",
		PLAY: "play",
		PRELOAD: "preload"
	}
};
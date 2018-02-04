"use strict";

let CONSTANTS = {
	GAME: {
		WIDTH: 768,
		HEIGHT: 1280
	},
	STRINGS: {
		DEFAULT_TIMER: "000.000",
		TIMER_DESCRIPTION: "SECONDS ELAPSED"
	},
	BOARD: {
		ROWS: 5,
		COLS: 5,
		OFFSET: {
			LEFT: 44,
			TOP: 256
		},
		CELL: {
			HEIGHT: 128,
			WIDTH: 128
		},
		CELL_SPACING: 10
	},
	STATES: {
		BOOT: "boot",
		GAME_OVER: "gameOver",
		MENU: "menu",
		PLAY: "play",
		PRELOAD: "preload"
	}
};
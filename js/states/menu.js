"use strict";

var menu = function(game) {
	console.log("Preload screen");
};

menu.prototype = {
	preload: function() {
		console.log("Preload");
	},

	create: function() {
		console.log("Create");
	}
}
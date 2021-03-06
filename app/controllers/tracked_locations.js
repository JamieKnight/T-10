/**
 * Tracked Locations section opening controller file
 */

var Helper = require('Helper');
var log = Helper.log;


/**
 * Open the tracked locations window
 * @return {[type]} [description]
 */

function open() {
	$.trackedLocations.addEventListener('blur', function (e) {
		Ti.API.warn("trackedLocations window closed");
		$.trackedLocations.close();
	});
	
	$.trackedLocations.open();
	
}

function close() {
	Ti.API.info("Closing window");
	$.trackedLocations.close();
	
}


function addLocation(e) {
	var addEvent = Alloy.createController("space_addEvent");
	addEvent.open();
	// Ti.API.warn("SAVE LOCATION CHANGES");
}

function home(e) {
	var nextPasses = Alloy.createController("next_passes");
	nextPasses.open();

}



exports.open = open;
exports.close = close;
var Constants  = require('../Constants');
var Dispatcher = require('../Dispatcher');

var Actions = {
	toggleView: function(state) {
		Dispatcher.handleViewAction({
			actionType: Constants.ActionTypes.TOGGLE_VIEW,
			state: state
		});
	},

	download: function(hash) {
		Dispatcher.handleViewAction({
			actionType: Constants.ActionTypes.DOWNLOAD,
			hash: hash
		});
	},

	updateFile: function(filename) {
		Dispatcher.handleViewAction({
			actionType: Constants.ActionTypes.UPDATE_FILE,
			filename: filename
		});
	}
};

module.exports = Actions;
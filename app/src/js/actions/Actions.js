var Constants  = require('../Constants');
var Dispatcher = require('../Dispatcher');

var Actions = {
	toggleView: function(state) {
		Dispatcher.handleViewAction({
			actionType: Constants.ActionTypes.TOGGLE_VIEW,
			state: state
		});
	}
};

module.exports = Actions;
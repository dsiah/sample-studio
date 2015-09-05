// React Conf EU -- Redux
import React from 'react';
import Actions from '../actions/Actions.js';
import Store from '../stores/Store.js'

var SampleToggle = React.createClass({
	handler: function() {
		Actions.toggleView(Store.getView());
	},

	render: function() {
		return (<button onClick={this.handler}>
			ToggleSample
		</button>);
	}
});

module.exports = SampleToggle;
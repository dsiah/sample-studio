import React from 'react';
import Store from '../stores/Store';

var Pad = React.createClass({
	getInitialState: function() {
		return {mode: Store.getView()};
	},

	componentDidMount: function() {
		Store.addChangeListener(this.handler);
	},

	componentWillUnmount: function() {
		Store.removeChangeListener(this.handler);
	},

	handler: function() {
		this.setState({mode: Store.getView()});
	},

	touch: function() {
		Store.getAvailableSamples();
	},

	render: function() {
		return (<div className="pads" onClick={this.touch}>
			{this.props.id}
		</div>);
	}
});

module.exports = Pad;
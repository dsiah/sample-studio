import React from 'react';
import Store from '../stores/Store';

var Status = React.createClass({
	getInitialState: function() {
		return { importState: Store.getView() };
	},

	componentDidMount: function() {
		Store.addChangeListener(this.handler);
	},

	componentWillUnmount: function() {
		Store.removeChangeListener(this.handler);
	},

	handler: function() {
		this.setState({ importState: Store.getView() });
	},

	render: function() {
		return <div>{this.state.importState}</div>;
	}
});

module.exports = Status;
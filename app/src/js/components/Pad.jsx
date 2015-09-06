import React from 'react';
import Store from '../stores/Store';

document.onkeypress = function(e) {
	var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
	var call = charCode % 49 + 1;
	if (call < 9 && call > 0) {
		Store.playSample(call);
	}
}

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
		Store.playSample(this.props.id);
	},

	render: function() {
		return (<div className="pads" onClick={this.touch}>
			{this.props.id}
		</div>);
	}
});

module.exports = Pad;
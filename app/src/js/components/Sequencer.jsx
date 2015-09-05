import React from 'react';
import Pad from './Pad.jsx';

var Sequencer = React.createClass({
	pads: [1, 2, 3, 4, 5, 6, 7, 8, 9],

	styles: {
		width: '345px',
		height: '345px',
		padding: '10px',
		borderRadius: '3px',
		backgroundColor: 'lightgrey'
	},

	render: function() {
		return (<div style={this.styles}>
			{this.pads.map(function(padId) {
				return <Pad key={padId} id={padId} />;
			})}
		</div>);
	}
});

module.exports = Sequencer;
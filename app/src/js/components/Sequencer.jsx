import React from 'react';
import Pad from './Pad.jsx';

var Sequencer = React.createClass({
	pads: [1, 2, 3, 4, 5, 6, 7, 8, 9],

	styles: {
		padding: '10px',
		borderRadius: '3px'
	},

	render: function() {
		return (<div style={this.styles} className="twin-containers">
			{this.pads.map(function(padId) {
				return <Pad key={padId} id={padId} />;
			})}
		</div>);
	}
});

module.exports = Sequencer;
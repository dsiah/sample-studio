import React from 'react';

var AssignForm = React.createClass({
	render: function() {
		return (<div>
			<h3>Assign Sounds</h3>
			<select></select>
			Start:<input type="time"></input>
			End:<input type="time"></input>
			Select Synth<input type="number"></input>
			<button>Assign!</button>
		</div>);
	}
});

module.exports = AssignForm;
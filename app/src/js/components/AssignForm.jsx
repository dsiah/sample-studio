import React from 'react';
import FileDropdown from './FileDropdown.jsx';

var AssignForm = React.createClass({
	render: function() {
		return (<div className="assign-form twin-containers">
			<h3>Assign Sounds</h3>
			<FileDropdown source="http://localhost:8080/availableSongs"/>			
			<div>Start Time:<input type="number"></input></div>
			<div>Length(ms):<input type="number"></input></div>
			<div>Select Pad:<input type="number" min="1" max="9"></input></div>
			<button>Assign!</button>
		</div>);
	}
});

module.exports = AssignForm;
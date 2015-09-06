import React from 'react';
import request from 'request';
import Store from '../stores/Store';


var FileDropdown = React.createClass({
	
	getInitialState: function() {
		return {loaded: false, files: [1, 2, 3]};
	},
	
	componentDidMount: function() {
		var comp = this;
		request('http://localhost:8080/availableSongs', function(err, r, body) {
			if (err)
				var vail = ['dummy1', 'dummy2', 'dummy3'];
			else
				var vail = JSON.parse(body)['files']; 
			
      comp.setState({files: vail, loaded: true});
    });
	},

	render: function() {
		if (this.state.loaded) {
			return (<select>
				{this.state.files.map(function(item) {
					return <option>{item}</option>;
				})}
			</select>);
		} else {
			return <select></select>;
		}
	}
});

module.exports = FileDropdown;
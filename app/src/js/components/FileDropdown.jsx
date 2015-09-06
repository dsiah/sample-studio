import React from 'react';
import request from 'request';
import Actions from '../actions/Actions';

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
      Actions.updateFile(vail[0]);
    });
	},

	_onChange: function(e) {
			Actions.updateFile(e.target.value);
	},

	render: function() {
		if (this.state.loaded) {
			return (<select onChange={this._onChange} value={this.state.file}>
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
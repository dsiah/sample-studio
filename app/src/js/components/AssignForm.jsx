import React from 'react';
import Store from '../stores/Store';
import FileDropdown from './FileDropdown.jsx';

var AssignForm = React.createClass({
	getInitialState: function() {
		return {sample: Store.getUpdatedFile() , start: 0, len: 0, pad: 1}
	},

	componentDidMount: function() {
		Store.addChangeListener(this.handler);
	},

	componentWillUnmount: function() {
		Store.removeChangeListener(this.handler);
	},

	handler: function() {
		this.setState({sample: Store.getUpdatedFile()}, function() {
			console.log(this.state);
		});
	},

	_onChangeTime: function(e) {
		this.setState({start: e.target.value});
	},

	_onChangeLength: function(e) {
		this.setState({len: e.target.value});
	},

	_onChangePad: function(e) {
		this.setState({pad: e.target.value});
	},

	_onChangeSample: function(e) {
		this.setState({sample: e.target.value});
	},

	render: function() {
		return (<div className="assign-form twin-containers">
			<h3>Assign Sounds</h3>
			<FileDropdown source="http://localhost:8080/availableSongs" />		
			<div>Start Time:<input type="number" value={this.state.start} 
				onChange={this._onChangeTime}></input>
			</div>
			<div>Length(ms):<input type="number" value={this.state.len} 
				onChange={this._onChangeLength}></input>
			</div>
			<div>Select Pad:<input type="number" value={this.state.pad} 
				onChange={this._onChangePad} min="1" max="9"></input>
			</div>
			<button onClick={this.handler}>Assign!</button>
		</div>);
	}
});

module.exports = AssignForm;
import React from 'react';
import request from 'request';
import Store from '../stores/Store';
import Actions from '../actions/Actions';

var FetchForm = React.createClass({
	getInitialState: function() {
		return {hash: null};
	},

	handler: function() {
		Actions.download(this.state.hash);
		this.setState({hash: ''});
	},

	_onChange: function(e) {
		this.setState({hash: e.target.value});
	},

	render: function() {
		return (<div id="fetch-form">
			<h3>Import Sounds</h3>
			<div>URL-Hash:
				<input type="text" value={this.state.hash} onChange={this._onChange}></input>
				<button onClick={this.handler}>Fetch!</button>
			</div>
		</div>);
	}
});

module.exports = FetchForm;
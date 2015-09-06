import React from 'react';

var FetchForm = React.createClass({
	render: function() {
		return (<div id="fetch-form">
			<h3>Import Sounds (Youtube only)</h3>
			<div>URL-Hash:
				<input type="text"></input>
				<button>Fetch!</button>
			</div>
		</div>);
	}
});

module.exports = FetchForm;
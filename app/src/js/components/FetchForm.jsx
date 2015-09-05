import React from 'react';

var FetchForm = React.createClass({
	render: function() {
		return (<div>
			<h3>Import Sounds (Youtube only)</h3>
			URL-Hash:<input type="text"></input>
			<button>Fetch!</button>
		</div>);
	}
});

module.exports = FetchForm;
import React from 'react';
import Title from './Title.jsx';
import Sequencer  from './Sequencer.jsx';
import FetchForm  from './FetchForm.jsx';
import AssignForm from './AssignForm.jsx';

var App = React.createClass({
	render: function() {
		return (<div>
			<Title />
			<Sequencer />
			<AssignForm />
			<FetchForm />
		</div>);
	}
});

module.exports = App;
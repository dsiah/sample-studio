import React from 'react';
import Sequencer from './Sequencer.jsx';
import AssignForm from './AssignForm.jsx';
import SampleToggle from './SampleToggle.jsx';



var App = React.createClass({
	render: function() {
		return (<div>
			<Sequencer />
			<SampleToggle />
			<AssignForm />
		</div>);
	}
});

module.exports = App;
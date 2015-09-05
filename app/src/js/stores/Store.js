var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var request = require('request');
var assign = require('react/lib/Object.assign');
var Dispatcher = require('../Dispatcher.js');
var Constants  = require('../Constants.js');

var _view = 'play'; // toggle play - assign
var _samples = [];  // (max 9) map to pads
var _availableSamples;

function _popAvailable() {
  
}

function _toggleView(view) {
	if (_view == 'play')
		_view = 'assign';
	else
		_view = 'play';
}

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  getView: function() {
  	return _view;
  },

  getAvailableSamples: function() {
    request('http://localhost:5000/availableSongs', function(err, r, body) {
      _availableSamples = JSON.parse(body)['files'];
      console.log(_availableSamples);
    });
  },

  dispatcherIndex: Dispatcher.register(function(payload) {
  	var action = payload.action;
  	
  	switch(action.actionType) {
  		case Constants.ActionTypes.TOGGLE_VIEW:
  			_toggleView(action.state);
  			break;
  	}

  	AppStore.emitChange();
    
  	return true;
  })
});

module.exports = AppStore;
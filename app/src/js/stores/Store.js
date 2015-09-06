var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var request = require('request');
var assign  = require('react/lib/Object.assign');
var Dispatcher = require('../Dispatcher.js');
var Constants  = require('../Constants.js');
var abs = require('audiobuffer-slice');

window.audioContext = window.audioContext || window.webkitAudioContext;

var _view = 'play'; // toggle play - assign
var _samples = {};  // (max 9) map to pads
var _availableSamples;
var _updatedFile = '';
var context = new AudioContext();

function _downloadAudio(hash) {
  request('http://localhost:8080/song/'+ hash, function(err, r, body) {
    _availableSamples.push(String(hash) + '.mp3');
    return String(hash) + '.mp3';
  });
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

  getUpdatedFile: function() {
    return _updatedFile;
  },

  registerSample: function(file, pad, start, end) {
    // (TODO) replace with request library
    var request = new XMLHttpRequest();
    request.open('GET','http://localhost:8080/song/' + file.replace('.mp3', ''), true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer) {
        abs(buffer, start, end, function(err, nbf) {
          _samples[pad] = nbf;  
          console.log(_samples);
        });
      });
    }

    request.send();
  },

  playSample: function(pad) {
    console.log(_samples[pad]);
    if (_samples[pad]) {
      var source = context.createBufferSource(); // creates a sound source
      source.buffer = _samples[pad];             // tell the source which sound to play
      source.connect(context.destination);       // connect the source to the context's destination (the speakers)
      source.start(0);
    }
  },

  getAvailableSamples: function() {
    request('http://localhost:8080/availableSongs', function(err, r, body) {
      _availableSamples = JSON.parse(body)['files'];
      console.log(_availableSamples);
      return _availableSamples;
    });
  },

  dispatcherIndex: Dispatcher.register(function(payload) {
  	var action = payload.action;
  	
  	switch(action.actionType) {
  		case Constants.ActionTypes.TOGGLE_VIEW:
  			_toggleView(action.state);
  			break;

      case Constants.ActionTypes.DOWNLOAD:
        _downloadAudio(action.hash);
        break;

      case Constants.ActionTypes.UPDATE_FILE:
        _updatedFile = action.filename;
        break;
  	}

  	AppStore.emitChange();

  	return true;
  })
});

module.exports = AppStore;
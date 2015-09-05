var express = require('express');
var app  = express();
var fs   = require('fs');
var path = require('path');
var ytdl = require('youtube-dl');

app.get('/availableSongs', function(req, res) {
	fs.readdir('downloads', function(err, files) {
		res.json({files: files});
	});
});

app.get('/song/:key', function(req, res) {
	var url = 'https://www.youtube.com/watch?v=' + req.params.key;
	var filename = req.params.key + '.mp3';
	var args = ['-x', '--audio-format', 'mp3', '-o', './downloads/%(id)s.%(ext)s'];
	
	ytdl.exec(url, args, {}, function(err, output) {
  	if (err) 
  		throw err;

  	res.sendFile(filename , { root: path.join(__dirname, './downloads')});
	});

});

app.use(express.static('app/dist'));

app.get('/', function(req, res) {
	res.sendFile('index.html', { root: path.join(__dirname, './') });
});

app.listen(5000);
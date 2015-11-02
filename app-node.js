var express = require('express');
var app = express();
var request = require('request');

app.set('port',2297);
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.listen(app.get('port'), function(req,resp) {
	console.log('node started at port ::'+app.get('port'));
});

app.get('/aaa', function(req,resp) {
	console.log('app method invoked');
	var reqBody = '{message: hi}';
	resp.send('views/index.html',reqBody);
});

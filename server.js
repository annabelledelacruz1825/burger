
var express = require('express');
var bodyParser = require('body-parser');



var PORT = process.env.PORT || 3000;

var app = express();
Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);



app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});
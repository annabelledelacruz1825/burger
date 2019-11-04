
var express = require('express');
var bodyParser = require('body-parser');



var PORT = process.env.PORT || 3000;

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);

mongoose.promise = global.Promise;


// Connect to the Mongo DB
mongoose.connect
(
  process.env.MONGODB_URI || "mongodb://user1:password1@ds241288.mlab.com:41288/heroku_smvghxlh",
  {
    useMongoClient: true
  }
  );


{
  console.log("App listening on PORT " + PORT);
});
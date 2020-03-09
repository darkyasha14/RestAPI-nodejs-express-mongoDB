let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require("./api/routes/routes");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/node_restapi', {useNewUrlParser: true});
var db = mongoose.connection;

var port = process.env.port || 8888;

app.get('/', (req, res) => res.send('Hello From Express'));

app.use('/api', apiRoutes);

app.listen(port, function(){
console.log("Running Rest API in port " + port);
});
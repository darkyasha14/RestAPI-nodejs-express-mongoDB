let express = require('express');
let app = express();

var port = process.env.port || 8888;

app.get('/', (req, res ) => res.send('Hello From Express'));

app.listen(port, function() {
    console.log("Running Rest Api on port " + port);
});


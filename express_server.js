var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));


app.get('/', function (req, res) {
  res.render('index.html');
  //res.send('Hello World!');
});

app.post('/submit_profile', function(req, res) {
    var orgname = req.body.orgname,
        location = req.body.location,
        mission = req.body.mission,
        topics = req.body.topics,
        types = req.body.types,
        leadership = req.body.leadership,
        history = req.body.history,
        website = req.body.website,
        contact = req.body.contact;

    console.log(orgname);
    console.log(topics);
    //res.send(firstname + ' ' + lastname);
    res.render('output.html', { firstname: 'Tobi', lastname: 'Wilson' }, function(err, html) {
       console.log("Send successfully");
       res.send(html);
    });
    //res.render('ouput.html');
    //res.send('Hello World!');

});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});



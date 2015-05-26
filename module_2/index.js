var express = require("express");
var home = require('./routes/home.js');
var customers = require('./routes/customers.js');

var app = express();

//app.configure(function(){                                 // All separate modules now --install independently
 //   app.use(express.logger('dev'));
 //   app.use(express.favicon());
    app.use(express.static(__dirname+'/public'));
//})


app.set('title','Express is cool');

app.get('/',home.index);
app.get('/customers',customers.index);
app.get('/customers/create',customers.create);
app.get('/customers/:id',customers.profile);
app.get('/express',function(req,res){
    res.send(app.get('title'));
});

console.log('server is up!!!');

app.listen(process.env.PORT,process.env.IP);
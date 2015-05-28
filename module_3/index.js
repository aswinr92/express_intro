var express = require('express'),
    path = require('path');
    
    
var app = express();

app.set('view engine','jade');
app.set('views',__dirname + '/views');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.render('empty');
});

app.get('/:viewname',function(req,res){
   res.render(req.params.viewname); 
});

app.listen(process.env.PORT,process.env.IP);
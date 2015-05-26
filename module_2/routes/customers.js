exports.index = function(req,res){
    if(req.query.id){
        query(req,res);
    }
    else{
        res.send('This is the customers section');        
    }
};

exports.create = function(req,res){
    res.send('This is the sign up form');
};

exports.profile = function(req,res){
    res.send("This is customer " + req.params.id);
}

function query(req,res){
    res.send("This is customer " + req.query.id);
}
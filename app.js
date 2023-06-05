const express= require("express");
const bodyparser= require("body-parser");

var app = express();
var example = "working";
var items = [];


app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(8000,function(){
    console.log("Server Started...");
});

app.get("/",function(req,res){
    res.render("list",{ejes:items});
});

app.post("/",function(req,res){
    var item = req.body.task;
    items.push(item);
    res.redirect("/");
});

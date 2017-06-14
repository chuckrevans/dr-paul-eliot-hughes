var express     = require('express'),
    app         = express(),
    bodyParser  = require("body-parser");

//node.js body parsing middleware (used for GET requests on the ejs pages)
app.use(bodyParser.urlencoded({extended: true}));
//use custom files (css, js, img)
app.use(express.static(__dirname + '/views'));
//setup for ejs file types
app.set("view engine", "ejs");


//INDEX
app.get("/", function(req, res){
    res.render("landing");
});

//MEET THE DOCTOR
app.get("/drhughes", function(req, res){
    res.render("drhughes");
});

//SPECIALTIES
app.get("/specialties", function(req, res){
    res.render("specialties");
});

//PATIENT INFO
app.get("/patientinfo", function(req, res){
    res.render("patientinfo");
});

//BLOG
app.get("/blog", function(req, res){
    res.render("blog");
});


//CONTACT
app.get("/contact", function(req, res){
    res.render("contact");
});


//server inititiation and confirmation message in terminal
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Dr. Paul Hughes' server has started!");
});
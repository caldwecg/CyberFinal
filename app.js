const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.render("home")
});


app.get("/hashing", function(req, res) {
  res.render("hashing")
});


app.get("/breaches", function(req, res) {
  res.render("breaches")
});


app.get("/improving", function(req, res) {
  res.render("improving")
});



//Local Port for development
const PORT = process.env.PORT || 3000;


//Local Port for development
app.listen(PORT, function () {
    console.log('App is listening on port ${PORT}');
})

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.render("home")
});



//Local Port for development
app.listen(3000, function () {
    console.log("App is listening on port 3000");
})

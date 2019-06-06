//jshint esversion:6

const express = require("express");
var app = express();
app.use(express.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});
app.post("/", function(req, res) {
  //  res.sendFile(__dirname + "/index.html");
  //res.send(req.get("num1")+ req.get("num2"));
  res.send("the result of calulation is : " + (Number(req.body.num1) + Number(req.body.num2)));
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  res.send("The response is: " + Number(req.body.weight) * Number(req.body.height));
});
app.listen(3000,
  () =>console.log(`Example app listening on port `));

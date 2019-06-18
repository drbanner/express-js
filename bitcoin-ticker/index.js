// jshint esversion: 6
const express = require("express");
const app = express();
const request = require('request');

//const path = require("path");
app.use(express.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;


  var baseUrl = "https://apiv2.bitcoinaverage.com/convert/global ";

  var options = {
    url: baseUrl,
    method: "GET",
    qs: {
      from: crypto,
      to: fiat,
      amount: req.body.amount
    }
  };
  request(options,
    function(error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //  console.log('body:', body); // Print the HTML for the Google homepage.
      let data = JSON.parse(body);

      res.write("<p>the date is</p> ");
      res.write("<h1>The valus is " + data.price+ "</h1>");
      // res.send is the final resonse sent to the browerser
      res.send();
    });
  console.log(req.body.crypto);
});

app.listen(3000);

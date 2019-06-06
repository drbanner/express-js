//jshint esversion:6

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //console.log(req);
  res.send("<h2 style = 'color: green'>Hello World!!!</h2>");
});
// app.get('/test', (req, res) => res.send('Hello World prime test'));
app.get('/contact', (req, res) => {
  res.send("My contact:Sai@gmail.com");
});


app.get('/about', (req, res) => {
  res.send("I am a java developer trying to become a fullstack developer and I am in to learning all the possible technologies for now. ⭐️");
});

app.get('/test', (req, res) => {
  res.send("I am a java developer trying to become a fullstack developer and I am in to learning all the possible technologies for now. ⭐️");
});
// nodemod to observe change and restart server all time


app.get('/node1', (req, res) =>
  res.send("I")
);




app.listen(port,() =>
  console.log(`Example app listening on port ${port}!`));

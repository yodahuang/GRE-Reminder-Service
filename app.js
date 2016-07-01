"use strict";
var express = require('express');
var app = express();

var wordArr = [];

function getRandomWords(amount){
  //Shuffle the array
  wordArr.sort( () => (0.5 - Math.random()) );
  return wordArr.slice(0, amount);
}

app.get('/', function(req, res){
  res.send("To show this is working");
})

app.get('/word', function (req, res) {
  if (req.query.all){
    console.log("Get all words");
    res.json(wordArr);
  }
  else {
    let amount = req.query.amount;
    console.log(`Requested ${amount} words`);
    if (wordArr.length<amount){
      console.error('Not enough words');
    }
    else {
      res.json(getRandomWords(amount));
    }
  }
});

app.post('/word', function(req, res){
  console.log('pushed!');
  wordArr.push(req.query.word);
  res.json({message: `Added word: ${req.query.word}`});
});

app.delete('/word', function(req, res){
  let word = req.query.word;
  var index = wordArr.indexOf(word);
  if (index===-1){
    res.json({message: `No such word as ${word}`});
  }
  else {
    wordArr.splice(index, 1);
    res.json({message: `Successfully deleted ${word}`});
  }
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
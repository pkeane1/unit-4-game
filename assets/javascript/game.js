$( document ).ready(function() {
    
    
    var random = Math.floor(Math.random() * 102) + 19; 
    console.log("random number is:" + random);
    $(".randomNumber").html(random);

});

var gem1 = Math.floor(Math.random() *11) + 1; 
var gem2 = Math.floor(Math.random() *11) + 1;
var gem3 = Math.floor(Math.random() *11) + 1;
var gem4 = Math.floor(Math.random() *11) + 1;

var wins = 0;
var loses = 0
var totalScore = 0



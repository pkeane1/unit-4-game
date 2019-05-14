$( document ).ready(function() {
    
    
    var random = Math.floor(Math.random() * 102) + 19; 
    console.log("random number is:" + random);
    $(".randomNumber").html(random);

});

var gem1 = Math.floor(Math.random() *11) + 1; 
var gem2 = Math.floor(Math.random() *11) + 1;
var gem3 = Math.floor(Math.random() *11) + 1;
var gem4 = Math.floor(Math.random() *11) + 1;

var wins = "Wins: "  +  0;
var loses = "Loses: "  +  0;
var totalScore = 0;

$("#wins").html(wins);
$("#loses").html(loses);

function gameReset(){
   var random;
   $(".randomNumber").html(random);
   var gem1 = Math.floor(Math.random() *11) + 1; 
   var gem2 = Math.floor(Math.random() *11) + 1; 
   var gem3 = Math.floor(Math.random() *11) + 1; 
   var gem4 = Math.floor(Math.random() *11) + 1; 
   var totalScore = 0;
   $("#finalScore").text(totalScore);
};

function winner() {
    alert("WINNER!!");
     wins++;
     $("#wins").html(wins)
     gameReset();
}

function loser() {
    alert("LOSER!!");
    loses++;
    $("#loses").html(loses)
    gameReset();
}

$("#gem1").on("click", function() {
    totalScore = totalScore + gem1;
    console.log(totalScore);
$("#finalScore").text(totalScore);
    if(totalScore = random) {
        winner();
    }
    else if (totalscore > random) {
        loser();
    }
});

$("#gem2").on("click", function() {
    totalScore = totalScore + gem2;
    console.log(totalScore);
$("#finalScore").text(totalScore);
    if(totalScore === random) {
        winner();
    }
    else if (totalscore > random) {
        loser();
    }
});

$("#gem3").on("click", function() {
    totalScore = totalScore + gem3;
    console.log(totalScore);
$("#finalScore").text(totalScore);
    if(totalScore === random) {
        winner();
    }
    else if (totalscore > random) {
        loser();
    }
});

$("#gem4").on("click", function() {
    totalScore = totalScore + gem4;
    console.log(totalScore);
$("#finalScore").text(totalScore);
    if(totalScore === random) {
        winner();
    }
    else if (totalscore > random) {
        loser();
    }
});
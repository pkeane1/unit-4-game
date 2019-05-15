
       
    var random = Math.floor(Math.random() * 102) + 19; 
    console.log("random number is:" + random);
    $(".randomNumber").html(random);



var gem1 = Math.floor(Math.random() *11) + 1; 
var gem2 = Math.floor(Math.random() *11) + 1;
var gem3 = Math.floor(Math.random() *11) + 1;
var gem4 = Math.floor(Math.random() *11) + 1;

var wins = 0;
var loses = 0;
var totalScore = 0;

$("#wins").html(wins);
$("#loses").html(loses);

function gameReset(){
   random =  Math.floor(Math.random() * 102) + 19;
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
     $("#wins").text(wins)
     gameReset();
}

function loser() {
    alert("LOSER!!");
    loses++;
    $("#loses").text(loses)
    gameReset();
}

$("#gem1").on("click", function() {
    totalScore = totalScore + gem1;
    console.log(totalScore);
$("#finalScore").text(totalScore);
    if(totalScore === random) {
        winner();
    }
    else if (totalScore > random) {
        loser();
    }
})

$("#gem2").on("click", function() {
    totalScore = totalScore + gem2;
    console.log(totalScore);
$("#finalScore").text(totalScore);
    if(totalScore ===  random) {
        winner();
    }
    else if (totalScore > random) {
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
    else if (totalScore > random) {
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
    else if (totalScore > random) {
        loser();
    }
});
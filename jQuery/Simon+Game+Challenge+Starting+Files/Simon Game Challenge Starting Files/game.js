var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).on("keydown",function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1); 
    //call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence
});

function nextSequence(){
    userClickedPattern = []; //reset the userClickedPattern to an empty array
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound( name ){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress( currentColor ){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if( gamePattern[currentLevel] === userClickedPattern[currentLevel] ){
        console.log("success");
        if( gamePattern.length  === userClickedPattern.length ){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else {
        console.log("wrong");
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver(); //call startOver() if the user gets the sequence wrong
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
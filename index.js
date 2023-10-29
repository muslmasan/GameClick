
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];
 
var track = 0;
var count = 0 ;
$(document).keypress(function(){
    track++;
    if(track === 1){
        nextSequence();
        $("h1").text("Level 0");
    }

  });

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSounds(userChosenColour);
  animatePress(userChosenColour);
  setTimeout(function(){
    checkAnswer();
}, 2000);
  
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSounds(randomChosenColour);
  $("h1").text("Level "+ count);
  count++;
}


function playSounds(valu){
    var audio = new Audio("sounds/" + valu + ".mp3");
  audio.play();
}

function animatePress (currentColour){
    $("."+currentColour).addClass("pressed");

    console.log(currentColour);
    setTimeout(function(){
        $("."+currentColour).removeClass('pressed');
}, 100);
}


function checkAnswer(currentLevel){
    if(userClickedPattern[userClickedPattern.length-1] === gamePattern[gamePattern.length-1]){
        setTimeout(function(){
            nextSequence();
            userClickedPattern =[];
    }, 200);
        
    }else{
        $("h1").text("You Faild");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        setTimeout(function(){
          $("h1").text("Game Over, Press Any Key to Restart");
  }, 900);
    }
}
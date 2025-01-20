var isStarted = false;
var level = 1;
var gamePattern = [];
var userPattern = [];
var boxes = document.querySelectorAll(".box > div");
var title = document.querySelector("h1");

window.onkeydown = function (e) {
  if (e.key === "Enter" && !isStarted) {
    handleStart();
  }
};

function handleStart() {
  isStarted = true;
  title.innerText = `Level ${level}`;
  handleBlip(title);
  
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function (e) {
      handleUserClick(e);
    };
  }

  handleSequence();

}


function handleUserClick(e) {
  handleAudio(e.target.className);
  userPattern.push(e.target.className);
  handleClickAnimation(e.target);
  checkAnswer(userPattern.length-1);
}

function checkAnswer(currentLvl){
    if (gamePattern [currentLvl]===userPattern[currentLvl]){
        if(gamePattern.length===userPattern.length){
            setTimeout(function(){
                handleNextlvl();
            },1000);
        }
    }
    else{
        handleOver();
    }
    
}

function handleNextlvl() {
    title.innerText=`level ${++level}`;
    userPattern=[];
    handleSequence();

}

function handleOver(){
    isStarted = false;
    level=1;
    userPattern=[];
    gamePattern=[];
    title.innerText=`Try Again!, Press Enter to Restart`;
    handleAudio("error");

    document.querySelector('body').classList.add('error');

    setTimeout(function(){
        document.querySelector('body').classList.remove('error');
        
    },400)
}

function handleSequence() {
  var randomBox = Math.floor(Math.random() * 4);
  handleAudio(boxes[randomBox].className);
  gamePattern.push(boxes[randomBox].className);
  handleBlip(boxes[randomBox]);
 
}

function handleAudio(fileName) {
  var audio = new Audio(`./resources/${fileName}.mp3`);
  audio.play();
}

function handleBlip(el) {
  el.classList.add("blip");

  setTimeout(() => {
    el.classList.remove("blip");
  }, 400);
}

function handleClickAnimation(el) {
  el.classList.add("clicked");

  setTimeout(() => {
    el.classList.remove("clicked");
  }, 50);
}

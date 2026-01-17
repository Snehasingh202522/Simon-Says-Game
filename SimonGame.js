let gameSequence=[];
let userSequence=[];

let btns=["pink","purple","lightblue","lightyellow"];

let started=false; //game has not started yet
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){   //starting me jb value false h game start kra and value updated to true
console.log("game has started");
started=true; //now game has started

levelUp();
}


});

function gameFlash(btn){
    btn.classList.add("flash");// add flash class to add background white
    setTimeout(function(){ //flashclass ko remove krne k liye after some time
    btn.classList.remove("flash");
    }, 250);

}
function userFlash(btn){
    btn.classList.add("userflash");// add flash class to add background white
    setTimeout(function(){ //flash class ko remove krne k liye after some time
    btn.classList.remove("userflash");
    }, 250);

}

function levelUp(){
    userSequence=[];
    level++;
    h2.innerText=`level ${level}`;


//random btn choose

let randomIndex=Math.floor(Math.random()*4); //genreting a random index
let randomcolor=btns[randomIndex]; //btns k andr s random color choose kia
let randomBtn=document.querySelector(`.${randomcolor}`); //color ki help se class bnayi usse btn hi choose krlenge
gameSequence.push(randomcolor);
console.log(gameSequence);
/*console.log(randomIndex);
console.log(randomcolor);
console.log(randomBtn);*/


    gameFlash(randomBtn);
}

//last color entered by user matches with game sequence or not
function checkAns(idx){
   // console.log("current level:", level);
   
   if(userSequence[idx]==gameSequence[idx]){
   // console.log("same value");
    if(userSequence.length==gameSequence.length){
        setTimeout(levelUp,1000);
    }
   }
   else{
    h2.innerHTML=`game over!  your score was <b> ${level}</b><br>press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
   reset();
}

}

//for all btns press
function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    //for user button color
    userColor=btn.getAttribute("id");
   userSequence.push(userColor);

   checkAns(userSequence.length-1);// current index (last button indexx)

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameSequence=[];
    userSequence=[];
    level=0;
}

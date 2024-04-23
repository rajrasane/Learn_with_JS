let gameseq = [];
let userseq = [];

let btns = ["red","yellow","green","purple"];

let h2 = document.querySelector("h2");

let started = false;

let level = 0;

let startbtn = document.querySelector("button");

startbtn.addEventListener("click", function(){
    if(started==false){
        console.log("Game Started!");
        started=true;
    }

    startbtn.remove();
    levelup();
})

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 250 );
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250 );
}

function levelup (){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIndx = Math.floor(Math.random() * 4);
    let rancolor = btns[ranIndx];
    let ranbtn = document.querySelector(`.${rancolor}`);

    gameseq.push(rancolor);
    console.log(gameseq);

    gameflash(ranbtn);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000)
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b> <u> ${level} </u> </b> <br> Press 'Start' Button to play again`;
        reset();
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white"; 
        }, 150);
    }
}

function btnpress (){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
};

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    addstartagain();
}

function addstartagain() {
    if (!document.querySelector(".startbtn")) {
        let newstartbtn = document.createElement("button");
        newstartbtn.innerHTML = "<b>Start</b>";
        newstartbtn.classList.add("startbtn");
        
        newstartbtn.addEventListener("click", function() {
            if (!started) {
                console.log("Game Started!");
                started = true;
                document.querySelector('body').style.backgroundColor = "white";
            }

            newstartbtn.remove(); 
            levelup(); 
        });
        
        document.body.appendChild(newstartbtn);
    }
}
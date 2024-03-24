// let para = document.createElement('p');
// para.innerText = "Hey , I'm Red!";
// document.querySelector('body').append(para);

// para.classList.add('red');

// let blue = document.createElement('h3');
// blue.innerText = "I'm a Blue H3!";
// document.querySelector('body').append(blue);

// blue.classList.add('blue');

// //---------------------------------------------------------------------------------------------------------------------------------------

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// h1.innerText = "I'm in a div";

// let para2 = document.createElement("p");
// para2.innerText = "Me Too!";

// div.append(h1);
// div.append(para2)

// div.classList.add('box')

// document.querySelector("body").append(div)

//---------------------------------------------------------------------------------------------------------------------------------------


// Mouse Event

// • onclick

// for e.g

// let btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log("Button Was Clicked!");
// }
// or 
// function postliked(){
//     console.log("Post was liked!")
// }
// btn.onclick = postliked;



// btn.addEventListener("click",function(){
//     console.log("Button CLicked");
//     console.log("Post Was Liked");
// })

// btn.addEventListener("dblclick",function(){
//     console.log("You DoubleClicked the Button!")
// })

//---------------------------------------------------------------------------------------------------------------------------------------

// Activity

let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector('h3');
    h3.innerText = randomcolor();
    console.log("Color Updated!");
    let div = document.querySelector('div');
    div.style.backgroundColor = randomcolor();
})


function randomcolor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let color = `rgb(${r},${g},${b})`;
    return color;
}

//---------------------------------------------------------------------------------------------------------------------------------------

// btn.addEventListener("click",function(){
//     console.dir(this);
//     this.style.backgroundColor = randomcolor();
// })

// let input = document.querySelector('input');
// input.addEventListener("keydown",function(event){
//     console.dir(event);
//     console.log("Button was pressed!");
// })


let form = document.querySelector('form');
form.addEventListener('submit',function(){
    alert("Form Submitted!")
});

let input = document.querySelector('input');
let forminfo = document.querySelector('form');
forminfo.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(`Your Registered Name is ${input.value}`);
});


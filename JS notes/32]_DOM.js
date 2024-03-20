// DOM (Document Object Model)

// - It is an API that represents and interacts with any HTML document.
// - It is a document model loaded in the browser and representing the document as a node tree, or DOM tree.
// - Each node represents part of the document (e.g. an element, text string, or comment).
// - It is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every node in the document.
// - Each element in HTML becomes a Object in JS.

//---------------------------------------------------------------------------------------------------------------------------------------

// 'document' object in JS

// - it is a in-build object in JS , which represents the HTML code of the file it is linked to and converts all elements of the HTML file to objects 
// - we only get HTML code by using 'console.log(document)'
// - so we use 'console.dir(document)' to get it's HTML code with its properties 

//---------------------------------------------------------------------------------------------------------------------------------------

// DOM Manipulation 

// - it is a two step process
// i] Selecting a Element
// ii] Changes / Manipulation


// - READ THIS : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

//---------------------------------------------------------------------------------------------------------------------------------------

// 1) Selecting Elements 

// • getElementById()
// - returns the element as an object or null (if not found)
// - returns null if entered Id is invalid

// for e.g
let imgObj = document.getElementById("mainImg");
console.log(imgObj); // this will give us the tag 
console.dir(imgObj); // this will give us the the img as a object



// • getElementByClassName()
// - returns the element as an HTML collection or empty collection (if not found)
// - return a object having length 0 if entered classname is invalid

// for e.g
let smallimages = document.getElementsByClassName("oldImg");
for(let i = 0;i<smallimages.length;i++){
    smallimages[i].src = "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png";
    console.log(`value of image no ${i} changed`);
};



// • getElementByTagName()
// - returns the elements as HTML Collection or empty collection (if not found)

// for e.g
let parachange = document.getElementsByTagName("h2")[1].innerText="Creation"; //before :- Creation and Development
console.dir(parachange); //after :- Creation



// • querySelector()
// - Allows us to use any CSS selector 

// for e.g
document.querySelector('p'); // selects first p element
document.querySelector('#description'); // selects first element with id = description
document.querySelector('.oldImg'); // selects first element with class = olImg 

document.querySelector("h1"); // selects all h1 elements 

document.querySelectorAll("div a"); // selects all anchors inside the div and returns a nodelist

//---------------------------------------------------------------------------------------------------------------------------------------

// * Setting Content in Objects 

// Properties and Method :-

// 1) innerText - Shows the visible text contained in a node/screen
// 2) innerHTML - Shows the full markup i.e shows which tags we used in our HTML file 
// 3) textContent - Shows all the full text as it is as we wrote in our HTML file 

//---------------------------------------------------------------------------------------------------------------------------------------

// 2) Manipulating Elements 

// • Manipulating Attributes

// Syntax :-

// obj.getAttribute(attr) <- This is called getters in JS
// obj.setAttribute(attr,val) <- This is called setters in JS

// for e.g

// let simg = document.querySelector('img');
// simg.getAttribute('id'); o/p:- we will get the id name



// • Manipulating Style (with use of style attribute)

// for e.g
// let head = document.querySelector('h1');
// head.style.color = 'red';



// • Manipulating Style (with using classList)

// syntax :-
// object.classList; <- displays list of classes assigned to a tag
// object.classList.add('classname'); <- adds a class to a tag
// object.classList.remove('classname'); <- removes a class to a tag
// object.classList.contains('classname'); <- checks if class exists , returns true or false accordingly
// object.classList.toggle('classname'); <- to toggle between add and remove

// let head = document.querySelector('h1');
// head.classList.add("green") <- in this we apply css properties to class in CSS file and later add that class to the tag , then the css properties automatically applies too

//---------------------------------------------------------------------------------------------------------------------------------------

// Navigation on Page 

// 1) parentElement 
// 2) children
// 3) previousElementSibling/nextElementSibling

//---------------------------------------------------------------------------------------------------------------------------------------

// * Adding elements on a Page

// syntax:-
document.createElement('p');

// - after creating a element in JS , for it to show on our page , we must first insert it

// • append(element) <- can use to make changes in the created element
// • appendChild(element) <- adds created element to a parent like body,div .etc in the end
// • prepend(element) <- adds created element to a parent like body,div .etc at the start
// • insertAdjacent(where,element) <- can add created element to exact location we want , read this :- https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

//---------------------------------------------------------------------------------------------------------------------------------------

// * Removing elements on a Page

// • removeChild(element)
// • remove(element)

//---------------------------------------------------------------------------------------------------------------------------------------

//  DOM EVENTS

// - Events are the signals that something has occurred (user input/actions) and a particular action is carried out


// 1) Mouse Events
// - only executes a single action

// • onclick 
// - here we write the function we want to execute after element is clicked

// for e.g
let btn = document.querySelector('button');
btn.onclick = function(){
    console.log("Button was clicked!");
}



// • onmouseenter
// - here our action executes right after user's mouse enters an range of element or go on a element

// for e.g
let b = document.querySelector('button');
b.onmouseenter = postliked;

//---------------------------------------------------------------------------------------------------------------------------------------

// 2) Event Listeners
// - executes multiple action

// syntax
// - element.addEventListener(event , callback)

// for e.g
btn.addEventListener("click",function(){
    console.log("Button CLicked");
    console.log("Post Was Liked");
})

// using 'this' in Event Listeners
// - when 'this' is used in a callback of event handler of something , it refers to that something

// for e.g
btn.addEventListener("click",function(){
    console.dir(this);
})

//---------------------------------------------------------------------------------------------------------------------------------------

// * event parameter
// - it is a default parameter which describes which type of event carried out and shows it properties like code and key
// - it is generally passed while writing a callback in EventListener

// for e.g
let input = document.querySelector('input');
input.addEventListener("keydown",function(event){
    console.dir(event);
    console.log("Button was pressed!");
})

//---------------------------------------------------------------------------------------------------------------------------------------

// 3) Keyboard Events
// - each event describes a single interaction between the user and a key 

// • keydown
// - triggers event when a key is pressed

// • keyup
// - triggers event when a key is released

//---------------------------------------------------------------------------------------------------------------------------------------

// 4) Form Events
// - events occurs after performing actions in a form

// • submit
// - The submit event fires when a <form> is submitted.

// for eg
let form = document.querySelector('form');
form.addEventListener('submit',function(){
    alert("Form Submitted!")
});

// * Extracting Form Data

// for e.g
let inputf = document.querySelector('input');
let forminfo = document.querySelector('form');
forminfo.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(`Your Registered Name is ${inputf.value}`);
});


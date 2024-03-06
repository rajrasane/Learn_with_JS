// DOM (Document Object Model)

// - It is an API that represents and interacts with any HTML document.
// - It is a document model loaded in the browser and representing the document as a node tree, or DOM tree.
// - Each node represents part of the document (e.g. an element, text string, or comment).
// - It is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every node in the document.
// - Each element in HTML becomes a Object in JS.

//---------------------------------------------------------------------------------------------------------------------------------------

// 'document' object in JS

// - it is a in-build object in JS , which represents the HTML code of the file it is linked to and converts all elements of the HTML file to objects 
// - we only get HTML code by using 'console.log(document);'
// - so we use 'console.dir(document);' to get it's HTML code with the CSS properties 

//---------------------------------------------------------------------------------------------------------------------------------------

// DOM Manipulation 

// - it is a two step process
// i] Selecting a Element
// ii] Changes / Manipulation


// - READ THIS : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

//---------------------------------------------------------------------------------------------------------------------------------------

// 1) Selecting Elements 

// • getElementById
// - returns the element as an object or null (if not found)
// - returns null if entered Id is invalid

// for e.g
let imgObj = document.getElementById("mainImg");
console.log(imgObj); // this will give us the tag 
console.dir(imgObj); // this will give us the the img as a object


// • getElementByClassName
// - returns the element as an HTML collection or empty collection (if not found)
// - return a object having length 0 if entered classname is invalid

// for e.g
let smallimages = document.getElementsByClassName("oldImg");
for(let i = 0;i<smallimages.length;i++){
    smallimages[i].src = "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png";
    console.log(`value of image no ${i} changed`);
};


// • getElementByTagName
// - returns the elements as HTML Collection or empty collection (if not found)

// for e.g
let parachange = document.getElementsByTagName("h2")[1].innerText="Creation"; //before :- Creation and Development
console.dir(parachange); //after :- Creation

//---------------------------------------------------------------------------------------------------------------------------------------

// • Query Selectors 
// - Allows us to use any CSS selector 

// for e.g
document.querySelector('p'); // selects first p element
document.querySelector('#description'); // selects first element with id = description
document.querySelector('.oldImg'); // selects first element with class = olImg 

document.querySelector("h1"); // selects all h1 elements 

document.querySelectorAll("div a"); // selects all anchors inside the div and returns a nodelist
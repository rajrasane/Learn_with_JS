// API (Application Programming Interface)

// - An API is like a language that different software programs use to talk to each other.
//  It sets the rules for how they can communicate and what kind of information they can share.
// - APIs genereally provide us data in the form of JSON

//---------------------------------------------------------------------------------------------------------------------------------------

// Types of APIs :-

// 1)Web APIs - Used online, like for social media, weather, or payment services.
// 2)Library APIs - Let developers use features from programming tools.
// 3)Operating System APIs - Allow apps to use computer resources like files or network.

// - Web APIs are typically used with JavaScript.

//---------------------------------------------------------------------------------------------------------------------------------------

// API requesting

// using fetch()

let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
        console.log(data.fact);
})
.catch((err)=>{
    console.log(err);
})


// using fetch with async/await

async function getfacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }
    catch(err){
        console.log("Error - ",err);
    }
}

// using Axios

// - It is a Library used to make HTTP requests 
// - It returns data directly so in this we don't parse the response we get fron API like fetch

async function getfacts2(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    }
    catch(err){
        console.log("Error - ",err);
    }
}
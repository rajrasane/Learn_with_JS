// Methods - action that can be performed on objects

// format 
// stringname.method();

//---------------------------------------------------------------------------------------------------------------------------------------

// 1) Trim
// - trims whitespaces from both end of strings and returns a new one

// for e.g
let msg = "  Welcome   ";
let newmsg = msg.trim();
console.log(newmsg);

//---------------------------------------------------------------------------------------------------------------------------------------

// 2) toUpperCase
// - converts whole string characters to uppercase 

// for e.g
let str = "uppercase method";
let newstr = str.toUpperCase();
console.log(newstr);

//---------------------------------------------------------------------------------------------------------------------------------------

// 3) toLowerCase
// - converts whole string characters to lowercase 

// for e.g
let str1 = "Lowercase Method";
let newstr1 = str1.toLowerCase();
console.log(newstr1);

//---------------------------------------------------------------------------------------------------------------------------------------

// 4) slice method
// - returns a part of the original string as a new string

// for e.g
let lang = "CProgramming";
let newlang = lang.slice(0,1);
console.log(newlang);

//---------------------------------------------------------------------------------------------------------------------------------------

// 5) replace method
// - searches a value in the string and returns a new string with the value replaced

// for e.g
let mesgs = "JavaProgramming";
let newmesgs = mesgs.replace("Java","C");
console.log(newmesgs);

//---------------------------------------------------------------------------------------------------------------------------------------

// 6) repeat method
// - returns a string with the number of copies of a string

// for e.g
let frt = "Mango";
let frtrepeated = frt.repeat(4);
console.log(frtrepeated);
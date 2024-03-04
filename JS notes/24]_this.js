// this Keyword

// - this keyword refers to an object that is executing the current piece of code
// - if we didn't use 'this' keyword , error - not defined will occur

// for e.g
const student = {
    name : "Raj",
    phy : 60,
    math : 38,
    chem : 58,
    bio : 53,
    eng : 69,
    sansk : 75,
    getavg(){
        let avg = (this.phy+this.math+this.chem+this.bio+this.eng+this.sansk)/6;
        console.log(`${this.name} got average marks ${avg}`);
    }
};

// Classes

// - Classes are a template for creating objects.
// - It is more of a efficient way to write constructors . 
// - Classes provide a way to define blueprints for creating objects with specific properties and methods.
// - The Constructor Method is a special method of a class for creating and initializing an object instance of that class.

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi , My name is ${this.name}`);
    }
}

let p1 = new Person("raj",18);
let p2 = new Person("om",19);

//---------------------------------------------------------------------------------------------------------------------------------------

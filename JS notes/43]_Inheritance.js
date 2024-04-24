// Inheritance

// - Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

//---------------------------------------------------------------------------------------------------------------------------------------

// Keywords :-

// 1) extends
// - `extends` keyword creates a new class that inherits from another class, forming a parent-child relationship.

// syntax:
// class ChildClassName extends ParentClassName {
//     // Class body
//   }



// 2) super
// - `super` keyword in class constructors calls parent class methods and allows access to parent object functions.

// syntax:
// class ChildClassName extends ParentClassName {
//     constructor() {
//       super(); // Call the parent class constructor
//       // Other constructor logic
//     }
//   }

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

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}

let p1 = new Student("raj",18,50);
let p2 = new Teacher("om",30,"C Programming");

// console.log(p1);
// console.log(p2);

//---------------------------------------------------------------------------------------------------------------------------------------
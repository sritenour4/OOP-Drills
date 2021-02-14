/* 
    Object Literals, Pseudo Classes and methods
*/

// Write 5 object literals, have them named person1-person5. Give each a name property and have this be a name of a friend or family member. 
// Then give each one a second property, sayHello, which is a function that will console log the string “Hello! My name is ________”.
let person1 = {
    name: 'Jason', 
    sayHello: function () {
     console.log(`Hello! My name is ${this.name}.`)    
    }    
};

let person2 = {
    name: 'Melissa', 
    sayHello: function () {
     console.log(`Hello! My name is ${this.name}.`)    
    }    
};

let person3 = {
    name: 'Hillary', 
    sayHello: function () {
     console.log(`Hello! My name is ${this.name}.`)    
    }    
};

let person4 = {
    name: 'Steven', 
    sayHello: function () {
     console.log(`Hello! My name is ${this.name}.`)    
    }    
};

let person5 = {
    name: 'Sean', 
    sayHello: function () {
     console.log(`Hello! My name is ${this.name}.`)    
    }    
};

// Call the sayHello function on each object
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

// Create a constructor function that will take a name, city, and age. 
// (Remember, pseudo classes look like functions but are named with starting with a capital letter.)
// function Person (name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// // Write a method that will print a string similar to this “Hey! My name is ___ I am __ years old and live in __”.
// Person.prototype.sayHello = function() {
//     console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`)
// }

// // Create 5 instances of the same friends from step 1, except this time use the pseudo class and method we just created.
// let p1 = new Person('Jason', 'Tuscaloosa', 32);
// let p2 = new Person('Melissa', 'Hoover', 30);
// let p3 = new Person('Hillary', 'Bessemer', 27);
// let p4 = new Person('Steven', 'Birmingham', 31);
// let p5 = new Person('Sean', 'Trussville', 25);

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();

// Use the ES6 syntax and create the same class that we just did. (Hint: ES6 classes are not made using a constructor function, they use a keyword: class. 
// They have a constructor which is used to take in the parameters name, city, and age. And methods will not need to be prototypes!
class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
}
/*
    Inheritance
*/
// Create a class called vehicle. Have this vehicle class construct an object that only has the properties manufacturer and number of wheels.
class Vehicle {
    constructor(manufacturer, numWheels) {
        this.manufacturer = manufacturer;
        this.numWheels = numWheels;
    }

    // Include a method called aboutVehicle, have it console log a string which will say what type of vehicle it is, who made it, and how many wheels it has. 
    // You can hardcode the type or specify it as an additional property on each class.
    aboutVehicle() {
        console.log(`${type}, ${this.manufacturer}, ${this.numWheels}`)
    }
}

// Create a vehicle class that inherits the property of wheels from vehicle, but trucks have doors (unlike motorcycles) and they have a truck bed. 
// So let’s add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.
class Truck extends Vehicle {
    constructor(manufacturer, numWheels, numDoors, hasTruckBed) {
        super(manufacturer, numWheels);
            this.numDoors = numDoors;
            this.hasTruckBed = hasTruckBed;        
    }

    // Override the aboutVehicle method in each child class to console log a string that represents these features, but still have it log the type, manufacturer and how many wheels it has!
    aboutVehicle() {
        if(this.hasTruckBed) {
            this.hasTruckBed = 'a truck bed'
        }
        console.log(`This vehicle is a ${this.manufacturer} ${type}. It has ${this.numWheels} wheels, ${this.numDoors} doors and ${this.hasTruckBed}.`);
    }

}

// Create a class sedan which extends vehicle, give it an additional property of size which could be small or medium, and give it a property of mpg.
class Sedan extends Vehicle {
    constructor(manufacturer, numWheels, size, mpg) {
        super(manufacturer, numWheels);
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This vehicle is a ${this.manufacturer} ${type}. It has ${this.numWheels} wheels, is ${this.size}size and gets ${this.mpg} mpg.`);
    }
}

// create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.
class Motorcycle extends Vehicle {
    constructor(manufacturer, numWheels, hasHandlebars, noDoors) {
        super(manufacturer, numWheels);
        this.hasHandlebars = hasHandlebars;
        this.noDoors = noDoors;
    }

    aboutVehicle() {
        if(this.hasHandlebars) {
            this.hasHandlebars = 'handlebars';
        }
       
        if(this.noDoors) {
            this.noDoors = 'no doors';
        }
        console.log(`This vehicle is a ${this.manufacturer} ${type}. It has ${this.numWheels} wheels, ${this.hasHandlebars}, and ${this.noDoors}.`);
    }
}

const t1 = new Truck('Toyota', 4, 4, true);
t1.aboutVehicle(type = 'Tundra');

const s1 = new Sedan('Nissan', 4, 'mid-', 28);
s1.aboutVehicle(type = 'Altima');

const m1 = new Motorcycle('Harley-Davidson', 2, true, true);
m1.aboutVehicle(type = 'Roadster');
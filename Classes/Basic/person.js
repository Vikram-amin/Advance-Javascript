

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showName = function(){ // to add a method
        console.log(this.name);
    }

    getDetails() { // add method to prototype
        console.log(`${this.name} is a ${this.age} year old`)
    }
}

let res = new Person('jhon',27);
console.log(res)
res.showName() // method
res.getDetails()



// ------------------------------------------- ------ ----- Using COnstrctor function

function Person1(name, age){
    this.name = name;
    this.age = age;

    this.showName = function() { // method
        console.log(this.name);
    }

    Person1.prototype.getDetails = function(){ //  add method to prtototype
        console.log(`${this.name} is a ${this.age} year old`)
    }
}

let result = new Person1('Vikram', 25);
console.log(result);
result.showName() 
result.getDetails()

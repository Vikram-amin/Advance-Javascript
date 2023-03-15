
function User (name, age) {
    this.name = name;
    this.age = age;
}

var user1 = new User('Bob', 25);
var user2 = new User('Alice', 27);

// console.log(user1)  // User { name: 'Bob', age: 25 }
// console.log(user2)  // User { name: 'Alice', age: 27 }


//----------------------------------------------------------------2


function Person(nmae) {
    this.name = nmae;
    this.greet = function() {
        return (`hi ${this.name}`)
    }
}

let person = new Person('abc');

console.log(person.name)
console.log(person.greet())

//------------------------------------------------------------ 3



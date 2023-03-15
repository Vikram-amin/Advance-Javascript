// Object Prototype

// Properties and methods can be added to a constructor using a prototype:

function User() {
    this.name = 'Bob';
}

let user1 = new User();

//Adding property to constructor using prototype
User.prototype.age = 25;

// console.log(user1.age); // 25


//--------------------------------------------------------------------------------------------------2

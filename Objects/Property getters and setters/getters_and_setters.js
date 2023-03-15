

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  // console.log(user.fullName) // John Smith


  ///-----------------------------------------------------  2


let user1 = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user1, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

// console.log(user1.fullName); // John Smith

// set fullName is executed with the given value.
user1.fullName = "Alice Cooper";

// console.log(user1.name); // Alice
// console.log(user1.surname); // Cooper


//------------------------------------------------------------- 3



let user2 = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user2.name = "Pete";
  // console.log(user2.name); // Pete
  
  user2.name = ""; // Name is too short...


  //------------------------------------------------- 4





class Person1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student1 extends Person1{
    constructor(name,age,id,college){
        super(name,age);
        this.id = id;
        this.college = college;

    }
}

let res1 = new Student1('jhon',27,420,"manglore")
console.log(res1)




//------------------------------------- ------- ------ ---- using constrctor

function Person2(name, age) {
    this.anme = name;
    this.age = age;
}

function Student2(name, age, id, college){
    Person2.call(this, name, age);
    this.id = id;
    this.college = college;
}


let res2 = new Student2('viki', 25, 222, 'niite');
console.log(res2)


class Cat {
    constructor(legs, tails, claws, whiskers){
        this.legs = legs;
        this.tails = tails;
        this.claws = claws;
        this.whiskers = whiskers;
    }
}


class Tiger extends Cat {
    constructor(legs, tails, claws, whiskers, speed, weight, claimb){
        super(legs, tails, claws, whiskers)
        this.speed = speed;
        this.weighr = weight;
        this.claimb = claimb;
    }
}

let tiger = new Tiger(4, true, 'sharp', true, 70, '200kg', false);

console.log(tiger)
"use strict";
//classes
/*
  data modifiers
  public
  private
  protected
*/
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//Character: superclass
//Magician: subclass
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Ryu", 10, 98);
console.log(p1);
p1.attack();
p1.skill = 12;
console.log(p1);
const p2 = new Magician("Mago", 9, 30, 100);
console.log(p2);

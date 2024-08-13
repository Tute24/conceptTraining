let Character = require('./Character.js')
let Thief = require('./Thief.js')
let Mage = require('./Mage.js')
let Warrior = require('./Warrior.js')

let tute = new Character('tute',100,5,5)
let thief = new Thief('thief',100,4,4)
let mago = new Mage('mago',100,5,5,8)
let guerreiro = new Warrior('guerreiro',100,8,8,15)

// tute.attack(thief)

// console.log(thief)

// console.log(guerreiro)
// guerreiro.changePosition()
// console.log(guerreiro)
// guerreiro.changePosition()
// console.log(guerreiro)

mago.healing(tute)
console.log(tute)
mago.attack(guerreiro)
console.log(guerreiro)
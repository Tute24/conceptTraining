let Character = require('./Character.js')

class Mage extends Character{
    constructor(name,lifePoints,atkPoints,defPoints,magicPoints){
        super(name,lifePoints,atkPoints,defPoints)
        this.magicPoints = magicPoints
    }

    attack(opponent){
        if(opponent instanceof Character){
            opponent.access().lifePoints -= this.atkPoints + this.magicPoints - opponent.access().defPoints
        }
    }

    healing (character){
        if(character instanceof Character){
            character.access().lifePoints += 2*this.magicPoints
        }
    }
}

module.exports = Mage
let Character = require('./Character.js')

 class Warrior extends Character{
    constructor(name,lifePoints,atkPoints,defPoints,shield){
        super(name,lifePoints,atkPoints,defPoints)
        this.shield = shield
        this.position = 'attack'
    }

    attack(opponent){
        if(opponent instanceof Character && this.position === "attack"){
            opponent.access().lifePoints -= this.atkPoints - opponent.access().defPoints
        }
    }

    changePosition(){
        if(this.position === 'defense'){
            this.position = 'attack'
            this.defPoints = this.defPoints - this.shield
        } else {
            this.position = 'defense'
            this.defPoints += this.shield
        }
    }
}

module.exports = Warrior
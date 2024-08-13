let Character = require('./Character.js')

 class Thief extends Character{
    attack(opponent){
        if(opponent instanceof Character){
            opponent.access().lifePoints -= 2*(this.atkPoints - opponent.access().defPoints)
        }
    }
}

module.exports = Thief
 class Character {
    constructor(name,lifePoints,atkPoints,defPoints){
        this.name = name
        this.atkPoints = atkPoints
        this.lifePoints = lifePoints
        this.defPoints = defPoints
    }

    access(){
        return this
    }

    attack(opponent){
        if(opponent instanceof Character){
            opponent.access().lifePoints -= this.atkPoints - opponent.access().defPoints
        }
    }
}

module.exports = Character
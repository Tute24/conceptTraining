module.exports = class Deposit {
    constructor(depositAmount){
        this.depositAmount = depositAmount
        this.depositDate = new Date()
    }

    get depAmount(){
        return this.depositAmount
    }
}
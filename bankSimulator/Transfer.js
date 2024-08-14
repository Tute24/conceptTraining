module.exports = class Transfer {
    constructor(transferFrom,transferTo,transferAmount){
        this.transferFrom = transferFrom
        this.transferTo = transferTo
        this.transferAmount = transferAmount
        this.transferDate = new Date()
    }

    get loanBeneficiary(){
        return this.transferTo
    }

    get transAmount(){
        return this.transferAmount
    }
}
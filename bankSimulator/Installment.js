let Loan = require('./Loan.js')

module.exports = class Installment {
    constructor(installmentNumber, installmentAmount) {
        this.installmentAmount = installmentAmount
        this.installmentNumber = installmentNumber
        this.installmentSituation = 'pending'
        
    }

    paid(){
        if (this.installmentSituation === 'pending'){
            this.installmentSituation = 'paid'
        }
    }
}
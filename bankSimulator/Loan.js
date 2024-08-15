const Installment = require("./Installment.js")

module.exports = class Loan {
    
    constructor(loanAmount, installments){
        this.loanAmount = loanAmount
        this.loanDate = new Date()
        this.installments = []
        for(let i=1;i<installments;i++){
            this.installments.push(new Installment(i,this.installmentAmount))
        }
        this.installmentAmount = (loanAmount/installments)*Loan.#tax
    }

    static #tax = 1.08

    static get taxValue(){
        return Loan.#tax
    }

    get emprestimo(){
        return this.loanAmount
    }
    static get instAmount(){
        return this.installmentAmount
    }

    static set newTaxValue (value){
        if (typeof value === 'number'){
            Loan.#tax = 1+ (value/100)
        }
    }

    
}
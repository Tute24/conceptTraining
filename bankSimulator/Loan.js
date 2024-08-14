module.exports = class Loan {
    #tax
    constructor(loanAmount, installments){
        this.loanAmount = loanAmount
        this.loanDate = new Date()
        this.#tax = Loan.tax
        this.installments = installments
        this.installmentAmount = (loanAmount/installments)*Loan.tax
    }

    static tax = 1.08

    static get taxValue(){
        return Loan.tax
    }

    get emprestimo(){
        return this.loanAmount
    }
    static get instAmount(){
        return this.installmentAmount
    }

    static set newTaxValue (value){
        if (typeof value === 'number'){
            tax = 1+ (value/100)
        }
    }

    
}
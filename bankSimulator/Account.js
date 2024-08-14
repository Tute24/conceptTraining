let Loan = require('./Loan.js')
let Deposit = require('./Deposit.js')
let Transfer = require('./Transfer.js')

module.exports = class Account {
    #balance = 0
    constructor(accountOwner){
        this.accountOwner = accountOwner
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance(){
        return this.#balance
    }

    newDeposit (element){
        if(element instanceof Deposit){
            this.deposits.push(element)
            this.#balance += element.depAmount
        }
    }

    newLoan (element){
        if(element instanceof Loan){
            this.loans.push(element)
            this.#balance += element.emprestimo
        }
    }

    newTransfer(element){
        if (element instanceof Transfer){
            this.transfers.push(element)
            if (element.loanBeneficiary === this.accountOwner){
                this.#balance += element.transAmount
            }else{
                this.#balance -= element.transAmount
            }
        }
    }




}
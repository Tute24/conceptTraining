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
            this.#balance += element.depositAmount
        }
    }

    newLoan (element){
        if(element instanceof Loan){
            this.loans.push(element)
            this.#balance += element.loanAmount
        }
    }

    newTransfer(element){
        if (element instanceof Transfer){
            
            if (element.transferTo.email === this.accountOwner.email){
                this.#balance += element.transferAmount
                this.transfers.push(element)
            }else if (element.transferFrom.email === this.accountOwner.email){
                this.#balance -= element.transferAmount
                this.transfers.push(element)
            }
        }
    }
        
    }





let User = require('./User.js')
let Loan = require('./Loan.js')
let Deposit = require('./Deposit.js')
let Transfer = require('./Transfer.js')
let Account = require('./Account.js')

module.exports = class App {
    static #usersList = []

    static findUser(userEmail){
        let user = this.#usersList.find(element => element.email === userEmail)
        if(user){
            return user
        } else {
            `This e-mail does not belong to an active user.`
        }
    }

   static createNewUser(userFullName,userEmail){
       let user = App.findUser(userEmail)
        if(user){
            console.log(`This e-mail already belongs to an active user.`)
        } else{
          App.#usersList.push(new User(userFullName,userEmail))
             
        }
    }


    static appDeposit(email,depositValue){
        let user = App.findUser(email)
        if(user){ 
        user.userAccount.newDeposit(new Deposit(depositValue))}
    } 

    static appTransfer(emailFrom,emailTo,transferAmount){
        let userFrom = App.findUser(emailFrom)
        let userTo = App.findUser(emailTo)
        if(userFrom && userTo){ 
        userFrom.userAccount.newTransfer(new Transfer(userFrom,userTo,transferAmount))
        userTo.userAccount.newTransfer(new Transfer(userFrom,userTo,transferAmount))
    }}
    

    static appLoan(email,amount,insts){
        let user = App.findUser(email)
        if(user){ 
        user.userAccount.newLoan(new Loan(amount,insts))
    }}


    static switchTax(value){
        Loan.newTaxValue(value)
    }
}
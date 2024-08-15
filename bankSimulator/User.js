const Account = require("./Account")


module.exports = class User {
    constructor(userFullName,userEmail) {
        this.userFullName = userFullName
        this.userEmail = userEmail
        this.userAccount = new Account(this)
    }
    
    static referredUser(userEmail){
        if (userEmail === this.userEmail){
            return this
        }
    }
}
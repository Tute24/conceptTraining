

module.exports = class User {
    constructor(userFullName,userEmail,userAccount) {
        this.userFullName = userFullName
        this.userEmail = userEmail
        this.userAccount = userAccount
    }
    
    static referredUser(userEmail){
        if (userEmail === this.userEmail){
            return this
        }
    }
}
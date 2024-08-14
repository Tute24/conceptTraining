let User = require('./User.js')

module.exports = class App {
    static #usersList = []

    createNewUser(userFullName,userEmail,userAccount){
        if(App.#usersList.includes(userEmail)){
            console.log(`This e-mail already belongs to an active user.`)
        } else{
            App.#usersList.push(userEmail)
            return new User(userFullName,userEmail,userAccount)
        }
    }

    findUser(userEmail){
        if(App.#usersList.includes(userEmail)){
            return User.referredUser(userEmail)
        } else{
            console.log(`This e-mail does not belong to an active user.`)
        }
    }
}
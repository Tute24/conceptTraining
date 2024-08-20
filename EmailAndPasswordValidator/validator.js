function validateEmail(email){
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
        let err = new Error("Email inválido!")
        err.input = 'email'
        throw err
    }
}


function validatePassword(password){
    if(!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/\d/) || !password.match(/[^a-zA-Z0-9\s]/)|| password.length<8){
        let err = new Error("Senha inválida!")
        err.input = 'password'
        throw err
    }
}

let userInfos = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    password: document.getElementById('password')
}

function resetStyle(){
    document.querySelectorAll('span').forEach(element => element.textContent='')
    document.querySelectorAll('input').forEach(element => element.classList.remove('succes','failed'))
}

document.getElementById('forms').addEventListener('submit',function(ev){
    ev.preventDefault()
    resetStyle()
    try {
        document.getElementById('name').classList.add('success')
        validateEmail(userInfos.email.value)
        document.getElementById('email').classList.add('success')
        validatePassword(userInfos.password.value)
        document.getElementById('password').classList.add('success')
    } catch (err) {
        document.getElementById(`${err.input}`).classList.add('failed')
        document.getElementById(`${err.input}Error`).textContent = err.message
    }
})
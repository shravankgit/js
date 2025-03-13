const form = document.getElementById("form")

const uname = document.getElementById("uname")

const email = document.getElementById("email")

const password = document.getElementById("password")

const cpassword = document.getElementById("cpassword")

const tandc = document.getElementById("tc") 


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validate()
})



function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue =password .value.trim()
    let cpasswordValue = cpassword.value.trim()
    let tandcValue = tandc.value.trim()
}
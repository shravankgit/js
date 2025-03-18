const form = document.getElementById("form")
console.log(form);


const uname = document.getElementById("uname")

const email = document.getElementById("email")

const password = document.getElementById("password")

const cpassword = document.getElementById("cpassword")

const tandc = document.getElementById("tc")


form.addEventListener("submit", (e) => {

    e.preventDefault()
    validate()
})



function validate() {
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
    // let tandcValue = tandc.value.trim()



    //    User Name check

    if (nameValue === '') {
        setError(uname, "user name canot be empty")
    }
    else if (nameValue.length < 3) {
        setError(uname, "user name should be minimum 3 character")
    }

    else {
        setSuccess(uname)
    }
    // emailcheck
    if (emailValue === '') {
        setError(email, 'email cannot be empty')
    }
    else if (!emailCheck(emailValue)) {
        setError(email, 'enter valid email id')
    }
    else {
        setSuccess(email)
    }


    // password check

    if (passwordValue === '') {
        setError(password, "password canot be empty")
    }
    else if (passwordValue.length < 8) {
        setError(password, "password should be minimum 8 character")
    }

    else {
        setSuccess(password)
    }



    // confirm password check

    if (cpasswordValue === '') {
        setError(cpassword, "confirm password canot be empty")
    }
    else if (cpasswordValue.length < 8) {
        setError(cpassword, "confirm password should be minimum 8 character")
    }

    else {
        setSuccess(cpassword)
    }



    // Terms and conditions check

    if (tandc.checked) {
        setError(tc, 'clickon argee terms checkbox')
    }
    else {
        setSuccess(tc)
    }


    function setError(input, message) {
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccess(input) {
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }


    function emailCheck(input) {
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)
        console.log(valid)
        return valid

    }
}

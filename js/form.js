const form = document.querySelector(".order_form")
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#emailaddress");
const emailError = document.querySelector("#emailError");
const cc = document.querySelector("#cc");
const ccError = document.querySelector("#ccError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");


function validateForm() {

    event.preventDefault();

    if (checkLength(firstName.value, 2) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(cc.value, 13, 20) === true) {
        ccError.style.display = "none";
    } else {
        ccError.style.display = "block";
    }

    if (validateEmail(cvv.value, 3) === true) {
        cvvError.style.display = "none";
    } else {
        cvvError.style.display = "block";
    }


    console.log("asda")
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
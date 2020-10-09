
const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const checkBox = document.getElementById("checkbox");
const errorBox = document.getElementById("errorBox");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");

form.addEventListener("submit", function(ev){

    ev.preventDefault();
    clearErrors();

    if(checkBox.checked && password.value.length >=10 && 
        confirmPass.value == password.value){
            window.alert("Success!");
        }

    if(!checkBox.checked){
        window.alert("You must agree to the terms of service before continuing.");
        return;
    }

    if(password.value.length <10){
        errorBox.innerText = "Your password is too short! Please provide a password that is at least 10 characters long.";
        errorBox.style.display = "block";
        password.style.border = "3px solid red";
        password.focus();
        return;
    }

    if(confirmPass.value!=password.value){
        errorBox.innerText = "Your passwords didn't match! Please provide the same password in each field.";
        errorBox.style.display = "block";
        confirmPass.style.border = "3px solid red";
        confirmPass.focus();
        return;
    }
})

function clearErrors(){
    errorBox.style.display = "none";
    password.style.border = "1px solid lightgray";
    password.blur();
    confirmPass.style.border = "1px solid lightgray";
    confirmPass.blur();
};


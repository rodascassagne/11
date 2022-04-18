const menu      = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".nav-menu");

menu.addEventListener("click",function(){
    
    menu.classList.toggle("is-active");
    menulinks.classList.toggle("active");
})

//Modal items

const modal = document.getElementById("email-modal");
const openbtn = document.querySelector(".main-btn");
const closebtn = document.querySelector(".close-btn");

//Click events
openbtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closebtn.addEventListener("click", ()=>{
    modal.style.display = "none";
});

window.addEventListener("click", (e)=>{
    if(e.target === modal){
        modal.style.display = "none";
    }
})













//form validation

const form              = document.getElementById("form");
const name1              = document.getElementById("name");
const email             = document.getElementById("email");
const password          = document.getElementById("password");
const passwordConfirm   = document.getElementById("password-confirm");



// show error message
function showError(input, message){
    const formValidation = input.parentElement;
    formValidation.className = "form-validation error";

    const errorMessage = formValidation.querySelector("p");
    errorMessage.innerText = message;
}
//show valid message 
function showValid(input){
    const formValidation = input.parentElement;
    formValidation.className = "form-validation valid";
}


//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    })
}

//check input length         ------- ` ` --------
function checkLength(input, min, max){
    if(input.value.length < min) {

        showError(input,`${getFieldName(input)} must be atleast ${min} character`);
    } else if (input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max}character`);
    }else{
        showValid(input);
    }
}






// check password match
function passwordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2,"Password do not mactch");
    }
}

// Getfield name
function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//Evenet listener


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([name1, email, password, passwordConfirm]);
    checkLength(name1, 3, 10);
    checkLength(password,6,8);
    checkLength(passwordConfirm,6,8);
    passwordMatch(password,passwordConfirm);
})

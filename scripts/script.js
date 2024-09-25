
let heading = document.getElementById('heading')
document.getElementById('heading').style.color = 'brown';
heading.style.textAlign ='center';

// Caching DOM Elements

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pass');
let confirmPasswordInput = document.getElementById("confirm_pass");
const registerBtn = document.querySelectorAll("registerbtn");
const errMessage = document.querySelector("errMessage");

// add listener to registration validation
    registerBtn.addEventListener("click", function(event) {
    document.getElementById("registerbtn");
    if (emailInput.checkValidity && (validatePassword(password))) {
        alert("Registration Complete!" )
    } else {
        event.preventDefault();
        alert ("Password and/or email is invalid")
    }
  });


  //add listener for password input
confirmPassword.addEventListener("input", validatePassword);

function validatePassword(password,) {
let password = passwordInput.value;

let confirmPassword = confirmPasswordInput.value

const errMessage = document.querySelector("errMessage");

if (password !== confirmPassword) {
    errMessage.textContent = "Invalid Password";
    return false;
} else{
    errMessage.textContent = ""
    return true;
}

}





 

// let welcomeBtn = document.getElementById ('welcome')



// // Caching DOM Elements
// const cList = document.getElementById("commentList");
// const cInput = document.getElementById("commentInput");
// const cBtn = document.getElementById("addCommentBtn");
// cBtn.addEventListener("click", addComment);
// // Functions
// function addComment() {
//   let comment = cInput.value;
//   //add new comment to cList Elements
//   let listItem = document.createElement("li");
//   listItem.textContent = comment;
//   cList.appendChild(listItem);
//   //clear input Element
//   cInput.value = "";
//   cInput.focus();
// }

// welcomeBtn.addEventListener('keypress', handleClick);
// //Functions
// function handleClick(event) {
//   console.log(event.key);
//   if (event.key === 'Enter') {
//     let newHead = document.createElement('h1');
//     newHead.textContent = `Welcome!!`;
//     body[0].appendChild(newHead);
//   }
// }
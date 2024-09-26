
let heading = document.getElementById('heading')
document.getElementById('heading').style.color = 'brown';
heading.style.textAlign ='center';

// Caching DOM Elements


const passwordInput = document.getElementById('pass');
const registerBtn = document.querySelector(".registerbtn");
const emailInput = document.getElementById("email");

console.log(registerBtn)


// add listener to registration validation
    registerBtn.addEventListener("click", function(event) {
    document.getElementById(".registerbtn");
    if (emailInput.checkValidity && (validatePassword(password))) {
    // create a paragraph, add text content to paragraph, append to the DOM
    let paragraph = document.createElement(`p`);
    paragraph.textContent= "Registration Complete!";
    document.body.appendChild(paragraph);
        // alert("Registration Complete!" )
    } else {
        event.preventDefault();
        alert ("Password and/or email is invalid")
    }
  });


  //add listener for password input

        let confirmPasswordInput = document.getElementById("confirm_pass");
       
        confirmPasswordInput.addEventListener("input", validatePassword);

        function validatePassword(password){
             password = passwordInput.value;
            let confirmPassword = confirmPasswordInput.value;
            let errMessage = document.querySelector("errMessage");
            if (password !== confirmPassword){
                errMessage.textContent = "Invalid Password"
            }
        }


        let para = document.querySelectorAll(`#para`);
        para[0].style.backgroundColor = "tan"



        console.log(para)

        // let textInputs = document.querySelectorAll(`input[type=`text`]`);
        // textInput.forEach(input =>{
        //     input.placeholder
        // })
     
       

  

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
// 
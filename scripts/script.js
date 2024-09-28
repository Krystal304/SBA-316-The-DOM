
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
    // modify style of the element in reponse to user interactions using style properties. 
    registerBtn.style.backgroundColor ="red";
    // add prompt method
    let person = prompt("please enter your email")
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
            // BOM properties and method alert
                alert ("Passwords do not match");
            errMessage.textContent = "Invalid Password";
            // }else {
            //     // clear message
            //     errMessage.textContent = "";
            }
        }


        let para = document.querySelectorAll(`#para`);
        para[0].style.backgroundColor = "tan"


        console.log(para)


        // nextElementSibling
        function inputText (){
            let text = document.getElementById(`fname`).nextElementSibling.innerHTML;
            document.getElementById(`lname`).innerHTML = text;  
        }

        // modify element in response to user interaction
        function showInput(){
            let userInput = document.getElementById("fname").value;
            document.getElementById("lname").innerHTML = userInput;
            
        }
       
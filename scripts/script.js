
let heading = document.getElementById('heading')
document.getElementById('heading').style.color = 'brown';
heading.style.textAlign ='center';



let welcomeBtn = document.getElementById ('welcome')



// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");
cBtn.addEventListener("click", addComment);
// Functions
function addComment() {
  let comment = cInput.value;
  //add new comment to cList Elements
  let listItem = document.createElement("li");
  listItem.textContent = comment;
  cList.appendChild(listItem);
  //clear input Element
  cInput.value = "";
  cInput.focus();
}

welcomeBtn.addEventListener('keypress', handleClick);
//Functions
function handleClick(event) {
  console.log(event.key);
  if (event.key === 'Enter') {
    let newHead = document.createElement('h1');
    newHead.textContent = `Welcome!!`;
    body[0].appendChild(newHead);
  }
}
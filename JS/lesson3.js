function clickIt() {
  alert("you clicked this button");
}
let clickMe = document.querySelector("button");

clickMe.addEventListener("click", clickIt);

/*function for first name*/
function firstName(event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name-input");

  console.log(nameInput.value);

  alert(`Your Firstname is ${nameInput.value}`);
}
let formName = document.querySelector("#password-form");
formName.addEventListener("submit", firstName);

/* function for password*/
function signUp(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#passWord-input");

  console.log(passwordInput.value);

  alert(`Your super secret password is ${passwordInput.value}`);
}
let formPass = document.querySelector("#password-form");
formPass.addEventListener("submit", signUp);


let form = document.querySelector("#password-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();


  let firstname = document.getElementById("name-input");
  let lastname = document.getElementById("last-input");
  let birthdate = document.getElementById("date-input");
  let password = document.getElementById("password-input");
  let email = document.getElementById("email-input");

  let title = document.querySelector("h1");
  title.innerText = `Welcome ${firstname.value} ${lastname.value}`;


  let content = document.querySelector("#form-container").innerHTML = `Please confirm that your firstname is ${firstname.value}. your lastname is ${lastname.value}. Your birthday is ${birthdate.value}. your password is ${password}. And your email is ${email}

    Are your details correct? 
    `

  const newButton1 = document.createElement('button');
  newButton1.textContent = 'Yes';
  document.body.appendChild(newButton1);

  const newButton2 = document.createElement('button');
  newButton2.textContent = 'No';
  document.body.appendChild(newButton2);
});

let form = document.querySelector("#password-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();


  let firstname = document.getElementById("name-input");
  let lastname = document.getElementById("last-input");
  let birthdate = document.getElementById("date-input");
  let password = document.getElementById("passWord-input");
  let email = document.getElementById("email-Input");
  let fullname = `${firstname.value} ${lastname.value}`;

   let h1 = document.querySelector("h1");
   h1.innerHTML = `Welcome ${fullname}`;


  let content = document.querySelector("#form-container");
  content.innerHTML = `Please confirm that your firstname is ${firstname.value}. your lastname is ${lastname.value}. Your birthday is ${birthdate.value}. your password is ${password.value} And your email is ${email.value} Are your details correct? `;

 

  const newButton1 = document.createElement('button');
  newButton1.textContent = 'Yes';
  document.body.appendChild(newButton1);

  newButton1.onclick = function(event){
    event.preventDefault();
    document.body.innerHTML = `<h1>Welcome ${fullname} you have been registered successfully. </h1>`
  };

  newButton1.style.backgroundColor = "black";
  newButton1.style.padding = "5px 10px";


  const newButton2 = document.createElement('button');
  newButton2.textContent = 'No';
  document.body.appendChild(newButton2);

  newButton2.onclick = function(event){
    event.preventDefault();
    location.reload();
  }
  newButton2.style.backgroundColor = "black";
  newButton2.style.padding = "5px 10px";

});

/*function for lastname*/
function lastName(event){
  event.preventDefault();

  let last = document.querySelector("#last-input");

  console.log(last.value);

  alert(`Your lastname is ${last.value}`);
  }
  let formLast = document.querySelector("#password-form");
  formName.addEventListener("submit", lastName);

/*function for dateofbirth*/
function birthDate(event){
  event.preventDefault();

  let date = document.querySelector("#dateofbirth");

  console.log(date.value);

  alert(`Your date of birth is ${date.value}`);
  }
  let formDate = document.querySelector("#password-form");
  formName.addEventListener("submit", birthDate);

  
  /*
  To create button
   const newButton1 = document.createElement("button");
    newButton1.textContent = "Yes";
    document.body.appendChild(newButton1);

    newButton1.addEventListener('click', () => {
      alert('New button clicked!');
    });

    const newButton2 = document.createElement("button");
    newButton2.textContent = "No";
    document.body.appendChild(newButton2);
    
    newButton2.addEventListener('click', () => {
      alert('New button clicked!');
   });
  */ 

    /* const newButton1 = document.createElement('button');
     newButton1.textContent = 'Yes';
     document.body.appendChild(newButton1);

     newButton1.addEventListener('click', () => {
      alert('New button clicked!');
    });

    const newButton2 = document.createElement('button');
    newButton2.textContent = 'No';
    document.body.appendChild(newButton2);
    newButton2.addEventListener('click', () => {
      alert('New button clicked!');
      */
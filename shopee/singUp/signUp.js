//show password
const showPass = document.querySelectorAll('.ti-eye');
const pass = document.querySelectorAll('.pass');
const hidePass = document.querySelectorAll('.fa-eye-slash');

for (let i = 0; i < showPass.length; i++){
  showPass[i].addEventListener ('click', () => {
    if(pass[i].type === 'password'){
      pass[i].type = 'text';
      // hidePass.style.display = 'block';
      // showPass.style.display = 'none';
    } else {
      pass[i].type = 'password';
      // hidePass.style.display = 'none';
      showPass.style.display = 'block';
    }
  })
}

// get api
const usersApi = 'http://localhost:3000/Users';

    fetch(usersApi)
    .then (users => {
      return users.json();
    })
    .then ((user) => {
      saveUsers(user);
      console.log(user);
    }) 

function saveUsers (user){
  let emails ="";
  let password ="";
  let rePass = "";
  //select email
  const emailInput = document.getElementById('email');
  emailInput.addEventListener('change', showEmail)
  function showEmail (e) {
    emails = e.target.value;
    validate();
  }

  //check email
  const messEmail = document.querySelector('.mess-email');
  const iconCheck = document.querySelector('.fa');
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  emailInput.addEventListener('click', function(){
    messEmail.style.display = 'none';
  })
  
  function validate() {
    if (validateEmail(emails)){
      iconCheck.style.display = 'block';
      messEmail.style.display = 'none';
      return (true)
    } else{
      messEmail.style.display = 'block';
      messEmail.innerHTML = 'vui lòng nhập email ';
      iconCheck.style.display = 'none';
      messEmail.style.color = 'red';
      return (false)
    }
  }
  
  const passwordInput = document.getElementById('pass');
  passwordInput.addEventListener('change', showPass)
  function showPass(e) {
    password = e.target.value;
  }
  
  const repass = document.getElementById('rePass');
  repass.addEventListener('change', validateRePass)
  function validateRePass (e) {
    rePass = e.target.value;
  }

  const messRePass = document.querySelector('.mess-repass'); 
  function validatePass (pass,rePass){
    if ( pass === rePass ){
      messRePass.style.display = 'none'; 
      return true;
    } else {
      messRePass.style.display = 'block';
      messRePass.innerHTML ="nhập lại ";
      messRePass.style.color ='red';
    }
  };

  repass.addEventListener('click',() => messRePass.style.display = 'none' );

  function checkEmailExist(users){
    for (let i = 0; i < users.length; i++){
      if(users[i].email === emails){
        return true;
      } else {
        return false;
        }
    }
  }
  function conditionSave() {
    if (checkEmailExist === false && validatePass(password,rePass) === true && validate() === true){
      (async () => {
        const userPostApi = await fetch(usersApi, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:emails,password:password})
        });
        const user = await userPostApi.json();
      
        console.log(user);
      })();
      console.log('hi');
    } else {
      console.log('email này đã được sử dụng')
    }
  }

  document.querySelector('.sign-up-btn').addEventListener('click', function(){
    conditionSave();
  })
};

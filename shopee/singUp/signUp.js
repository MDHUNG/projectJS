//show password
const showPass = document.querySelectorAll('.ti-eye');
const pass = document.querySelectorAll('.pass');

for (let i = 0; i < showPass.length; i++){
  showPass[i].addEventListener ('click', () => {
    if(pass[i].type === 'password'){
      pass[i].type = 'text';
    } else {
      pass[i].type = 'password';
    }
  })
}

function saveUsers (){
  let emails ="";
  let password ="";
  let rePass = "";
  //select email
  const emailInput = document.getElementById('email');
  emailInput.addEventListener('change', showEmail)
  function showEmail (e){
    emails = e.target.value;
  }

  //check email
  const messEmail = document.querySelector('.mess-email');
  const iconCheck = document.querySelector('.fa');
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

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
  repass.addEventListener('change', validatePass)
  function validatePass (e) {
    rePass = e.target.value;
  }

  const Btn = document.querySelector('.sign-up-btn');
  Btn.addEventListener('click', addUsers)
  function addUsers (){
    
    // check password
    const messRePass = document.querySelector('.mess-repass'); 
    function validatePass ( pass, rePass){
      if (pass === rePass){
        messRePass.style.display = 'none'; 
        return true;
      } else {
        messRePass.style.display = 'block';
        messRePass.innerHTML ="nhập lại ";
        messRePass.style.color ='red';
        return false;
      }
    }; 
    
    if (validate() == true && validatePass( password, rePass) == true){
      let users =
        {
          email: emails,
          password: password,
        }

      if (users == null){
        users = [];
      }
      fetch('http://localhost:3000/Users',{
        method:'post',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(users),
      })
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
      })
    }
  }

};
saveUsers()
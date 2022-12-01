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

const emailsInput = document.getElementById("email");
const messEmail = document.querySelector('.mess-email');
const signUpBtn = document.querySelector('.sign-up-btn');
const iconCheck = document.querySelector('.fa');
const obj = {
  email:"",
  passWord:"",
  rePassword:""
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validateEmailValue = function (e) {
  obj.email = e.target.value;
  if (validateEmail(obj.email)){
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

emailsInput.addEventListener('change',validateEmailValue)

const passWords =document.getElementById('pass');
passWords.addEventListener('change',(e) => {
  obj.passWord = e.target.value; 
})

const rePass = document.getElementById('rePass');
rePass.addEventListener('change',(e) => {
  obj.rePassword = e.target.value;
})

const messRePass = document.querySelector('.mess-repass');
const validatePass = function ( pass, rePass){
  if (pass === rePass){
    messRePass.style.display = 'none'; 
    return true;
  }else {
    messRePass.style.display = 'block';
    messRePass.innerHTML ="nhập lại ";
    messRePass.style.color ='red';
    return false;
  }
}; 

const validateSignUp = function (){
  if (validatePass == true && validateEmailValue == true){
  }
}


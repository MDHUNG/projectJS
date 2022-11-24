const downlaodApp = document.querySelector('.ctn-hover');
const QrApp = document.querySelector('.QRApp');

downlaodApp.addEventListener('mouseover',addDisplayApp)
function addDisplayApp () {
  QrApp.style.display = 'flex';
}

downlaodApp.addEventListener('mouseout',removeDisplayApp)
function removeDisplayApp () {
  QrApp.style.display = 'none';
}

const language = document.querySelector('.nav-language');
const languageOptions = document.querySelector('.language');

language.addEventListener('mouseover', addDisplayLang)
function addDisplayLang(){
  languageOptions.style.display = 'block';
}

language.addEventListener('mouseout', removeDisplayLang)
function removeDisplayLang(){
  languageOptions.style.display = 'none';
}


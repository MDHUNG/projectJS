const btns = document.querySelectorAll('.btn');
const number = document.querySelector('.number');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let count = 0;

btns.forEach(function(item) {
  item.addEventListener('click', function(e){
    const styles = e.currentTarget;
    if(styles == decrease){
      count--;
    }
    else if (styles == increase){
      count++;
    }
    else{
      count = 0;
    }
    number.textContent = count;
  })
});
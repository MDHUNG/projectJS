const colors = ["#FF6666", "#FF0000", "#000080", "#FF00FF", "rgb(192,192,192)", "#669900", "#00DD00",];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  const numberRandomColor = randomColor();
  console.log(numberRandomColor);
  document.body.style.backgroundColor = colors[numberRandomColor];
  color.textContent = colors[numberRandomColor];
})

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
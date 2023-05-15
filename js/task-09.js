const buttonChange = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');


buttonChange.addEventListener('click', () => {
  const colorSel = getRandomHexColor();
  document.body.style.backgroundColor = colorSel;
  spanColor.textContent = colorSel;
})
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

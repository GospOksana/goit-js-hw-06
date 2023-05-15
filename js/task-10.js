const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divControls = document.querySelector('.controls');
const divBoxes = document.querySelector('.boxes');
const inputCounter = document.querySelector('input[type="number"]');


buttonCreate.addEventListener('click', createBoxes);
// buttonDestroy.removeEventListener('click', createBoxes);


function createBoxes(){
   
  console.log(inputCounter.value);
  for(let i = 0; i < inputCounter.value; i++){
    const block = document.createElement('div');
    const param = 30 + i*10;
    block.style.width = '"' + param + '"';
    block.style.height = '"'+param+'"';
    block.style.color = getRandomHexColor();
    // console.log(block);
    // console.log('"'+param+'"');
    divBoxes.append(block);
  }

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let isOperLast=0;
const display = document.querySelector('.calc .display');
document.querySelectorAll('.digits')
    .forEach(button =>button.addEventListener('click',digitPressed));

function digitPressed(event){
    const btnText = event.target.innerHTML;
    isOperLast = 0;
    display.value+=btnText;
}

document.querySelectorAll('.opers')
    .forEach(button =>button.addEventListener('click',operPressed));

function operPressed(event){
    if (isOperLast ===0){  
        const btnText = event.target.innerHTML;
        isOperLast = 1;
        display.value+=btnText;
    }
}   

document.querySelector('.calc .eq')
    .addEventListener('click',eqPressed);

function eqPressed(){
    isOperLast = 0;
    display.value = eval(display.value);
}

document.querySelector('.calc .clear')
    .addEventListener('click',clearPressed);

function clearPressed(){
    isOperLast =0;
    display.value ='';
}

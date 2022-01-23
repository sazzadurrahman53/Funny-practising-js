const incrementBtn = document.querySelector('.btn_increment');
const decrementBtn = document.querySelector('.btn_decrement');
const resets = document.querySelector('.btn_reset');
const count = document.querySelector('.count');

function increment(){
    count.innerHTML++;
}
incrementBtn.addEventListener('click', increment);

function decrement(){
    count.innerHTML--;
}
decrementBtn.addEventListener('click', decrement);

function reset(){
    count.innerHTML=0;
}
resets.addEventListener('click',reset);
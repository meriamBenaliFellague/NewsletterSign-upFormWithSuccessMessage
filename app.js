var input = document.getElementById('input-email');
const ipt = document.getElementById('errer');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
var c1 = document.getElementById('cnt1');
var c2 = document.getElementById('cnt2');
const msg = document.getElementById('msg');

function back(){
    c1.style.display = "grid";
    c2.style.display = "none";
    input.value = '';
}
btn2.addEventListener('click', back); 

function WrongData() {
    let validRegex =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
   if (input.value.match(validRegex)) {
    msg.textContent = input.value;
    c1.style.display = "none";
    c2.style.display = "grid";
   } else {
    input.style.border = '1px solid hsl(4, 100%, 67%)';
    input.style.color = 'hsl(4, 100%, 67%)';
    input.style.backgroundColor = 'hsl(4, 100%, 88%)';
    ipt.textContent = 'Valid email required';
   }
   
}
btn1.addEventListener('click', WrongData); 

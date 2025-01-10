var operator="";
var FirstNumber="";
var SecondNumber="";

function append(number)
{
if(operator===""){
    FirstNumber+=number;
    document.getElementById('result').value=FirstNumber;

}
else{
    SecondNumber+=number;
    document.getElementById('result').value=SecondNumber;
    document.getElementById('result').value=FirstNumber+""+operator+""+SecondNumber;
}
}
function setoperator(op){

    operator=op;
    document.getElementById('result').value=FirstNumber+""+operator;

}
function showresult(){
    let res=0;
    switch(operator){
        case '+':
            res=parseInt(FirstNumber)+parseInt(SecondNumber);
            break;
            case '-':
            res=parseInt(FirstNumber)-parseInt(SecondNumber);
            break;
            case '*':
            res=parseInt(FirstNumber)*parseInt(SecondNumber);
            break;
            case '/':
            res=parseInt(FirstNumber)/parseInt(SecondNumber);
            break;


    }
    document.getElementById('result').value=res;
}
function reset(){

    FirstNumber="";
    SecondNumber="";
    document.getElementById('result').value="";
  

}

const body=document.querySelector('body');
const button=document.getElementById('button1');
const button1=document.getElementById('button1');
const button2=document.getElementById('button2');
const button3=document.getElementById('button3');
const button4=document.getElementById('button4');
const button5=document.getElementById('button5');
const button6=document.getElementById('button6');
const button7=document.getElementById('button7');
const button8=document.getElementById('button8');
const button9=document.getElementById('button9');
const button10=document.getElementById('button10');
const button11=document.getElementById('button11');
const button12=document.getElementById('button12');
const button13=document.getElementById('butto13');
const button14=document.getElementById('button14');
const button15=document.getElementById('button15');
const button16=document.getElementById('button16');
const color=['red','gray','blue','pink','violet','green','yellow'];
body.style.backgroundColor='orange';
body.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];

})
button1.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button1.style.backgroundColor=color[colorIndex];

})
button2.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button2.style.backgroundColor=color[colorIndex];

})
button3.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button3.style.backgroundColor=color[colorIndex];

})
button4.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button4.style.backgroundColor=color[colorIndex];

})
button5.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button5.style.backgroundColor=color[colorIndex];

})
button6.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button6.style.backgroundColor=color[colorIndex];

})
button7.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button7.style.backgroundColor=color[colorIndex];

})
button8.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button8.style.backgroundColor=color[colorIndex];

})
button9.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button9.style.backgroundColor=color[colorIndex];

})
button10.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button10.style.backgroundColor=color[colorIndex];

})
button11.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button11.style.backgroundColor=color[colorIndex];

})
button12.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button12.style.backgroundColor=color[colorIndex];

})
button13.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button13.style.backgroundColor=color[colorIndex];

})
button14.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button14.style.backgroundColor=color[colorIndex];

})
button15.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button15.style.backgroundColor=color[colorIndex];

})
button16.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    button16.style.backgroundColor=color[colorIndex];

})




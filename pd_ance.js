function function1() { 
document.body.style.backgroundColor = 'gray'; 
} 
function function2() { 
document.body.style.backgroundColor = 'white';  
} 
function function3() { 
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
}
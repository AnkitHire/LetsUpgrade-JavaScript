console.log("DOM");

//get element by id
var names= prompt("hey there whats ur name?");
title.innerText += `Welcome Aboard ${names}`;
var name = prompt("enter a number");
var table =document.getElementById("tables");
for(let i =1;i<11;i++)
{
     let ab =name *i;
    table.innerText += `    ${name} X ${i} =${ab}  \n  `;
    ab=0;
}
var col = ['red','blue','green','yellow','black'];
console.log(col);

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    dmode.classList.toggle("ast");
    
   
}




const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

var i = 0;
function change() {
  var doc = document.getElementById("dark");
  var color = ['red','blue','green','yellow','black'];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);

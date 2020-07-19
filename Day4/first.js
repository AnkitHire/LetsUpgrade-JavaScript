for (let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log(" fizzbuzz");
    }
    else if(i%5==0)
    {
        console.log("buzz");
    }
    else if(i%3==0  )
    {
        console.log("fizz");
    }
}


shoppinglist = ["bread","egg", "milk"];

console.log("shoppinglist:",shoppinglist);

basket = ["chocolate","chips"];
console.log("basket:",basket);

shoppingbasket = shoppinglist.concat(basket);
console.log("shoppingbasket:",shoppingbasket);

var op = prompt("what do u want to perform use the symbol, for square root use !:");

switch(op)
        {
            case '+':
                let a = prompt("first number:");
                let b = prompt("second number:");
                console.log( +a + +b);
                break;

            case '-':
                let c = prompt("first number:");
                let d = prompt("second number:");
                console.log( c - d);
                break;

            case '*':
                let i = prompt("first number:");
                let j = prompt("second number:");
                console.log( i * j);
                break;

            case '/':
                let k = prompt("first number:");
                let l = prompt("second number:");
                console.log( k / l);
                break;

           case '!':
               let s= prompt("enter number for square root");
               console.log( Math.sqrt(s));
                break;
               case '%':
                let p = prompt("enter number:");
                let o = prompt("enter total:");
                console.log( p*100/o) ;
                break;

            
        }
     
    var sales = prompt("enter your sales");

    if(sales <= 5000)
    {
        let c = 0.02*sales;
        console.log("your commision is:",c)
    }
    if(sales >= 5001 && sales<= 10000)
    {
        let c = 0.05*sales;
        console.log("your commision is:",c)
    }
    if(sales >= 10001 && sales<= 20000)
    {
        let c = 0.07*sales;
        console.log("your commision is:",c)
    }
    if(sales >= 20001)
    {
        let c = 0.1*sales;
        console.log("your commision is:",c)
    }

var num =0 

while(num < 100)
{
    num= prompt("enter number greater than 100");
   // console.log("not higher than 100:", num)
}
console.log("higher than 100:", num);
var numb= prompt("enter number");

for (var counter = 2; counter <= numb; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
const student = {
    name : 'Helsinki',
    age :24,
    projects :{
        dicegame: 'two player dice game using javascript'
    }
}
console.log(student.name);
console.log(student.age);
console.log(student.projects);
console.log(student.projects.dicegame);



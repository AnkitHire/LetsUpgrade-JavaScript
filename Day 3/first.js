// var a = prompt("Enter a number: ");

// if(a %2==0)
//     {
//         console.log("number", a ,"is even");
//     }
// else{
//     console.log("number",a, "is odd")
// }

// var s= prompt("Enter OS name and version with a space in between:");
// var sp=s.split(" ");
// console.log("The OS name is",sp[0],"and the version is",sp[1]);

var marks = prompt("Enter your marks:");

if(marks >75)
{
    console.log("Marks are ",marks,"Grade is A")
}
else if(marks <75 && marks>35)
{
    console.log("Marks are ",marks,"Grade is B")
}
else
{
    console.log("Marks are ",marks,"Grade is C")
}
switch(marks/10)
{
    case 10:
    case 9:
        console.log("Marks are ",marks,"Grade is A")
        break;
    case 8:
        console.log("Marks are ",marks,"Grade is A")
        break;
    case 7:
        
            console.log("Marks are ",marks,"Grade is B");
            break;
    case 6:
        console.log("Marks are ",marks,"Grade is B");
        break;
    case 5:
        console.log("Marks are ",marks,"Grade is B");
        break;
    case 4:
        
            console.log("Marks are ",marks,"Grade is C")
            break;
    
}

var b = (marks >75) ? "A" :(marks<75 && marks>50) ? "B" :"C";
console.log("Marks are ",marks,"Grade is", b); 
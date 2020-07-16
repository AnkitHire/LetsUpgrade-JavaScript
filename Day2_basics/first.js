// var a =prompt("Enter your name");
// console.log("name is: ",a);

var b = ["Banana", "Orange", "Apple", "Mango"];
console.log("array:",b);
var c=b.toString();
console.log("tostring: ",c);
var d= b.join("  ");
console.log("join: ",d);
console.log("popped element:" ,b.pop());
b.push("kiwi");
console.log("push:",b);
console.log("shift:",b.shift());
b.unshift("watermelon");
console.log("shift:",b  );
delete b[2];
console.log(b);

var a1=[1,2,3];
var a2=[4,5];
var a3 = a1.concat(a2);
console.log("concat: ",a3);
a4=a1.slice(1);
console.log("Slice: ",a4);

var str ="abcdefg";
var str1="hijklmno";
var s = str.charAt(1);
console.log("charAt(): ",s);
console.log("charCodeAt(): ",str.charCodeAt(0));
console.log("search:", str.search("cde"));
console.log("match: ",str.match("ab"));

var age= prompt("tell us your age!!!!");

if(age>=21)
{
    console.log("Drink");
}
else
{
    console.log("cannot drink")
}

var a = prompt("enter a number");
var ar= []
for (let i =0;i<=a;i++)
{
    ar[i]=i;
}
console.log(ar)
function cube(n)
{   
    return n**3

}
function odd(n)
{
    if (n%2!=0)
    return n;
}
b = ar.filter(odd).map(cube);

console.log(b);
console.log("Promises");

let users = [
    {
        name:'Berlin',
        email:'b@gmail.com',
    },
    {
        name:'Rio',
        email:'r@gmail.com',
    },
    {
        name:'Tokyo',
        email:'t@gmail.com',
    },
]

function getUsers(){
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    },1000);
}

 function createUser(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                users.push(user);
    
                const error = false;
    
                if(!error){
                    resolve();
                }
                else{
                    reject("Oops an error occured");
                }
    
            }, 3000);
        })
    }
    
    createUser({name:'Denver',email:'d@gmail.com'})
    .then(getUsers)
    .catch(error=>console.log(error));
    
const photos = [];
async function photoUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        },3000)
    })

    let result = await status;
    console.log(photos.length);
}

photoUpload();
photoUpload();

class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

    class Moderator extends User{
        constructor(name,age,email,role){
            super(name,age,email);
            this.role = role;
        }
        addCoins(){
            this.luCoins++;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
        removeCoins(){
            this.luCoins--;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
    }


    class Admin extends Moderator{
        addCourse(user,course){
            user.courses.push(course);
            console.log(user);
        }
        addCourse(user,course){
            user.courses.pop(course);
            console.log(user);
        }
     }


     console.log('Fetch API');

// https://jsonplaceholder.typicode.com/comments

// Making a get request
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:254,
    title:"Some Title",
    body:'lorem ipsum',
}

// Make a post Request
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))



async function fetchJokes(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    console.log(data);
}

fetchJokes();


let obj1 = {
    name:'Prasad',
    age:24,
    canDrive:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)
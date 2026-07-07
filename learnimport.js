const { useCallback } = require("react")

console.log("Mahnoor's learning in java script ")

/*
//................lecture # 1  (data types and variables )................................................................
let name="Mahnoor";
let age = 20;
let isFollow=false;

console.log(name)
console.log(age)
console.log(isFollow)

// object declaration (non primitive data type)

const student={
    name:"Mahnoor",
    age:24,
    subject:"SE"
}

console.log(student)
*/

//.......................lecture#2 (conditions and operations)............................................................

/*
//Arithmatic operators

let a = 2;
let b= 5;

console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a * b = ", a*b)
console.log("a / b = ", a/b)
console.log("a % b = ", a%b)
console.log("a ^ b = ", a**b) // to assign power use **


//unary opearators(a++,++a,a--,--a)

console.log("a++=", a++)
console.log("++a=", ++a)
console.log("a--=", a--)
console.log("--a=", --a)


//Asigmnet operators (==,+=,-=,*=,%=,/=)

console.log("a=a", a==a)
console.log("a+4=a", a+=4)
console.log("a-4=a", a-=4)
console.log("a*4=a", a*=4)

//Comparison oprators (!=,==,) simple equal to and not eqaul to (===,!==) not equal to and type , equal to an type
// greater than or less than equal to also (>=,<=)

console.log("a===b", a===b)
console.log("a!==a", a!==b)

//logical operators (&&,||,!) and,or,not

//Conditions (if,else if, else)
    let age =25;
    let theme="White";

if(age>=18)
{
    console.log("You are eligible for vote")
}

if(age>=18)
{
    console.log("You are eligible for vote")
}
else{
    console.log("not elgible for vote")
}

if(theme=="pink")
{
    console.log("Turn on pink mode")
}
else if(theme=="Black"){
    console.log("Turn on dark theme")
}
else{
    console.log("Turn on white theme")
}


//ternary operator (condition? trueoutput:falseoutput)

(age>=18)? "Adult": "not adult";

//prompt and alert  ( use for getting input through pop up, use to display pop up message)
alert("Good morning");
prompt("Enter your name");

*/


//...........................Lecture#3 (loops and strings)...............................................................

/*

for(let i=1; i<=5; i++)
{
    console.log("i=",i)
}

let j=0;
while(j<=10)
{
    console.log("Hello !")
    j++;
}

let k=1;
do{
    console.log("Mahnoor")
    k++;
}
while(k<=5);


//for off loop and for in loop (Allow to apply loop on some special data types) (for=string and array,in=object and array)

let name = "Mahnoor";
for(let i of name)
{
    console.log(i)
}

let student ={
    name:"Mahnoor",
    age:20,
    Pass:true
}
for(let i in student)
{
    console.log("key=",i, "value=", student[i])
}

//strings  and string methods

let str ="mahnoor";
let str2 ="GHULAM SABIR"
console.log(str)
console.log(str.length)
console.log(str.toUpperCase())
console.log(str2.toLowerCase())
console.log(str2.trim())       //remove white spaces
console.log(str.slice(2,5))             //to print specific part of string
console.log(str.concat(str2))    //concatination
console.log(str.charAt(5))
console.log(str.replace("a","b"))



//Template literals (special type of strings used to print strning along with values in asingle lines) 

let temp =`This is template literals with value ${1+2+3}`;


*/



//...................................lecture#4 ( Arrays ).......................................................................
/*

let array =[0,1,2,3,4,5]

//methods to access array

for(let i=0; i<array.length; i++)
{
    console.log(array[i])
}

for(let i of array)
{
    console.log(i)
}

//store number of a student in array and find average

let marks =[80,90,75,85,90]
let sum =0;
for(let i=0; i<marks.length; i++)
{
    sum = sum+marks[i]
}

console.log("Average =" , sum/marks.length)

//Array methods

let fruits = ["Apple","Mango","Banana"]

console.log(fruits)
fruits.push("Grapes","Kivi") //to add new items    we can also use shift
console.log(fruits.pop())     //remove and return last item      we can also use unshift
fruits.toString()   //convert into string
console.log(fruits)

// we can also use methods of concate and slice eith arrays

fruits.splice(2,1,"Gauva")   // delete a count of items and can add new item  (delete index,number of items to delete, new item )
console.log(fruits)


*/



//.....................................Lecture # 5 (Methods and functions)...............................................................

/*

// Functions      ..(if function is associted with a specific object it becomes a method i.e toupercase()=> use only with string)


function hello()

{
    console.log("Hello how are you ?")
}

hello()

function sum (num1,num2)
{
    console.log("sum : " , num1+num2)
}

sum(4,5)

//Arrow function 

const name = (msg)=>
{
    console.log(msg);
}

name("Mahnoor")

// Print only vowels of takin string using function



function message ()
{
let str = prompt("Enter a string : (only lower case letters)")
for(let i of str)
{
    if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u")
    {
        console.log(i)
    }
}

}

message()

//using for each loop print sqaure of every value in a array

let array = [2,3,4,5,6]

array.forEach(function square (val)
{
    console.log(val*val );
})


//map method works same as for each loop but its returns a new array 
//filter method also works as same but it is used to usd to filter a specific value on the basis of some condition
//reduce also perform the same function but it applies a function on array to convert it into single element 

*/


//.................................................lecture 6&7 ( Document object model DOM)..............................................



/*

//we have learnt how to connect javascript , html and css 
// windows (it is created by browser have all information about the code and website page )

console.log(window)

//DOM ( it is model of the design of website or we can say architecture  , it is created by browser whwn we load  website)
//we can use DOM to do changes in website with out doing any change in html or css file

console.log(window.document)
console.dir(window.document)

//DOM Manipulation 

let id =document.getElementById("heading")   //to access a single element or manipulate represented by "#"
console.log(id)

let get = document.getElementsByClassName("headings")  //to access multiple elements represented by "."
console.log(get)

let tag = document.getElementsByTagName("h4")   //to access elements through tag names 
console.log(tag)

let element = document.querySelector("h1")    //to access first element of any id, tag,or class
console.log(element)

let elements= document.querySelectorAll("h4")  //to access the node list 
console.log(elements)


console.log(document.body.firstChild)
console.log(document.body.lastChild)   //to print elements from DOM tree hirarchy
console.log(element.tagName)  //to get the tag name of specific element
console.log(element.innerText)  //to get alltext inside element
console.log(element.innerHTML)  //to get all text along with html info
console.log(element.textContent)  // to print hidden elements

let iD=document.querySelector("h1").getAttribute("id") 
console.log(iD)    //to get value of any attribute
let name=document.querySelector("h1").setAttribute("id" , "h1") 
console.log(name)   //to set value of any attribute

let style=document.querySelector("body").style
console.log(style)                   //to access the style of any element


//Practice Questions 

let newElement = document.createElement("button")
newElement.innerText="Mahnoor"
newElement.style.backgroungColor="yellow"
newElement.style.color="white"
console.log(newElement)


document.querySelector("body").prepend(newElement)

document.querySelector("p").setAttribute("class" , "headings")


*/




//...........................................Lecture # 8 (Events).......................................................................

//event are defined as the interesting changes happen to our windowon diffrent actions like button click.double click,print etc
//priority will be given to java script event handling


let btn = document.querySelector("button")

btn.onclick=() =>
{
console.log ("Welcome to my page")

}

btn.mouseover=() =>
{
    alert("Click to get message ")
}

btn.ondblclick=(evt) =>
{
console.log (evt.type)            //to get event details
console.log(evt)
}

//event listners (easy to handle and access )
// to add use btn.addeventlistner(event,call back function)
// to remove use btn.removeeventlistner(event,call back function)





//.................................................Lecture # 11 (Objects and classes)........................................................





/*
const employee ={
    name:"Mahnoor",
    age:20,}                       //object declaration

const tax = {
    taxrate () { 
        console.log("Tax rate is 10%")        //Function inside object is called method
    }
}

employee.__proto__= tax;                 //use to create prototype chain between two objects
employee.taxrate();                      //call the method from the prototype

class toyotacar{          //class declaration
    constructor()
    {
                              //constructor without parameters
    }
    constructor(name,model,year)
    {
        this.name=name;
        this.model=model;           //constructor with parameters
        this.year=year;
    }
    start()
    {
        console.log ("Car is starting")
    }
    stop()
    {
        console.log ("Car is stopping")
    }

    setprice(price)
    {
        this.price=price;
    }
    getprice()                                        //set function and get function
    {
        console.log("Price of car is ",this.price)
    }
    
}

let ford = new toyotacar("Ford","Mustang",2020)   //object creation of class
ford.start()
ford.setprice(50000)
ford.getprice()
console.log(ford)     //to print all the details of object ford





class person{                    //Parent class
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    greet()
    {
        console.log("Hello my name is ",this.name," and my age is ",this.age)
    }
}

class student extends person{                          //Child class (inheritance)
    constructor(name,age,rollno)
    {
        super(name,age)                 //super keyword is used to call the parent class constructor
        this.rollno=rollno;
    }
    greet()
    {
        console.log("Hello my name is ",this.name," and my age is ",this.age," and my roll number is ",this.rollno)
    }
}

let student1 = new student("Mahnoor",20,101)
student1.greet()



//Practice Questions

class user{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }

    viewdata()
    {
        console.log("Name : ",this.name," Email : ",this.email)
    }
}



class admin extends user{
    constructor(name,email)
    {
        super(name,email)
    
    }

    editdata(newname,newemail)
    {
        this.name=newname;
        this.email=newemail;
    }
}

let user1 = new user("Mahnoor","mahnoor@example.com")
user1.viewdata()
let admin1 = new admin("Admin","admin@example.com")
admin1.viewdata()
admin1.editdata("Admin1","admin1@example.com")
admin1.viewdata()


//Error handling (try catch block)  (used to handle the error in code and prevent the crash of code)

try{
    let a=10;
    let b=0;

    sum = a/b;
}

catch(error){
    console.log("Error : ",error.message)
}

finally{
    console.log("This block will always execute")
}










*/



//....................................................Lecture # 12 (call backs , promises ,  async await).........................................................


//Asynchronous programming is a programming paradigm that allows for non-blocking operations, enabling tasks to run concurrently without waiting for each other to complete. In JavaScript, this is often achieved using callbacks, promises, and async/await syntax.

console.log("one")
console.log("two")
setTimeout(() => {
    console.log("three")      //decide to print this after 2 seconds delay
}, 2000);
console.log("four")

//In the above code, "one" and "two" are logged immediately, while "three" is logged after a 2-second delay due to the asynchronous nature of setTimeout. "four" is logged immediately after "two", demonstrating that the program doesn't wait for the timeout to complete before moving on.


//Callbacks are functions passed as arguments to other functions, allowing for asynchronous execution. They are commonly used in scenarios like event handling or making API requests.

function sum (a,b)
{
    console.log("Sum is : ",a+b)
}

function calculate(a,b,callback)
{
    callback(a,b)
}

calculate(5,10,sum)   //callback function is passed as an argument to the calculate function


// call back hell is a situation where multiple nested callbacks make the code difficult to read and maintain. It can be avoided by using promises or async/await syntax.

function getdata(dataid , getnextdata)
{
    console.log("Data is fetched for id : ",dataid)
    setTimeout(() => {
    getnextdata();
}, 2000);
}

getdata(1,()=>{
    getdata(2,()=>
    {
        getdata(3,()=>
        {
            console.log("All data is fetched")
        })
    })
})


//Promises are a more elegant way to handle asynchronous operations. A promise represents a value that may be available now, later, or never. It can be in one of three states: pending, fulfilled, or rejected.

let promise = new Promise((resolve,reject)=>
{
    console.log("Fetching data from server...")
    resolve("Data fetched successfully")
})

promise.then((message)=>
{
    console.log(message)
})

promise.catch((error)=>
{
    console.log("Error : ",error)
})


//Async/await is a syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code. It allows you to write asynchronous code in a more readable manner.

function api()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            resolve("Data fetched from API")
        }, 2000);
    })
}

async function fetchdata()
{
await api().then((message)=>
{
    console.log(message)
})
}




//                    asynawait >>  promises >> callbacks  (in terms of readability and maintainability)

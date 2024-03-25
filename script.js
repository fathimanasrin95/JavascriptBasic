console.log('hello');
// Variables
var a=9;
console.log(a);
var a=18;
console.log(a);
{
    var a=50;
  
}
console.log(a);
a=45;
console.log(a);
// Let declaration
var b=30;
console.log(b);
{
    let b=20;
    console.log(b);
}
console.log(b);
b=90;
console.log(b);
// contant declaration
const ti=890;
console.log(ti);
{
    const ti=8;
    console.log(ti);
    
}
console.log(typeof(b));
 var nam='fathima';//string
console.log(typeof(nam));
var isNum=true;//boolean
console.log(typeof(isNum));
var g;//Undefined
console.log(typeof(g));
// null--->typeof null shows as object in terminal
let lastName=null;
console.log(typeof(lastName));

// arithmetic operator
let x=5;
let y=4;
let z=x+y;
console.log(z);
console.log(x-y);
console.log(x*y);
console.log(x/y);
let m=1;
let n=2;
let o=3;
console.log((m+n)*o);
//increment operator
//postfix--> a++  prefix-->++a both means a=a+1
let r=1;
let s=r++;
console.log(s);//the value of s should be 1 bcz value of r is assainging to s after only value of r incrementing
console.log(r);//value became 2 now
//prefix
let a=1;
let b=++a;
console.log(b);//the value should 2, bcz the value of a is increment then after only assaign to b.
//Drecrement operator similarly
let a=2;
let b=a--;
console.log(b);
let c=--a;
console.log(c);
//comparison operator ==
let num1 =5;
let num2 = 5;
if (num1==num2)
{
    console.log("equal");
}
else{
    console.log("not equal");
}
//here we put === then not only compare the value compare datatype also so here asnwer is not equal
let num1 =5;
let num2 ='5' ;
if (num1===num2)
{
    console.log("equal");
}
else{
    console.log("not equal");
}
//compare !=,>,>=,<,<=
let num5=12;
let num6=22;
if (num5!=num6){
    console.log("not equal");

}
else{
    console.log("equal");
}
if (num5>num6){
    console.log("Greater");

}
else{
    console.log("not greater");
}
if (num5>=num6){
    console.log("greater or equal");

}
else{
    console.log("not greater or equal");
}
if (num5<num6){
    console.log("less num");

}
else{
    console.log("greater");
}
       if (num5<=num6){
    console.log("less or equal");

}
else{
    console.log("not less or equal");
}
//logical operator
let num1=12;
let num2=20;
if((num1===num2)||(num1=12))
{
    console.log('both num are equal and num1 is 12');
}else{
    console.log('check failed');
}
if((num1===num2)&&(num1=12))
{
    console.log('both num are equal and num1 is 12');
}else{
    console.log('check failed');
}

//Object
let person ={
    name:"fathima",
    age:29,
    place:"kollam"

};
console.log(person.name);
console.log(person.age);
console.log(person.place);
let people = {
    name:"fathima",
    age:29,
    address:{
        street:"xyz",
        city:"Kollam",
        pin:4657
    }
};
console.log(people.address.street);
//using 'new' keyword
var car = new Object();
car.brand = 'maruthi';
car.name = 'ciaz'
car.color ='grey';
console.log(car.name);

// Arrays---typeof shows as object in terminal

let color=['red','blue'];
console.log(color[0]);
console.log(color[1]);
console.log(color.length);
color[2]='green';//if we know the length of array we can add element like this
console.log(color);
color.push('black');//if we donno the length of an array we can add like this
console.log(color);
console.log(color.length);
color.unshift('pink');//we can add 'pink' as first element if donno length of array
console.log(color);
color.pop();//to delete last element in an array
console.log(color);
color.shift();//DELETE FIRST ELEMENT IN ARRAY
console.log(color);
console.log(color.indexOf('blue'));

let car =['ciaz','celero','benz']
//car.splice(2,1);//here (2,1) MEANS from 2nd position we can delete 1 element
//splice use to add or delete any element of an array and also can overide elements of array
car.splice(2,0,'asd','ndfh');//here from 2nd position we can add few other element
console.log(car);

//Array of object
const fruits =[{ name:'apple', price:200},{name:'orange',price:150},{name:'banana', price:100}];
console.log(fruits[1].name);


// Function


function add(a,b){
    let c= a+b;
    console.log(c);
}
add(2,3);
// another method using return
function add(a,b){
    let c=a+b;
    return c;
}

let d=add(2,3);
console.log(d);

//greeting a person
function greet(name)
{
    console.log('hello'+name);
}
greet('john');//we can also  call function before define it
 //square of value
square(5);
function square(m){
    let n=m*m;
    console.log('square is'+n);

}
//convert  faranheit to celcius

function celcius(f)
{
let o=(f-32)*5/9;
return o;
}
console.log(celcius(100));

//teritionary operator
let x=6;
//check x<10
console.log(x<10?'failed':'pass');

//for loop
for(let i=0;i<5;i++)
{
    console.log(i+1);
}

let fruits=['apple','banana','orange','grapes'];
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
//for of loop
for(x of fruits)
{
    console.log(x);
}
//foreach loop
fruits.forEach(element => {
    console.log(element);
});
//for in---to iterate object
let person={ name:'fathima',age:29,palce:'kollam'}
for (x in person)
 {
   console.log(person[x]);
}
//while loop---entry controlled
let j=0
while(j<5){
    console.log(j+1);
    j++;
}

let k=0;
while( k>fruits.length)
{
    console.log(fruits[k]);
    k++;
}
//do while----exit controlled
let p=1;
do{
    console.log(p);
    p++;

}while(p<=5)


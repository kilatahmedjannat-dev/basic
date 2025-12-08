
//arithmatic operator
let akhi = 18;
let jannat = 19;
let J = jannat-akhi;
console.log(J);

//moduleser kaj? ba (%) kaj?
/*let userinput = prompt('Enter the number');
let number = parseInt(userinput);

if(number % 2 === 0)
console.log(`${number} is even number`);

else{
    console.log(`${number} is odd number`);
}*/

//increment
let x = 10;
x = x + 1;
x++;
console.log(`increment ${x}`);

//decrement
let y = 20;
y = y - 1;
y--;
console.log(`decrement ${y}`);

//comparisaone operator
let p = 5;
let q = 5;
console.log(p==q);
console.log(p===q);
console.log(p!==q);
console.log(p<q);

//logical operator

//&& and operator
//|| or perator

//assegment operator

let j = 10;
let a = 20;
j = j + a;
j+=a;

j = j - a;
j-=a;

j = j / a;
j/=a;
j **=a;
console.log(j);

/*
*conditional (tarnary) operator
*/

let t = a > j ? 'True' : 'False';
console.log(t);
let m = a<j ? 'True' : 'False';
console.log(m);

//firstName = 'akhi';
let g = a > j ? true : false;


/*
 * javascript data type
 */

let firstName = 'akhi';
let fullName = ' my name is "jannat"';

let age = 30.5;
let age2 = firstName+age

let numberBig = 9999999999999999n;
let numberBig2 = 9999999999999999n;

console.log(numberBig * numberBig2);
console.log(age2);
console.log(typeof age);



let l = 10;
let o = "5";
console.log(l+o);

let saidul = "jnnat love \'akhi\'"
console.log( saidul);

let age3 = 20;
let nam = "jannat"
let age4 = 19;
let calculation = nam + age3 + age4 + firstName + age3
console.log(calculation);

//operator pacidant
//-----(){}[]
// / * - +
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

console.log(5+6-3/2*4);

/* 
5 + 6 - 3 / 2 * 4
= 5 + 6 - 1.5 * 4
= 5 + 6 - 6
= 5
*/

//java script function
function myfunction(fullName , age = 30) {
    console.log('  congratulation  ' + fullName +' your '+ age+' years ');
}
myfunction('jannat', 19);
myfunction('akimul' , 18);







function isSubscrib(){
    console.log('Subscrib');
}
document.getElementById('btn').addEventListener
('click', isSubscrib);






(function (massege) {
    console.log('i am self invokeing functoin', massege);
})('hello jannat');





let maths = function(x,y) {
    return x * y;
    console.log('jannat');//not suported
};
console.log(maths(3, 3));






function newfunc(){
    let firstName = 'jannat';
    console.log(firstName);
}
newfunc();







function newfunc(){
    let firstName = 'jannat';
    console.log(firstName);
}
newfunc();






//function nilam use korlam baddilam
let number = [2,4,5,6,5];
let sqNumber = number.map(function(number) {
    return number * number;
});
console.log(sqNumber);







let add = function  (s,t){
    return s+t;
}
console.log(add(3,4));




function great(firstName){
    function sayhello(){
        alert(firstName +' your limit is max ')
    }
    return sayhello();
}
great('jannat');


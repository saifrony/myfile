// let input= prompt("whats's your name");
//alert( "hello " + input);

//const { getMaxListeners } = require("process");




//value = Math .E;
//console.log(value); 

//value = Math.random() *100;
//= math.floor(value);

//console.log(value); 

/*let firstName = prompt ("what is your name?");
let partnerName = prompt ("what is your partner name?")

let number = Math.random()*100;
number = Math.floor(number)+1;

alert(firstName + " and " + partnerName + "'s love peecentage is " + number + "%"  );

console.log(number);*/

/*let userName = prompt("what's your name");
upperCase = userName.toUpperCase();
lowerCase = userName.toLowerCase();

let firstName = upperCase.slice(0,1);
let totalLenth = userName.length;

alert( "Hello " +firstName + lowerCase.slice(1,totalLenth));
*/

/*const number = [22,60,55,100,73,96];

let value = number;

value = number.sort(function(x, y){
    return x - y;
});

function over50(num){
    return num>75;
}
value= number.find(over50);
value=Date();
console.log(value);*/

const person = {
    firstName:"Saif",
    lastName: "islam",
    age: 28,
    email: "isaif326@gmail.com",
    address: {
        city:"Narayanganj",
        postcode:1420
    },
    getBirthYear: function(){
        return 2022 - this.age;
    }



}

/*let value = person;

value=person.firstName;
value=person.lastName;
value=person.getBirthYear();

const people= [
    {name:"sara", age:25},
    {name:"shisir" ,age:43},
    {name:"rony",age:28}
];

for( let i=0; i<people.length; i-=2){
    console.log(people[i]);
}
*/
//people=.isArray();
//console.log(people);

let myArray=["one", "two","three","four","five","six"];

//for (let i=0; i>myArray.length; i--){
    //console.log(myArray[i]);
//}

for (i=myArray.length-1; i>=0; i--){
    console.log(myArray[i]);

}

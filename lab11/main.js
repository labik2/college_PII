// Завдання 1
var a = 10;
let b = 20;
const c = 30;


console.log(a); 
console.log(b); 
console.log(c); 

// Завдання 2
function testScope() {
    if (true) {
        var x = 5;
        let y = 10;
        const z = 15;
    }
    console.log(x); 
    console.log(y);
    console.log(z); 
}
testScope();

// Завдання 3
console.log(5 + "5"); 
console.log("5" - 2);
console.log(true + false); 
console.log(null + 1); 
console.log(undefined + 1); 
console.log(0 == false); 
console.log(0 === false); 

// Завдання 4
const person = {
    name: "John",
    age: 30
};


person.age = 31;
person.city = "New York";
console.log(person);




Object.freeze(person);


person.age = 40; 
console.log(person);

// Завдання 5
function checkType(value) {
    return typeof value;
}

console.log(checkType(10));     
console.log(checkType("Hello"));
console.log(checkType(null));    

// 사칙연산
// 출력

let a = 3;
const b = 5;

a = a+b
console.log(a);

const array = [1,2,3,4,5];
array.push(6)

console.log(array)

const c = null;
let s;

console.log(c,s)

const person = {
  name: "Greg",
  age: 30,
  handsome: false,
}
person.age = 15;
console.log(person.age)

//  함수
function sayHello(name){
  return "Hello! " + name
  
}
console.log(sayHello("경근"))

const calculator = {
  name: "Jelly",
  add: function(a,b){
    return a+b
  },
  subtract: function(a,b){
    return a-b
  },
  multiple: function(a,b){
    return a*b
  },
  divide: function(a,b){
    return a/b
  },
}

console.log(calculator.add(50,70))
console.log(calculator.subtract(50,70))
console.log(calculator.multiple(50,70))
console.log(calculator.divide(50,70))


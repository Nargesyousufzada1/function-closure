const greetStudent = () => {
    console.log("Hey, Welcome to JavaScript course")
}

greetStudent();

function addNumber(a, b) {
    return a + b
}
console.log(addNumber(2, 7));

// Task 2

const calculateTotal = function(price = 50, quantity = 1) {
    let mutiply = price * quantity;
    return mutiply
}
console.log(calculateTotal(20, 3));

function introduceStudent(name, course = "   MERN Stack") {
    console.log(name + course)
}
introduceStudent("Tina");

// the differnce between return and console.log 

function square(num) {
    console.log(num * num)
}
square(2);
let doubleSquare = square(2);
console.log(doubleSquare);

function newSquare(num) {
    return num * num
}
console.log(newSquare(3));
const newSquareResult = newSquare(3);
const newDoubleSquare = newSquareResult * newSquareResult;
console.log(newDoubleSquare);

// Task three: function expression and Arrow function 
const multiplyNumbers = function(a,b) {
    console.log(a * b)
} 
multiplyNumbers(3, 6);

// Rewriting square function as arrow function 
const squareNumbers = (num) => {
    console.log(num * num)
}
squareNumbers(6);

// Arrow function with condition 
const isEven = (number) => {
    if (number % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(19));

// Part 2: Scoops and Closures 
const courseName = "MERN Stack Bootcamp";

function greetings(name) {
    console.log(`hello from ${courseName} to ${name}`)
}
greetings("Ali");

// Note: the subsequent block of code shows that variables defined inside a function cannot be accessed out of it even if it is written by var key word 

function easyPay(price) {
    var tax = 3;
    console.log(price + tax)
}
easyPay(7);

// totalCost = price + 3;
// console.log(totalCost); result: undefined

// Task 5: Block scope 
// if (true) {
//     let age = 20;
// }
// console.log(age); answer: age is not defined


if (true) {
    var name = "Omar";
}
console.log(name);

// Task 6: logic of outer, inner and global variable 
let salary = 20000;

function TotalSalary(tip) {
    const message = "Thanks for your hard work, this is your reward";
    function salaryResult() {
        var overtimeSalary = 5000;
        console.log(`This is your total wage. ${salary + tip + overtimeSalary} ${message}`)
    }
    salaryResult();
}
TotalSalary(20);

// Task 7: Variable Shadowing 
let scoreOfStudent = 90;

function finalResult(dailyActivity) {
    let scoreOfStudent = 50;
    console.log(dailyActivity + scoreOfStudent)
}
finalResult(10);

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Creating two independent counters 
function createCounters() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());
console.log(counterB());


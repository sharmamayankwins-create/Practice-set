// // // // Functions
// // // function greet(name) {
// // //     return "Hello, " + name + "!";
// // // }
// // // console.log(greet("Alice")); // Hello, Alice!

// // // // Anonymous Functions
// // // const sayHi = function () {
// // //     console.log("Hi there!");
// // // };
// // // sayHi();

// // // //  Function Execution (calling a function)
// // // function add(a, b) {
// // //     return a + b;
// // // }
// // // console.log(add(2, 3));

// // // //  Arrow Functions
// // // const multiply = (x, y) => x * y;
// // // console.log(multiply(4, 5));

// // // //  IIFE (Immediately Invoked Function Expression)
// // // (function () {
// // //     console.log("IIFE runs immediately!");
// // // })();

// // // //  Outside window and inside window of JS

// // // if (typeof window !== "undefined") {
// // //     console.log("Inside browser window object");
// // // } else {
// // //     console.log("Outside browser (for example Node.js)");
// // // }

// // // // HIGHer Order Functions
// // // // Function that takes another function as argument
// // // function repeat(fn, times) {
// // //     for (let i = 0; i < times; i++) {
// // //         fn();
// // //     }
// // // }
// // // repeat(() => console.log("Hello from higher-order function!"), 3);


// // // // for...in loop: loops over keys of an object
// // // const obj = { a: 1, b: 2, c: 3 };
// // // for (let key in obj) {
// // //     console.log(key, obj[key]);
// // // }

// // // // forEach() method: calls a function on each element of an array
// // // const arr = [10, 20, 30];
// // // arr.forEach((item, index) => {
// // //     console.log(index, item);
// // // });


// // // // Simulate an event handler function
// // // function handleClick(event) {
// // //     console.log("Clicked element:", event.target);
// // // }

// // // // Simulate a click event object
// // // const fakeEvent = { target: "Button1" };
// // // handleClick(fakeEvent); // logs: Clicked element: Button1

// // // const numbers = [1, 2, 3, 4, 5];

// // // // map: create a new array by modifying each value
// // // const doubled = numbers.map(n => n * 2);
// // // console.log("Doubled:", doubled); // [2,4,6,8,10]

// // // // filter: new array with items that satisfy condition
// // // const evens = numbers.filter(n => n % 2 === 0);
// // // console.log("Evens:", evens); // [2,4]

// // // // reduce: combine array values to one result (sum here)
// // // const sum = numbers.reduce((total, n) => total + n, 0);
// // // console.log("Sum:", sum); // 15

// // // // find: first element meets condition
// // // const firstEven = numbers.find(n => n % 2 === 0);
// // // console.log("First even:", firstEven); // 2


// // // // Rest operator: collects rest of parameters into array
// // // function sumAll(...nums) {
// // //     return nums.reduce((a, b) => a + b, 0);
// // // }
// // // console.log(sumAll(1, 2, 3, 4)); // 10

// // // // Spread operator: spreads array into individual elements
// // // const arr1 = [1, 2];
// // // const arr2 = [...arr1, 3, 4];
// // // console.log(arr2); // [1,2,3,4]


// // // // Select element by id
// // // const elem = document.getElementById("myDiv");

// // // // Change text content
// // // elem.innerText = "New text";

// // // // Create new element
// // // const newPara = document.createElement("p");
// // // newPara.innerText = "Hello!";

// // // // Append new element to body
// // // document.body.appendChild(newPara);


// // // // Example fake JSON data
// // // const fakeData = [
// // //     { id: 1, name: "Alice", age: 25 },
// // //     { id: 2, name: "Bob", age: 30 },
// // // ];

// // // // Use fake data
// // // fakeData.forEach(user => {
// // //     console.log(user.name + " is " + user.age + " years old.");
// // // });




// // const btn = document.getElementById("myBtn");

// // // 1. Using onclick property (overwrites if set again)
// // btn.onclick = function () {
// //   alert("Clicked using onclick property!");
// // };

// // 2. Using addEventListener with anonymous function
// btn.addEventListener("click", function () {
//   console.log("Clicked using addEventListener with anonymous function!");
// });

// // // // 3. Using addEventListener with arrow function
// // // btn.addEventListener("click", () => {
// // //   console.log("Clicked using addEventListener with arrow function!");
// // // });

// // // // 4. Using addEventListener with named function
// // // function handleClick() {
// // //   console.log("Clicked using named function!");
// // // }
// // // btn.addEventListener("click", handleClick);

// // // // 5. Using setAttribute (not recommended, acts like inline)
// // // btn.setAttribute("onclick", "console.log('Clicked via setAttribute!')");

// // // // 6. Using onclick with function reference
// // // function sayHello() {
// // //   console.log("Hello via onclick property with reference!");
// // // }
// // // btn.onclick = sayHello;  // this will override method #1

// // // // 7. Using event object
// // // btn.addEventListener("click", function (event) {
// // //   console.log("You clicked: " + event.target.innerText);
// // // });


// 1. Button Click Event
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
  alert("Button was clicked!");
});



// // 2. Input Event
// const textInput = document.getElementById("textInput");
// textInput.addEventListener("input", (e) => {
//   console.log("You typed: " + e.target.value);
// });

// // 3. Mouseover Event
// const hoverBox = document.getElementById("hoverBox");
// hoverBox.addEventListener("mouseover", () => {
//   hoverBox.style.background = "lightgreen";
//   hoverBox.textContent = "Mouse Over!";
// });
// hoverBox.addEventListener("mouseout", () => {
//   hoverBox.style.background = "lightblue";
//   hoverBox.textContent = "Hover Me";
// });

// // 4. Keyboard Event
// document.addEventListener("keydown", (e) => {
//   console.log("Key pressed:", e.key);
// });

// // 5. Window Resize Event
// window.addEventListener("resize", () => {
//   console.log("Window resized: " + window.innerWidth + "x" + window.innerHeight);
// });

function commonDigit(num1, num2){
    let digits1 = num1.toString().length;
    let digits2 = num2.toString().length;
    return digits1 === digits2;
}

console.log(commonDigit(78574, 78392));
console.log(commonDigit(74847, 781));


let expenses = [1000, 5000, 30000, 2000, 500];

let newExpenses = 543;
expenses.pu






function findDuplicate(arr) {
  let arr1 = []; 
 
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[i] === arr[j]) {
        if (!arr1.includes(arr[i])) { 
        }
      }
    }
  }
 
  return arr1;
}
 

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
console.log(findDuplicate(arr));
 

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sharmamayankwins-create/Practice-set.git
git push -u origin main
// Part 1: Variables, Conditionals, Input/Output
const greetBtn = document.getElementById("greet-btn");
greetBtn.addEventListener("click", () => {
  let username = document.getElementById("username").value;
  
  if (username) {
    document.getElementById("greeting").innerText = `Hello, ${username}! 👋`;
  } else {
    document.getElementById("greeting").innerText = "Please enter your name!";
  }
});

// Part 2: Functions
function showDate() {
  const today = new Date();
  document.getElementById("date-output").innerText = `Today is: ${today.toDateString()}`;
}

function calculateTotal(price, qty) {
  let total = price * qty;
  document.getElementById("total-output").innerText = `Total = $${total}`;
  return total;
}

// Part 3: Loops
document.getElementById("countdown-btn").addEventListener("click", () => {
  let countdownText = "";
  for (let i = 5; i >= 0; i--) {
    countdownText += i + " ";
  }
  document.getElementById("countdown").innerText = `Countdown: ${countdownText}`;
});

document.getElementById("list-btn").addEventListener("click", () => {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"];
  const fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = ""; // clear previous list

  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.innerText = fruit;
    fruitList.appendChild(li);
  });
});

// 🌐 Part 4: DOM Manipulation
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  let status = document.body.classList.contains("dark-theme") 
               ? "Dark 🌙" : "Light 🌞";
  document.getElementById("theme-status").innerText = `Current Theme: ${status}`;
});

document.getElementById("add-item").addEventListener("click", () => {
  let ul = document.getElementById("dynamic-list");
  let newItem = document.createElement("li");
  newItem.innerText = `Item ${ul.children.length + 1}`;
  ul.appendChild(newItem);
});

document.getElementById("change-text").addEventListener("click", () => {
  document.getElementById("welcome-text").innerText = "🚀 Welcome to the JavaScript World!";
});


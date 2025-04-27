const outputDiv = document.getElementById("output");

function printToOutput(text) {
    const p = document.createElement("p");
    p.textContent = text;
    outputDiv.appendChild(p);
}

// Завдання 1: 
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

printToOutput("Завдання 1:");
printToOutput("Сума чисел від 1 до 5: " + calculateSum(5));

// Завдання 2: 
const multiply = function(a, b) {
  return a * b;
};

printToOutput("\nЗавдання 2:");
printToOutput("Добуток 3 та 4: " + multiply(3, 4));

// Завдання 3: 
const power = (a, b) => a ** b;

printToOutput("\nЗавдання 3:");
printToOutput("2 в степені 3: " + power(2, 3));

// Завдання 4: 
function harmonicSeries(n) {
  if (n === 1) {
    return 1;
  } else if (n > 1) {
    return 1 / n + harmonicSeries(n - 1);
  } else {
    return 0;
  }
}

printToOutput("\nЗавдання 4:");
printToOutput("Сума перших 4 членів гармонійного ряду: " + harmonicSeries(4));

// Завдання 5: 
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

printToOutput("\nЗавдання 5:");
printToOutput("Подвоєння 5: " + double(5));
printToOutput("Потроєння 5: " + triple(5));

// Завдання 6: 
function applyFunction(value, func) {
  return func(value);
}

function doubleValue(x) {
  return x * 2;
}

const squareValue = (x) => x ** 2;

printToOutput("\nЗавдання 6:");
printToOutput("Подвоєння 7: " + applyFunction(7, doubleValue));
printToOutput("Піднесення 3 до квадрату: " + applyFunction(3, squareValue));

// Завдання 7: 
function processSet(set, callback) {
  let result = "Елементи множини: ";
  let first = true;
  for (const element of set) {
    if (!first) {
      result += ", ";
    }
    callback(element); 
    result += element;
    first = false;
  }
  return result;
}

const mySet = new Set([10, 20, 30, 40]);
function logElement(element) {
    console.log("Елемент множини (з колбеку):", element);
}

printToOutput("\nЗавдання 7*:");
printToOutput(processSet(mySet, logElement));
// Functionality:

// The calculator accepts two numbers from the user as input.
// It offers functionalities for addition, subtraction, multiplication, and division through user prompts.
// Error handling is included to prevent division by zero and handle invalid inputs (non-numeric values).
// Steps:

// 2. User input:
// Use prompt function to ask the user for the first number and store it in num1.
// Convert the user input to a number using parseFloat or parseInt to handle potential string input.
function getNumber(xxx) {
  while (true) {
    const input1 = prompt("Enter the " + xxx + " number:");
    let num = parseFloat(input1);
    if (isNaN(num)) {
      alert("Invalid input for the " + xxx + " number. Please enter a number.");
    } else {
      return num;
    }
  }
}

// Repeat the process for obtaining the second number (num2).

let num1 = getNumber("first");
let num2 = getNumber("second");

// 3. Operation selection:

// Use a while loop to keep prompting the user until a valid operation is chosen.
// Inside the loop, use prompt to ask the user to choose an operation (+, -, *, /).
// Use a switch statement or a series of if statements to check the chosen operation.
function getOperation() {
  const operations = ["+", "-", "*", "/"];

  while (true) {
    let operation = prompt("Choose an operation: +, -, *, /");

    if (operations.includes(operation)) {
      return operation;
    } else {
      alert("Invalid operation. Please choose one of +, -, *, or /.");
    }
  }
}

let op = getOperation();

// 4. Calculation:

// Depending on the chosen operation, perform the calculation using appropriate arithmetic operators and store the result in a new variable (e.g., let result).

switch (op) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;

  // 5. Error handling:

  // If the user chooses division (/) and num2 is zero, display an error message indicating "Division by zero is not allowed!".
  // If the user enters a non-numeric value for either number, display an error message indicating “Invalid input. Please enter numbers only.”

  case "/":
    if (num2 == 0) {
      alert("Division by zero is not allowed!");
      result = 0;
    } else {
      result = num1 / num2;
    }
    break;
}
// 6. Output: If no errors occur, use console.log to display the final result in the format "The result is: [result]".
console.log("The result is: " + result);

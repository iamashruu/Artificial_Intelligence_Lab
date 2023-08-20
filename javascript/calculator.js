console.log("Simple Calculator");

function calculate(expression) {
  try {
    const result = eval(expression);
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

calculate("5 + 3 * 2");
calculate("Math.sqrt(16)");

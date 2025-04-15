function addNumbers(a, b) {
    const result = a + b;
    console.log(`The result is: ${result}`);
    return result;
  }
   
  function multiplyNumbers(a, b) {
    const result = a * b;
    console.log(`The result is: ${result}`);
    return result;
  }
   
  function divideNumbers(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
   
    const result = a / b;
    console.log(`The result is: ${result}`);
    return result;
  }
   
  const x = 5;
  const y = 0;
   
  try {
    addNumbers(x, y);
    multiplyNumbers(x, y);
    divideNumbers(x, y);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
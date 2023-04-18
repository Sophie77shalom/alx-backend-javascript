function taskFirst() {
    const name = "John";
    const age = 30;
    const city = "New York";
  
    console.log(`My name is ${name}, I'm ${age} years old, and I live in ${city}.`);
  }
  
  function taskNext() {
    let count = 0;
    let isRunning = true;
    let message = "";
  
    while (isRunning) {
      message = `The count is ${count}.`;
  
      if (count >= 5) {
        message += " The loop has ended.";
        isRunning = false;
      }
  
      console.log(message);
  
      count++;
    }
  }
  
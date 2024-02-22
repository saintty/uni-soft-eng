import { isPrime } from "./../functions/isPrime/index.js";
import { fib } from "./../functions/Fibonacci/index.js";
import { nextPrime } from "./../functions/nextPrime/index.js";

const callFn = async (rl, idx) => {
  if (idx < 0 || idx >= 3) return null;

  const input = await rl.question("Number: ");

  switch (idx) {
    case "0":
      console.log(`Is ${input} prime? ${isPrime(+input)}\n\n`);
      break;
    case "1":
      console.log(`Nth-fib is: ${fib(+input)}\n\n`);
      break;
    case "2":
      console.log(`Next Prime is: ${nextPrime(+input)}\n\n`);
      break;
    default:
      console.log("Unknown");
  }
};

const menuPoints = ["Define is input number prime", "Nth-Fib ", "NextPrime"];

const showMenu = async (rl) => {
  while (true) {
    const choice = await rl.question(
      menuPoints.map((point, idx) => `${idx}. ${point}\n`).join("") +
        "\nChoise ('exit' to leave): "
    );

    if (choice === "exit") break;

    await callFn(rl, choice);
  }
};

export default showMenu;

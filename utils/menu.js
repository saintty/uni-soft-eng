import { isPrime } from "./../functions/isPrime/index.js";
import { fib } from "./../functions/Fibonacci/index.js"

const callFn = async (rl, idx) => {
  if (idx < 0 || idx >= 2) return null;

  const input = await rl.question("Number: ");

  switch (idx) {
    case "0":
      console.log(`Is ${input} prime? ${isPrime(+input)}\n\n`);
      break;

    case "1":
      console.log(`Это число в последовательности Фибоначчи равно: ${fib(+input)}\n\n`);
      break;

    default:
      console.log("Unknown");
  }
};

const menuPoints = ["Define is input number prime",
                            "Введите число в последовательности Фибоначчи"];
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

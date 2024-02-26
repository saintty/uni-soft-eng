import { clearScreenDown, moveCursor } from "node:readline";

import colors from "colors";

import { isPrime } from "./../functions/isPrime/index.js";
import { fib } from "./../functions/Fibonacci/index.js";
import { nextPrime } from "./../functions/nextPrime/index.js";

import { colorize } from "./colorizeAnswer.js";

const callFn = async (rl, idx) => {
  const input = await rl.question("Number: ".blue);

  switch (idx) {
    case "0":
      console.log(
        colorize({
          str: `Is ${input} prime?`,
          answer: isPrime(+input),
          isBool: true,
        })
      );
      break;
    case "1":
      console.log(colorize({ str: `Nth-fib is:`, answer: fib(+input) }));
      break;
    case "2":
      console.log(
        colorize({ str: `Next Prime is:`, answer: nextPrime(+input) })
      );
      break;
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
    else {
      moveCursor(process.stdout, 0, -5);
      clearScreenDown(process.stdout);

      if (!isFinite(choice) || +choice < 0 || +choice > 2) {
        console.log(colorize({ str: "Unknown", color: "red" }));
        continue;
      }
    }

    await callFn(rl, choice);
  }
};

export default showMenu;

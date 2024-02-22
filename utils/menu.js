import { isPrime } from "./../functions/isPrime/index.js";

const callFn = async (rl, idx) => {
  if (idx < 0 || idx >= 1) return null;

  switch (idx) {
    case "0":
      const num = await rl.question("Number: ");
      console.log(`Is ${num} prime? ${isPrime(+num)}\n\n`);
      break;
    default:
      console.log("Unknown");
  }
};

const menuPoints = ["Define is input number prime"];
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

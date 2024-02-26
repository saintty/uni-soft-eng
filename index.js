import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import showMenu from "./utils/menu.js";

const rl = readline.createInterface({ input, output });
await showMenu(rl);

rl.close();

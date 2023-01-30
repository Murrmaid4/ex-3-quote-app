#!/usr/bin/env node

import chalk from "chalk";

console.log( chalk.blue.bold("\t\tThe Office Quote Generator\n\n"));

const quoteArr = ["I'm not superstitious, I am a little stitious though", "Bears. Beets. Battlestar Galactica","Identity Theft is not a joke Jim, Millions of families suffer every year!"]

const randomQuote = Math.floor(Math.random()* quoteArr.length)

console.log(chalk.magenta.bold(quoteArr[randomQuote]));
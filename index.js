#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((r) => setTimeout(r, 4000));
};
async function welcome() {
    const style = chalkAnimation.karaoke('Welcome to this Number Guessing Game \n');
    await sleep(); //waiting for sleep to over
    style.stop();
}
await welcome();
async function askQuestions() {
    let randNo = Math.floor(Math.random() * 10);
    var PLife = 3;
    do {
        PLife--;
        console.log(`Player Lives remaining ${PLife}`);
        var inp = await inquirer
            .prompt({
            type: "number",
            name: "user-num",
            message: "Enter a number between 1 and 10: ",
            //  validate: (answer : number) => {
            //   if(isNaN(answer)){
            //     return chalk.red("Please enter a number value")
            //   }
            //  }
        });
        if (inp["user-num"] == randNo) {
            console.log(chalk.green("Congratulations!!!Correct Guess"));
        }
        if (inp["user-num"] > randNo) {
            console.log(chalk.red("Wrong guess!!"));
            console.log(chalk.blueBright("Your number is greater than the random number "));
        }
        if (inp["user-num"] < randNo) {
            console.log(chalk.red("Wrong guess!!"));
            console.log(chalk.blueBright("Your number is less than the random number "));
        }
    } while (PLife > 0 && inp["user-num"] !== randNo);
    if (PLife == 0) {
        console.log(chalk.bgRedBright("Game over!!!"));
    }
}
//askQuestions()
async function startAgain() {
    do {
        await askQuestions();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "doAgain",
            message: chalk.blueBright("Do you want to play again? Type 'y' for yes and 'n' for No ")
        });
    } while (again.doAgain == "y" || again.doAgain == "Y");
}
startAgain();

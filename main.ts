#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";

let balanceAmount = 100000;
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter Your Pin Number",
        type: "number"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log(chalk.bold.yellowBright("Congratulation! you're enter in  your Account!!!"));

    let operationsAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Your Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    
    if (operationsAnswer.operation === "Withdraw") {
        let amountanswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Please Enter Your Amount",
                type: "number"
            }
    ]);
                balanceAmount -= amountanswer.amount;
               console.log(chalk.bold.blueBright("Your Remaining Balance Is:" + balanceAmount));
        

    }
    else if (operationsAnswer.operation === "Fast Cash"){
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "please Selact Your Amount!",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        if(fastcashAns.amount <= balanceAmount){
            let balance2 =balanceAmount - fastcashAns.amount;
            console.log(chalk.bold.blueBright(`Congratulation! Your Transaction is Complete Successfully \nYour remaining Amount is ${balance2}`));

        }
        else{
            console.log(chalk.bold.blueBright("You have Insufficient balance Amount"));
        }    

        } 
        else if (operationsAnswer.operation === "Check Balance"){
            console.log(chalk.bold.blueBright("Your current Balance is:" + balanceAmount) );
        }

}
 else {
    console.log(chalk.underline.red("Incorrect Pin Number! Please Try Again!"));

 }

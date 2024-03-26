#!  /usr/bin/env  node
// Printing a Welcome Message
console.log("\n\t Welcome to \`HumaMeraj \` - CLI Simple Calculator \n");
import inquirer from "inquirer";
// Asking Questions from users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//console.log(answers);
// Conditional statments If-Else
if (answers.operator === "Addition") {
    console.log(answers.FirstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("Invalid Input");
}

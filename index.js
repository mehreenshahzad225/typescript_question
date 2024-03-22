import inquirer from "inquirer";
const solve = await inquirer.prompt([
    { msg: " first number", type: "number", name: "firstNum" },
    { msg: "second number", type: "number", name: "secondNum" },
    {
        msg: "select operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//condition 
if (solve.operator === "Addition") {
    console.log(solve.firstNum + solve.secondNum);
}
else if (solve.operator === "Subtraction") {
    console.log(solve.firstNum - solve.secondNum);
}
else if (solve.operator === "Multiplication") {
    console.log(solve.firstNum * solve.secondNum);
}
else if (solve.operator === "Division") {
    console.log(solve.firstNum / solve.secondNum);
}
else if (solve.operator === "Modulus") {
    console.log(solve.firstNum % solve.secondNum);
}
else {
    console.log("please select invaid opertor");
}

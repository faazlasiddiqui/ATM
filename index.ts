import inquirer from "inquirer";

let myBalance = 10000; // Dollars
let myPin = 1709;

let pinAnswer = await inquirer.prompt({
  name: "Pin",
  message: "Enter your pin?",
  type: "number",
});
if (pinAnswer.Pin === myPin) {
  console.log("Correct pin code")}

  let operationAns = await inquirer.prompt([
    {
      name: "Operation",
      message: "Please Select Option",
      type: "list",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);
  
if (operationAns === "Withdraw") {
    let amountAns = await inquirer.prompt([{
        name : "amount",
        message: " enter your amount",
        type: "number",
    }]);
    myBalance-= amountAns.amount;
    console.log("Your remaining balance is" + myBalance);
    if (myBalance > myBalance){
        console.log("Insufficient Amount")
    }
} else if (operationAns.Operation === "Check Balance") {
    console.log("My balance is" + myBalance )
}


else {
  console.log("Incorrect pin code");
}

import inquirer from "inquirer";
// Currency Converter or Exchange
const currencyRate = {
    PKR: 1,
    USD: 0.0036,
    INR: 0.30,
    EURO: 0.0033,
    GBP: 0.0029,
};
let userInput = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Select your From currency",
        choices: ["PKR", "USD", "INR", "EURO", "GBP"]
    },
    {
        name: "to",
        type: "list",
        message: "Select your To currency",
        choices: ["PKR", "USD", "INR", "EURO", "GBP"]
    },
    {
        name: "amount",
        type: "number",
        message: "Type your amount to convert"
    }
]);
let fromCurrency = currencyRate[userInput.from];
let toCurrency = currencyRate[userInput.to];
let amountConvert = userInput.amount;
let baseAmount = amountConvert / fromCurrency;
let converted = baseAmount * toCurrency;
console.log(converted);
let roundoff = Math.trunc(converted);
console.log("Your exact roundoff amount is " + roundoff);

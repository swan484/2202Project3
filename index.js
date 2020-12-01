//Read data in JSON and use classes defined to perform analysis on given data. Write output in JSON file.
//Output file should contain list of JSON objects with
// "time interval" and "revenue" property

let BudgetAnalysis = require("./BudgetAnalysis");
const BudgetItem = require("./BudgetItem");
let Objects = require("./Objects.json");

let budgetAnalysis = new BudgetAnalysis(Objects);

let month = "June";
let year = "2019";
console.log("Net income for " + month + ": $"+ budgetAnalysis.getMonthlyRevenue(month, 2019));
console.log("Net income for " + year + ": $"+ budgetAnalysis.getYearlyRevenue(year));


console.log("\nBudget Items for the month " + month + ": ");
for(let bItemMonth of budgetAnalysis.getMonthlyBudgetItems(month, year)){
    console.log(bItemMonth);
}

console.log("\nBudget Items for the year " + year + ": ");
for(let bItemYear of budgetAnalysis.getYearlyBudgetItems(year)){
    console.log(bItemYear);
}


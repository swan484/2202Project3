//Read data in JSON and use classes defined to perform analysis on given data. Write output in JSON file.
//Output file should contain list of JSON objects with
// "time interval" and "revenue" property

let BudgetAnalysis = require("./BudgetAnalysis");
const BudgetItem = require("./BudgetItem");
let Objects = require("./Objects.json");

let budgetAnalysis = new BudgetAnalysis(Objects);

let month = "May";
let year = "2019";
console.log("Net income for " + month + ": $"+ budgetAnalysis.getMonthlyRevenue(month));
console.log("Net income for " + year + ": $"+ budgetAnalysis.getYearlyRevenue(year));


//There is an issue with the following lines (at least on my VScode) where sometimes it will terminate early and not print everything
//Not sure how to resolve this, it seems to be an issue with VScode itself and not the actual code
console.log("\nBudget Items for the month " + month + ": ");
for(j = 0; j < 6; j ++){
    console.log("HELLO?");
    console.log(budgetAnalysis.getMontlyBudgetItems(month)[j]);
}

console.log("\nBudget Items for the year " + year + ": ");
for(y of budgetAnalysis.getYearlyBudgetItems(year)){
    console.log(y);
}

let BudgetAnalysis = require("./BudgetAnalysis");
const fs = require("fs")
let Objects = require("./Objects.json");

// Read in the JSON objects and creats a BudgetAnalysis class
let budgetAnalysis = new BudgetAnalysis(Objects);

var timePeriods = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "2018", "2019"];
var objArray = [];

// Using the time periods in timePeriods array, we perform either yearly or n=monthly budget analysis.
for(let period of timePeriods){
    if(period == '2018' || period == '2019'){
        let object = {
            time_Interval: period,
            revenue: budgetAnalysis.getYearlyRevenue(period)
        }
        objArray.push(object);
    }
    else{
        let object = {
            time_Interval: period,
            revenue: budgetAnalysis.getMonthlyRevenue(period)
        }
        objArray.push(object);
    }
}

// For each analyzed object, we will stringify and create a JSON object.
let objectsList = "["
for(let obj of objArray){
    objectsList += JSON.stringify(obj) + ",";
}
let JSONObjects = objectsList.substring(0, objectsList.length - 1);
JSONObjects += "]";

// Use filestream to output JSON objects into seperate 'output' file.
var stream = fs.createWriteStream("output.json");
stream.once('open', function(fd){
    stream.write(JSONObjects);
    stream.end();
    console.log("Writing Complete!");
});

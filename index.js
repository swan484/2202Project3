//Read data in JSON and use classes defined to perform analysis on given data. Write output in JSON file.
//Output file should contain list of JSON objects with
// "time interval" and "revenue" property

let BudgetAnalysis = require("./BudgetAnalysis");
const BudgetItem = require("./BudgetItem");
const fs = require("fs")
let Objects = require("./Objects.json");

let budgetAnalysis = new BudgetAnalysis(Objects);

var timePeriods = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "2018", "2019"];
var objArray = [];

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

let objectsList = "["
for(let obj of objArray){
    objectsList += JSON.stringify(obj) + ",";
}
let JSONObjects = objectsList.substring(0, objectsList.length - 1);
JSONObjects += "]";

var stream = fs.createWriteStream("output.json");
stream.once('open', function(fd){
    stream.write(JSONObjects);
    stream.end();
});

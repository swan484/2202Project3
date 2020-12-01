//Read data in JSON and use classes defined to perform analysis on given data. Write output in JSON file.
//Output file should contain list of JSON objects with
// "time interval" and "revenue" property

let BudgetAnalysis = require("./BudgetAnalysis");
const BudgetItem = require("./BudgetItem");
let Objects = require("./Objects.json");

let budgetAnalysis = new BudgetAnalysis(Objects);

var timePeriods = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "2018", "2019"];
var objArray = [];
for(let t of timePeriods){
    switch(t){
        case "January":
            let Jan = {
                time_Interval: "January",
                revenue: budgetAnalysis.getMonthlyRevenue("January")
            }
            objArray.push(Jan);
            break;
        case "February":
            let Feb = {
                time_Interval: "February",
                revenue: budgetAnalysis.getMonthlyRevenue("February")
            }
            objArray.push(Feb);
            break;
        case "March":
            let Mar = {
                time_Interval: "March",
                revenue: budgetAnalysis.getMonthlyRevenue("March")
            }
            objArray.push(Mar);
            break;
        case "April":
            let Apr = {
                time_Interval: "April",
                revenue: budgetAnalysis.getMonthlyRevenue("April")
            }
            objArray.push(Apr);
            break;
        case "May":
            let May = {
                time_Interval: "May",
                revenue: budgetAnalysis.getMonthlyRevenue("May")
            }
            objArray.push(May);
            break;
        case "June":
            let Jun = {
                time_Interval: "June",
                revenue: budgetAnalysis.getMonthlyRevenue("June")
            }
            objArray.push(Jun);
            break;
        case "July":
            let Jul = {
                time_Interval: "July",
                revenue: budgetAnalysis.getMonthlyRevenue("July")
            }
            objArray.push(Jul);
            break;
        case "August":
            let Aug = {
                time_Interval: "August",
                revenue: budgetAnalysis.getMonthlyRevenue("August")
            }
            objArray.push(Aug);
            break;
        case "September":
            let Sep = {
                time_Interval: "September",
                revenue: budgetAnalysis.getMonthlyRevenue("September")
            }
            objArray.push(Sep);
            break;
        case "October":
            let Oct = {
                time_Interval: "October",
                revenue: budgetAnalysis.getMonthlyRevenue("October")
            }
            objArray.push(Oct);
            break;
        case "November":
            let Nov = {
                time_Interval: "November",
                revenue: budgetAnalysis.getMonthlyRevenue("November")
            }
            objArray.push(Nov);
            break;
        case "December":
            let Dec = {
                time_Interval: "December",
                revenue: budgetAnalysis.getMonthlyRevenue("December")
            }
            objArray.push(Dec);
            break;
        case "2018":
            let eighteen = {
                time_Interval: "2018",
                revenue: budgetAnalysis.getYearlyRevenue("2018")
            }
            objArray.push(eighteen);
            break;
        case "2019":
            let nineteen = {
                time_Interval: "2019",
                revenue: budgetAnalysis.getMonthlyRevenue("2019")
            }
            objArray.push(nineteen);
            break;
    }
}

let objectsList = "["
for(let obj of objArray){
    objectsList += JSON.stringify(obj) + ",";
}
let JSONObjects = string.substring(0, string.length - 1);
JSONObjects += "]";

var stream = fs.createWriteStream("output.json");
stream.once('open', function(fd){
    stream.write(JSONObjects);
    stream.end();
});

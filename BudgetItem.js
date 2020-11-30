class BudgetItem{
    constructor(a,m,y){
        var __amount__;
        var __month__;
        var __year__;
        this.setAmount = function(amount){
            __amount__ = (amount >= 0) ? amount : 0;
        };
        this.setMonth = function(height){
            __month__ = (month >=1 && month <=12) ? month : 1;
        }
        this.setYear = function(year){
            __year__ = year;
        }
    }
}

module.exports = BudgetItem;
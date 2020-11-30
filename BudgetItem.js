class BudgetItem{
    constructor(a,m,y){
        var __amount__;
        var __month__;
        var __year__;
        this.setAmount = function(amount){
            __amount__ = (amount >= 0) ? amount : 0;
        };
        this.getAmount = function(){
            return __amount__;
        }
        this.setMonth = function(height){
            __month__ = (month >=1 && month <=12) ? month : 1;
        }
        this.getMonth = function(){
            return __month__;
        }
        this.setYear = function(year){
            __year__ = year;
        }
        this.getYear = function(){
            return __year__;
        }

        this.setAmount(a);
        this.setMonth(m);
        this.setYear(y);
    }
}

module.exports = BudgetItem;
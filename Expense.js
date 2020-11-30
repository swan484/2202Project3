const BudgetItem = require('./BudgetItem.js');

class Expense extends BudgetItem{
    constructor(a,m,y,d,s){
        super(a,m,y);
        var __Destination__;
        var __Spender__;

        this.setDest = function(dest){
            __Destination__ = dest;
        }
        this.getDest = function(){
            return __Destination__;
        }
        this.setSpender = function(spender){
            __Spender__ = spender;
        }
        this.getSpender = function(){
            return __Spender__;
        }

        this.setDest(d);
        this.setSpender(s);
    }
}

module.exports = Expense;
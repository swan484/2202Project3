const BudgetItem = require('./BudgetItem.js');

class Expense extends BudgetItem{
    constructor(d,s){
        var __Destination__;
        var __Spender__;

        this.setDest = function(dest){
            __Destination__ = dest;
        }
        this.setSpender = function(spender){
            __Spender__ = spender;
        }
    }
}

module.exports = Expense;
const BudgetItem = require('./BudgetItem.js');

class Income extends BudgetItem{
    constructor(s){
        var __Source__;

        this.setSource = function(src){
            __Source__ = src;
        }
    }
}

module.exports = Income;
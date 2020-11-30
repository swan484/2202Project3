const BudgetItem = require('./BudgetItem.js');

class Income extends BudgetItem{
    constructor(a,m,y,s){
        super(a,m,y);
        var __Source__;

        this.setSource = function(src){
            __Source__ = src;
        }
        this.getSource = function(){
            return __Source__;
        }

        this.setSource(s);
    }
}

module.exports = Income;
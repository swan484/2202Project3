const BudgetItem = require('./BudgetItem.js');
const Expense = require('./Expense.js');
const Income = require('./Income.js');

class BudgetAnalysis{
    constructor(bItems){
        var __BudgetItems__ = new Array();
        __BudgetItems__ = bItems;
    }
    add(bItem){
        __BudgetItems__.push(bItem)
    }
    getMontlyBudgetItems(month){
        
    }

}
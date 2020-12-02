
let BudgetItem = require('./BudgetItem.js');
const Expense = require('./Expense.js');
const Income = require('./Income.js')

class BudgetAnalysis { 
    constructor(budgetItemData){
        let __BudgetItems__ = [];
        let bi;

        this.setBudgetItems = function(bdata){
            for(let b of budgetItemData){
                switch(b.type){
                    case undefined:
                        bi = new BudgetItem(b.amount, b.month, b.year);
                        break;
                    case "Expense":
                        bi = new Expense(b.amount, b.month, b.year, b.destination, b.spender)
                        break;
                    case "Income":
                        bi = new Income(b.amount, b.month, b.year, b.source)
                        break;
                }
                __BudgetItems__.push(bi);
            }
        }
        this.getBudgetItems = function(){
            return __BudgetItems__;
        }

        this.setBudgetItems(bItems);
    }

    add(bItem){
        __BudgetItems__.push(bItem)
    }

    getMontlyBudgetItems(month){
        let monthlyBItems = [];
        let budgetItems = this.getBudgetItems();
        for(let i of budgetItems){
            if(i.month == month){
                monthlyBItems.push(i);
            }
        }
        return monthlyBItems;
    }

    getYearlyBudgetItems(year){
        let yearlyBItems = [];
        let budgetItems = this.getBudgetItems();
        for(let j of budgetItems){
            if(j.year == year){
                yearlyBItems.push(j);
            }
        }
        return yearlyBItems;
    }

    getMonthlyRevenue(month){
        let monthlyBudgetItems = this.getMontlyBudgetItems(month);
        let __net__ = 0;
       
        for(let b of monthlyBudgetItems){
            if(b.type === "expense"){
                __net__ -= Number(b.amount);
            }
            else if(b.type === "income"){
                __net__ += Number(b.amount);
            }
        }
        return __net__;
    }

    getYearlyRevenue(year){
        let yearlyBudgetItems = [];
        let __net__ = 0;
        let budgetItems = this.getBudgetItems();
        for(let q of budgetItems) {
            if(q.year === year) {
                yearlyBudgetItems.push(q);
            }
        }
        for(let z of yearlyBudgetItems){
            if(z.type === "expense"){
                __net__ -= Number(z.amount);
            }
            else if(z.type === "income"){
                __net__ += Number(z.amount);
            }
        }
        return __net__;
    }
}

module.exports = BudgetAnalysis;

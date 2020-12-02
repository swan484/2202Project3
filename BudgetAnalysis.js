
let BudgetItem = require('./BudgetItem.js');
const Expense = require('./Expense.js');
const Income = require('./Income.js')

class BudgetAnalysis { 
    constructor(budgetItemData){
        let __BudgetItems__ = [];
        let bi;

        this.setBudgetItems = function(bdata){
            for(let b of bdata){
                switch(b.type){
                    case undefined:
                        bi = new BudgetItem(b.amount, b.month, b.year);
                        break;
                    case "expense":
                        bi = new Expense(b.amount, b.month, b.year, b.destination, b.spender)
                        break;
                    case "income":
                        bi = new Income(b.amount, b.month, b.year, b.source)
                        break;
                }
                __BudgetItems__.push(bi);
            }
        }
        this.getBudgetItems = function(){
            return __BudgetItems__;
        }

        this.setBudgetItems(budgetItemData);

    }

    add(bItem){
        __BudgetItems__.push(bItem)
    }

    getMontlyBudgetItems(month){
        let monthlyBItems = [];
        let budgetItems = this.getBudgetItems();
        for(let i of budgetItems){
            if(i.getMonth() == month){
                monthlyBItems.push(i);
            }
        }
        return monthlyBItems;
    }

    getYearlyBudgetItems(year){
        let yearlyBItems = [];
        let budgetItems = this.getBudgetItems();
        for(let j of budgetItems){
            if(j.getYear() == year){
                yearlyBItems.push(j);
            }
        }
        return yearlyBItems;
    }

    getMonthlyRevenue(month){
        let monthlyBudgetItems = this.getMontlyBudgetItems(month);
        let net = 0;
       
        for(let b of monthlyBudgetItems){
            if(b.constructor.name === "Expense"){
                net -= Number(b.getAmount());
            }
            else if(b.constructor.name === "Income"){
                net += Number(b.getAmount());
            }
        }
        return net;
    }

    getYearlyRevenue(year){
        let yearlyBudgetItems = this.getYearlyBudgetItems(year)
        let net = 0;
      
        for(let z of yearlyBudgetItems){
            if(z.constructor.name === "Expense"){
                net -= Number(z.getAmount());
            }
            else if(z.constructor.name === "Income"){
                net += Number(z.getAmount());
            }
        }
        return net;
    }
}

module.exports = BudgetAnalysis;

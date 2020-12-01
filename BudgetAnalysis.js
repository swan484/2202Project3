let BudgetItem = require('./BudgetItem.js');

class BudgetAnalysis { 
    constructor(bItems){
        var __BudgetItems__ = [];

        this.setBudgetItems = function(bi){
            let budgetItem = new BudgetItem();
            budgetItem = bItems;
            for(let b of budgetItem){
                __BudgetItems__.push(b);
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
        let budgetItems = new BudgetItem;
        budgetItems = this.getBudgetItems();
        for(let i of budgetItems){
            if(i.month == month){
                monthlyBItems.push(i);
            }
        }
        return monthlyBItems;
    }

    getYearlyBudgetItems(year){
        let yearlyBItems = [];
        let budgetItems = new BudgetItem;
        budgetItems = this.getBudgetItems();
        for(let j of budgetItems){
            if(j.year == year){
                yearlyBItems.push(j);
            }
        }
        return yearlyBItems;
    }

    getMonthlyRevenue(month){
        let monthlyBudgetItems = [];
        let __net__ = 0;
        let budgetItems = this.getBudgetItems();
        for(let a of budgetItems) {
            if(a.month === month) {
                monthlyBudgetItems.push(a);
            }
        }
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

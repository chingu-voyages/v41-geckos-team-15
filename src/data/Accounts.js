import incomes from "./Incomes";
import expenses from './Expenses';

const bankAccounts = [
    {
        id: 1,
        name: "Card",
        totalIncomes: (1200).toFixed(2),
        incomes: [],
        totalExpenses: 0,
        expenses: [],
        currency: "$",
        color: "var(--default-card-gradient-one)",
        totalBalance: 0,
    },
    {
        id: 2,
        name: "Savings",
        totalIncomes: (10000).toFixed(2),
        incomes: [],
        totalExpenses: 0,
        expenses: [],
        currency: "$",
        color: "var(--default-card-gradient-two)",
        totalBalance: 0,
    }
]
const countSum = () => {
    incomes.map(income => {
        bankAccounts.map(acc => {
            if (income.bankAccount === acc.name) {
                acc.incomes.push(Number(income.amount));
                acc.totalIncomes = acc.incomes.reduce((a, v) => a = a + v, 0);
            }
            return acc;
        })
        return income;
    })

}

const countExpense = () => {
    expenses.map(expense => {
        bankAccounts.map(acc => {
            if (expense.bankAccount === acc.name) {
                acc.expenses.push(Number(expense.amount));
                acc.totalExpenses = acc.expenses.reduce((a, v) => a = a + v, 0);
            }
            return acc;
        })
        return expense;
    })
}

const countTotals = () => {
    bankAccounts.map(acc => {
        return acc.totalBalance = acc.totalIncomes - acc.totalExpenses;
    })
}


countSum();
countExpense();
countTotals();



export default bankAccounts;
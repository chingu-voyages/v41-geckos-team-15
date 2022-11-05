import expenses from "../data/Expenses";
import incomes from "../data/Incomes"


const monthExpenses = (month) => {
    return (
        expenses.reduce((sum, current) => {
            let date = new Date(current.created)
            if (date.getMonth() + 1 === month) {
                return sum + Number(current.amount);
            }
            return sum;
        }, 0)
    )
}

const monthIncome = (month) => {
    return (
        incomes.reduce((sum, current) => {
            let date = new Date(current.created)
            if (date.getMonth() + 1 === month) {
                return sum + Number(current.amount);
            }
            return sum;
        }, 0)
    )
}

export { monthExpenses, monthIncome };


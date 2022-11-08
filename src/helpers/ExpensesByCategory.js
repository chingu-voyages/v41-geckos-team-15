import expenses from "../data/Expenses.js";
import incomes from "../data/Incomes.js"
import categories from "../data/Categories.js"

const categoryExpenses = (category) => {
    return (
        expenses.reduce((sum, current) => {
            if (current.category === category) {
                return sum + Number(current.amount);
            }
            return sum;
        }, 0)
    )
}

const categoryTransactions = (category) => {
    return (
        incomes.reduce((sum, current) => {
            if (current.category === category) {
                return sum + Number(current.amount);
            }
            return sum;
        }, categoryExpenses(category))
    )
}

const allCategoriesExpenses = () => {
    return (

        categories.map(c => {
            return (
                { name: c.name, value: categoryExpenses(c.name) }
            )
        })
    )
}

export { allCategoriesExpenses, categoryExpenses, categoryTransactions }
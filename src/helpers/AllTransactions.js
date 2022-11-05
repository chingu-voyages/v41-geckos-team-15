import { monthExpenses, monthIncome } from './TransactionsByMonth';

const allTransactions = () => {
    return (
        [
            {
                label: 'Jan',
                type: 'Expenses',
                value: monthExpenses(1),
            },
            {
                label: 'Jan',
                type: 'Income',
                value: monthIncome(1),
            },
            {
                label: 'Feb',
                type: 'Expenses',
                value: monthExpenses(2),
            },
            {
                label: 'Feb',
                type: 'Income',
                value: monthIncome(2),
            },
            {
                label: 'Mar',
                type: 'Expenses',
                value: monthExpenses(3),
            },
            {
                label: 'Mar',
                type: 'Income',
                value: monthIncome(3),
            },
            {
                label: 'Apr',
                type: 'Expenses',
                value: monthExpenses(4),
            },
            {
                label: 'Apr',
                type: 'Income',
                value: monthIncome(4),
            },
            {
                label: 'May',
                type: 'Expenses',
                value: monthExpenses(5),
            },
            {
                label: 'May',
                type: 'Income',
                value: monthIncome(5),
            },
            {
                label: 'Jun',
                type: 'Expenses',
                value: monthExpenses(6),
            },
            {
                label: 'Jun',
                type: 'Income',
                value: monthIncome(6),
            },
            {
                label: 'Jul',
                type: 'Expenses',
                value: monthExpenses(7),
            },
            {
                label: 'Jul',
                type: 'Income',
                value: monthIncome(7),
            },
            {
                label: 'Aug',
                type: 'Expenses',
                value: monthExpenses(8),
            },
            {
                label: 'Aug',
                type: 'Income',
                value: monthIncome(8),
            },
            {
                label: 'Sep',
                type: 'Expenses',
                value: monthExpenses(9),
            },
            {
                label: 'Sep',
                type: 'Income',
                value: monthIncome(9),
            },
            {
                label: 'Oct',
                type: 'Expenses',
                value: monthExpenses(10),
            },
            {
                label: 'Oct',
                type: 'Income',
                value: monthIncome(10),
            },
            {
                label: 'Nov',
                type: 'Expenses',
                value: monthExpenses(11),
            },
            {
                label: 'Nov',
                type: 'Income',
                value: monthIncome(11),
            },
            {
                label: 'Dec',
                type: 'Expenses',
                value: monthExpenses(12),
            },
            {
                label: 'Dec',
                type: 'Income',
                value: monthIncome(12),
            },
        ]
    )
}

const allExpenses = () => {
    return (
        allTransactions().filter(e => { return e.type === "Expenses" })
    )
}

const allIncome = () => {
    return (
        allTransactions().filter(e => { return e.type === "Income" })
    )
}


export { allTransactions, allExpenses, allIncome }
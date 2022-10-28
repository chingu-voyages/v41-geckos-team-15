import expenses from "../../data/Expenses";

const ExpensesTable = (props) => {
    return (
        <table className="greyGridTable">
            <thead>
                <tr>
                    <th>Expense name</th>
                    <th>Category</th>
                    <th>Created</th>
                    <th>Amount</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) =>
                    <tr key={expense.id}>
                        <td> <img src={expense.cover} alt="" />{expense.name}</td>
                        <td>{expense.category}</td>
                        <td>{expense.created}</td>
                        <td className="expense-amount">-{expense.amount}{expense.currency}</td>
                        <td onClick={() => {
                            props.toggleExistingRecords();
                            props.getRecordInfo(expense.name, expense.category, expense.amount, expense.currency, expense.created, expense.note);
                        }}>...</td>
                    </tr>)}
            </tbody>
        </table >
    )
}


export default ExpensesTable;
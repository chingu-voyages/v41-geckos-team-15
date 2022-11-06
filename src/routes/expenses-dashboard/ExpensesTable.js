import React from "react";
import expenses from "../../data/Expenses";
import ExpensesPagination from "../accounts-dashboard/ExpensesPagination";

const ExpensesTable = (props) => {
    return (
        <React.Fragment>
            {expenses.length === 0 ? <p className="no-records-found">No records found</p> :
                <section className="tables">
                    <table className="greyGridTable">
                        <thead>
                            <tr>
                                <th scope="col">Expense name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Created</th>
                                <th scope="col">Amount</th>
                                <th scope="col">More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) =>
                                <tr key={expense.id}>
                                    <td data-label="Expense name"><span><img src={expense.cover} alt="" />{expense.name}</span></td>
                                    <td data-label="Category">{expense.category}</td>
                                    <td data-label="Created">{expense.created}</td>
                                    <td data-label="Amount" className="expense-amount">-{expense.amount}{expense.currency}</td>
                                    <td data-label="More" onClick={() => {
                                        props.toggleExistingRecords();
                                        props.getRecordInfo(expense);

                                    }}>...</td>
                                </tr>)}
                        </tbody>
                    </table>
                    <ExpensesPagination />
                </section>}
        </React.Fragment >
    )
}


export default ExpensesTable;
import React from "react";
import expenses from "../../data/Expenses";
import ExpensesPagination from "../accounts-dashboard/ExpensesPagination";

const ExpensesTable = (props) => {
    console.log(expenses.length)
    return (
        <React.Fragment>
            {
                expenses.length === 0 ? <p className="no-records-found">No records found</p> :
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
                                            //set an object instead of proprites and de-structred it only when needed inside a method or compnent 
                                            props.getRecordInfo(expense.id, expense.type, expense.name, expense.category, expense.amount, expense.currency, expense.created, expense.note);

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

import CloseExpenseModal from "./CloseExpenseModal";
import categories from '../../data/Categories.js'
import { useEffect } from 'react';
import bankAccounts from "../../data/Accounts";

const ExpenseModal = (props) => {
    useEffect(() => {
        props.identifyRecord(1, 'expense');
    }, [props]);
    return (
        <article className="add-expense-modal">
            <section className="add-expense-popup">
                <CloseExpenseModal closeModal={props.closeModal} resetForm={props.resetForm} />
                <h2>New Expense</h2>
                {props.submit && Object.keys(props.formError).length === 0 ? <p>Successfully added expense! 💸</p> :
                    <form onSubmit={props.addExpense}>
                        <input onChange={props.handleValidation} value={props.formValue.name} name="name" type="text" placeholder="Expense name" />
                        {props.formError.name ? <span className="modal-input-err">{props.formError.name}</span> : null}
                        <input onChange={props.handleValidation} value={props.formValue.amount} name="amount" type="text" placeholder="Amount" />
                        {props.formError.amount ? <span className="modal-input-err">{props.formError.amount}</span> : null}
                        <select onChange={props.handleValidation} value={props.formValue.category} name="category">
                            <option defaultChecked>Select category</option>
                            {categories.map((category) => <option key={category.id} >{category.name}</option>)}
                        </select>
                        <select onChange={props.handleValidation} value={props.formValue.bankAccount} name="bankAccount">
                            <option defaultChecked>Select bank account</option>
                            {bankAccounts.map((account, index) => <option key={index} >{account.name}</option>)}
                        </select>
                        {props.formError.category ? <span className="modal-input-err">{props.formError.category}</span> : null}
                        <input onChange={props.handleValidation} value={props.formValue.created} name="created" type="date" id="date" />
                        {props.formError.created ? <span className="modal-input-err">{props.formError.created}</span> : null}
                        <textarea onChange={props.handleValidation} value={props.formValue.note} name="note" type="textarea" placeholder="Note" rows="5" />
                        <button className="dash-button" type="submit">Add</button>
                    </form>}
            </section>
        </article>
    )
}

export default ExpenseModal;
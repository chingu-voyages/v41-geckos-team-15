
import CloseExpenseModal from "../expenses-dashboard/CloseExpenseModal";
import categories from '../../data/Categories.js';

const MainIncomeModal = (props) => {
    return (
        <article className="add-income-modal-main">
            <section className="add-income-popup-main">
                <CloseExpenseModal closeModal={props.closeModal} />
                <h2>New Income</h2>
                <form onSubmit={props.addIncome}>
                    <input onChange={props.handleValidation} value={props.formValue.name} name="name" type="text" placeholder="Income name" />
                    <input onChange={props.handleValidation} value={props.formValue.amount} name="amount" type="text" placeholder="Amount" />
                    <select onChange={props.handleValidation} value={props.formValue.category} name="category">
                        <option defaultChecked>Select category</option>
                        {categories.map((category) => <option key={category.id} >{category.name}</option>)}
                    </select>
                    <input onChange={props.handleValidation} value={props.formValue.created} name="created" type="date" id="date" />
                    <textarea onChange={props.handleValidation} value={props.formValue.note} name="note" type="textarea" placeholder="Note" rows="5" />
                    <button type="submit">Add</button>
                </form>
            </section>
        </article>
    )
}

export default MainIncomeModal;

import CloseExpenseModal from "../expenses-dashboard/CloseExpenseModal";
import categories from '../../data/Categories.js'

const MainExpenseModal = (props) => {
    return (
        <article className="add-expense-modal">
            <section className="add-expense-popup">
                <CloseExpenseModal closeModal={props.closeModal} />
                <h2>New Expense</h2>
                <form>
                    <input type="text" placeholder="Expense name" />
                    <input type="text" placeholder="Amount" />
                    <select>
                        <option defaultChecked>Select category</option>
                        {categories.map((category) => <option>{category.name}</option>)}
                    </select>
                    <input type="date" id="date" name="date" />
                    <textarea type="textarea" placeholder="Note" rows="5" />
                    <button>Add</button>
                </form>
            </section>
        </article>
    )
}

export default MainExpenseModal;
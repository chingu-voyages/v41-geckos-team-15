
import CloseExpenseModal from "./CloseExpenseModal";
import categories from '../../data/Categories.js';

const IncomeModal = (props) => {
    return (
        <article className="add-income-modal">
            <section className="add-income-popup">
                <CloseExpenseModal closeModal={props.closeModal} />
                <h2>New Income</h2>
                <form>
                    <input type="text" placeholder="Income name" />
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

export default IncomeModal;
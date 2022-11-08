import categories from "../../data/Categories";
import PlusIcon from "../../assets/images/accounts-dashboard/plus-icon.png"
import { categoryTransactions } from '../../helpers/ExpensesByCategory';

const AccountsCategories = (props) => {
    return (
        <article className="accounts-categories">
            <div className="acc-header">
                <h1 >Categories</h1>
            </div>
            <section className="categories">
                <button className="empty-category" onClick={props.toggleCategoryModal}>
                    <img src={PlusIcon} alt="Add category icon" />
                </button>

                {categories.map(category =>
                    <section className="categories-card" key={category.id} onClick={(e) => props.toggleExistingCategoryModal(category)}>
                        <h3>{category.name}</h3>
                        <img src={category.cover} alt="Add card icon" />
                        <p>{categoryTransactions(category.name)} $</p>
                    </section>
                )}
            </section>
        </article>
    )
}

export default AccountsCategories;
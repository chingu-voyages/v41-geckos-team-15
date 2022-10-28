import categories from "../../data/Categories";
import PlusIcon from "../../assets/images/accounts-dashboard/plus-icon.png"
const AccountsCategories = (props) => {
    return (
        <article className="accounts-categories">
            <h2>Categories</h2>
            <section className="categories">
                <button className="empty-category" onClick={props.toggleCategoryModal}>
                    <img src={PlusIcon} alt="Add category icon" />
                </button>

                {categories.map(category =>
                    <section className="categories-card" key={category.id} onClick={(e) => props.toggleExistingCategoryModal(category.name, category.description, e)}>
                        <h3>{category.name}</h3>
                        <img src={category.cover} alt="Add card icon" />
                        <p>0 USD</p>
                    </section>
                )}
            </section>
        </article>
    )
}

export default AccountsCategories;
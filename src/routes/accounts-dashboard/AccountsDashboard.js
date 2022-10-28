import "./accountsDashboard.css"
import bankAccounts from "../../data/Accounts";
import categories from "../../data/Categories";
import CardIcon from "../../assets/images/accounts-dashboard/card-icon.png";
import EditIcon from "../../assets/images/accounts-dashboard/edit-icon.png";
import PlusIcon from "../../assets/images/accounts-dashboard/plus-icon.png"
import { useState } from "react";
import AddCardModal from "./AddCardModal";
import AddCategoryModal from "./AddCategoryModal";
import ExistingCategoryModal from "./ExistingCategoryModal";

const AccountsDashboard = () => {
    const [toggleAddToCard, setToggleAddToCard] = useState(false);
    const [toggleAddCategory, setToggleAddCategory] = useState(false);
    const [toggleExistingCategory, setExistingCategory] = useState(false);
    const [categoryInfo, setCategoryInfo] = useState([{ name: "", description: "" }]);

    const toggleCardModal = () => {
        setToggleAddToCard(true);
    }
    const toggleCategoryModal = () => {
        setToggleAddCategory(true);
    }
    const toggleExistingCategoryModal = (categoryName, categoryDescription) => {
        setCategoryInfo({ name: categoryName, description: categoryDescription })
        setExistingCategory(true);

    }
    return (
        <main className="accounts-dashboard">
            <article className="accounts-and-cards">
                <h2>Accounts & Cards</h2>
                <section className="accounts">
                    {bankAccounts.map(account =>
                        <section className="account-card" key={account.id}>
                            <section className="account-header">
                                <section>
                                    <img src={CardIcon} alt="Card icon" />
                                    <h3>{account.name}</h3>
                                </section>
                                <img src={EditIcon} alt="Edit card icon" />
                            </section>
                            <section className="account-current-balance">
                                <h3 >{account.currentBalance} {account.dollarCurrency}</h3>
                            </section>

                        </section>
                    )}
                    <button onClick={toggleCardModal} className="empty-card">
                        <img src={PlusIcon} alt="Add card icon" />
                    </button>

                </section>
            </article>
            <article className="accounts-categories">
                <h2>Categories</h2>
                <section className="categories">
                    <button className="empty-category" onClick={toggleCategoryModal}>
                        <img src={PlusIcon} alt="Add category icon" />
                    </button>
                    {categories.map(category =>
                        <section className="categories-card" key={category.id} onClick={(e) => toggleExistingCategoryModal(category.name, category.description, e)}>
                            <h3>{category.name}</h3>
                            <img src={category.cover} alt="Add card icon" />
                            <p>0 USD</p>
                        </section>
                    )}
                </section>
            </article>
            {toggleAddToCard ?
                <AddCardModal /> : null}
            {toggleAddCategory ?
                <AddCategoryModal /> : null}
            {toggleExistingCategory ?
                <ExistingCategoryModal categoryInfo={categoryInfo} /> : null}

        </main>
    )
}

export default AccountsDashboard;
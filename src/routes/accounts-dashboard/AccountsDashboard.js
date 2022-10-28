import "./accountsDashboard.css"
import { useState } from "react";
import AddCardModal from "./AddCardModal";
import AddCategoryModal from "./AddCategoryModal";
import ExistingCategoryModal from "./ExistingCategoryModal";
import BankAccounts from "./BankAccounts";
import AccountsCategories from "./AccountsCategories";

const AccountsDashboard = () => {
    const [toggleAddToCard, setToggleAddToCard] = useState(false);
    const [toggleAddCategory, setToggleAddCategory] = useState(false);
    const [toggleExistingCategory, setExistingCategory] = useState(false);
    const [categoryInfo, setCategoryInfo] = useState([{ name: "", description: "" }]);

    const closeModal = () => {
        setToggleAddToCard(false);
        setToggleAddCategory(false);
        setExistingCategory(false);
    }

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
        <main className="accounts-dashboard" >
            <BankAccounts toggleCardModal={toggleCardModal} />
            <AccountsCategories toggleCategoryModal={toggleCategoryModal} toggleExistingCategoryModal={toggleExistingCategoryModal} />
            {toggleAddToCard ?
                <AddCardModal closeModal={closeModal} /> : null}
            {toggleAddCategory ?
                <AddCategoryModal closeModal={closeModal} /> : null}
            {toggleExistingCategory ?
                <ExistingCategoryModal closeModal={closeModal} categoryInfo={categoryInfo} /> : null}

        </main>
    )
}

export default AccountsDashboard;
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
    const [categoryInfo, setCategoryInfo] = useState({});
    const [cardInfo, setCardInfo] = useState({});

    const closeModal = () => {
        setToggleAddToCard(false);
        setToggleAddCategory(false);
        setExistingCategory(false);
    }
    const toggleCardModal = (props) => {
        setCardInfo(props.account)
        setToggleAddToCard(true);
    }
    const toggleCategoryModal = () => {
        setToggleAddCategory(true);
    }
    const toggleExistingCategoryModal = (category) => {
        setCategoryInfo(category)
        setExistingCategory(true);
    }
    return (
        <main className="accounts-dashboard" >
            <BankAccounts toggleCardModal={toggleCardModal} />
            <AccountsCategories toggleCategoryModal={toggleCategoryModal} toggleExistingCategoryModal={toggleExistingCategoryModal} />
            {toggleAddToCard ?
                <AddCardModal closeModal={closeModal} cardInfo={cardInfo} /> : null}
            {toggleAddCategory ?
                <AddCategoryModal closeModal={closeModal} /> : null}
            {toggleExistingCategory ?
                <ExistingCategoryModal closeModal={closeModal} categoryInfo={categoryInfo} /> : null}
        </main>
    )
}

export default AccountsDashboard;
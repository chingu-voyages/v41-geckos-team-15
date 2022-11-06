import "./mainDashboard.css"
import MonthlyExpenses from "./MonthlyExpenses";
import AddButtons from "./AddButtons";
import BudgetStatus from "./BudgetStatus";
import PopularCategories from "./PopularCategories";
import { useState } from "react";
import AddCardModal from "../accounts-dashboard/AddCardModal"
import AddCategoryModal from "../accounts-dashboard/AddCategoryModal"
import ExpenseModal from "../expenses-dashboard/ExpenseModal"
import IncomeModal from "../expenses-dashboard/IncomeModal"


const MainDashboard = ({ identifyRecord, submit, formError, user, resetForm, addIncome, addExpense, handleValidation, formValue }) => {
    const [toggleAddExpense, setToggleAddToExpense] = useState(false);
    const [toggleAddIncome, setToggleAddToIncome] = useState(false);
    const [toggleAddToCard, setToggleAddToCard] = useState(false);
    const [toggleAddCategory, setToggleAddCategory] = useState(false);

    const closeModal = () => {
        setToggleAddToExpense(false);
        setToggleAddToIncome(false);
        setToggleAddToCard(false);
        setToggleAddCategory(false);
    }
    const toggleExpenseModal = () => {
        setToggleAddToExpense(true);
    }
    const toggleIncomeModal = () => {
        setToggleAddToIncome(true);
    }
    const toggleCardModal = () => {
        setToggleAddToCard(true);
    }
    const toggleCategoryModal = () => {
        setToggleAddCategory(true);
    }
    return (
        <div className="mainDashboard">
            <div className="header">
                <h1>Hello {user},</h1>
                <p>Take a look at your current balance 👀</p>
            </div>
            <div className="sections">
                <AddButtons toggleIncomeModal={toggleIncomeModal} toggleExpenseModal={toggleExpenseModal} toggleCardModal={toggleCardModal} toggleCategoryModal={toggleCategoryModal} />
                <BudgetStatus />
                <PopularCategories />
                <MonthlyExpenses />
            </div>
            {toggleAddIncome ? <IncomeModal identifyRecord={identifyRecord} formError={formError} resetForm={resetForm} closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addIncome={addIncome} submit={submit} /> : null}
            {toggleAddExpense ? <ExpenseModal identifyRecord={identifyRecord} formError={formError} resetForm={resetForm} closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addExpense={addExpense} submit={submit} /> : null}
            {toggleAddToCard ?
                <AddCardModal closeModal={closeModal} /> : null}
            {toggleAddCategory ?
                <AddCategoryModal closeModal={closeModal} /> : null}
        </div>
    )
}

export default MainDashboard;

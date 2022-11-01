import "./mainDashboard.css"
import MonthlyExpenses from "./MonthlyExpenses";
import AddButtons from "./AddButtons";
import BudgetStatus from "./BudgetStatus";
import PopularCategories from "./PopularCategories";
import MainIncomeModal from "./MainIncomeModal";
import { useState } from "react";
import MainExpenseModal from "./MainExpenseModal";


const MainDashboard = ({ submit, user, addIncome, handleValidation, formValue }) => {
    const [toggleAddExpense, setToggleAddToExpense] = useState(false);
    const [toggleAddIncome, setToggleAddToIncome] = useState(false);

    const closeModal = () => {
        setToggleAddToExpense(false);
        setToggleAddToIncome(false);
    }
    const toggleExpenseModal = () => {
        setToggleAddToExpense(true);
    }
    const toggleIncomeModal = () => {
        setToggleAddToIncome(true);
    }
    return (
        <div className="mainDashboard">
            <div className="header">
                <h1>Hello {user},</h1>
                <p>Take a look at your current balance 👀</p>
            </div>

            <div className="sections">
                <AddButtons toggleIncomeModal={toggleIncomeModal} toggleExpenseModal={toggleExpenseModal} />
                <BudgetStatus />
                <PopularCategories />
                <MonthlyExpenses />
            </div>
            {toggleAddIncome ? <MainIncomeModal closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addIncome={addIncome} submit={submit} /> : null}
            {toggleAddExpense ? <MainExpenseModal closeModal={closeModal} /> : null}
        </div>
    )
}

export default MainDashboard;

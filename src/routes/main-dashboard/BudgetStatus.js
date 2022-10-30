import React from 'react'
import "./mainDashboard.css"
import ProgressBar from "./charts/progressbar/ProgressBar";
import { Link } from "react-router-dom";
import expensesByMonth from '../../data/ExpensesByMonth';

const BudgetStatus = () => {

    //get current month
    const currentMonth = new Date().toLocaleString('en-US', { month: 'short' });

    //get total expenses & income for current month
    const expenses = expensesByMonth.find(e => { return e.label === currentMonth && e.type === "Expenses" });
    const income = expensesByMonth.find(e => { return e.label === currentMonth && e.type === "Income" });

    return (
        <div className="budget-status card">
            <div className="card-content">
                Budget status
                <div>
                    <span className="bar-title">Income </span>
                    <span className="amount">{income.value}$</span>
                    <ProgressBar done={income.value / 100} />
                </div>
                <div>
                    <span className="bar-title">Expenses</span>
                    <span className="amount">{expenses.value}$</span>
                    <ProgressBar done={expenses.value / 100} />
                </div>

                <Link to="">See all transactions &#62; </Link>
            </div>
        </div>
    )
}

export default BudgetStatus
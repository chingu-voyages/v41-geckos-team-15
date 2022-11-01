import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardNavigation from "../../components/dashboard-navigation/DashboardNavigation";
import ProfileDashboard from "../profile-dashboard/ProfileDashboard";
import StatisticsDashboard from "../statistics-dashboard/StatiscticsDashboard";
import ExpensesDashboard from "../expenses-dashboard/ExpensesDashboard";
import BudgetDashboard from "../budget-dashboard/BudgetDashboard";
import AccountsDashboard from "../accounts-dashboard/AccountsDashboard";
import MainDashboard from "../main-dashboard/MainDashboard";
import "./dashboard.css";
import incomes from "../../data/Incomes";
import expenses from "../../data/Expenses";
import { useState } from "react";

const Dashboard = (props) => {
    const [formValue, setFormValue] = useState({ id: "", name: '', amount: '', category: "", created: '', note: '' });
    const [submit, setSubmit] = useState(false);
    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, id: incomes.length + 1, [name]: value });
    }
    const addIncome = (e) => {
        e.preventDefault();
        setSubmit(true);
        incomes.push(formValue);
        // console.log(incomes)
    }
    const addExpense = (e) => {
        e.preventDefault();
        setSubmit(true);
        expenses.push(formValue);
        console.log(expenses)
    }
    return (
        <div className="dashboard">
            {props.user
                ? <div>
                    <DashboardNavigation logout={props.onLogout} />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<MainDashboard user={props.user} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
                            <Route path="expenses" element={<ExpensesDashboard addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
                            <Route path="accounts" element={<AccountsDashboard />} />
                            <Route path="statistics" element={<StatisticsDashboard />} />
                            <Route path="budget" element={<BudgetDashboard />} />
                            <Route path="profile" element={<ProfileDashboard />} />
                        </Routes>
                    </div>
                </div>

                : <div>
                    You need to Login or Register
                </div>
            }
        </div>
    )
}

export default Dashboard;
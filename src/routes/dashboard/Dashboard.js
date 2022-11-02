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
    const [formError, setFormError] = useState({});

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, id: incomes.length + 1, [name]: value });
    }
    const addIncome = (e) => {
        e.preventDefault();
        setFormError(validateForm(formValue));
        incomes.push(formValue);
        setSubmit(true);
        if (!formError && Object.keys(props.formError).length === 0) {
            setFormValue({ id: "", name: '', amount: '', category: "", created: '', note: '' });
        }
    }
    const addExpense = (e) => {
        e.preventDefault();
        setFormError(validateForm(formValue))
        setSubmit(true);
        expenses.push(formValue);
        if (!formError && Object.keys(props.formError).length === 0) {
            setFormValue({ id: "", name: '', amount: '', category: "", created: '', note: '' });
        }
    }
    const resetForm = () => {
        setSubmit(false);
        setFormValue({ id: "", name: '', amount: '', category: "", created: '', note: '' });
        setFormError({});
    }

    const validateForm = (value) => {
        let errors = {};
        if (!value.name) {
            errors.name = "Please enter name";
        }
        if (!value.amount) {
            errors.amount = "Please enter amount";
        }
        else if (isNaN(value.amount)) {
            errors.amount = "Please enter a valid amount in numbers";
        }
        if (!value.category) {
            errors.category = "Please enter category";
        }
        if (!value.created) {
            errors.created = "Please enter date";
        }
        return errors;
    }
    return (
        <div className="dashboard">
            {props.user
                ? <div>
                    <DashboardNavigation logout={props.onLogout} resetForm={resetForm} />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<MainDashboard formError={formError} resetForm={resetForm} user={props.user} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
                            <Route path="expenses" element={<ExpensesDashboard formError={formError} resetForm={resetForm} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
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
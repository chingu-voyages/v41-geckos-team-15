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
import { useState, useEffect } from "react";


const Dashboard = (props) => {
    const [formValue, setFormValue] = useState({ id: "", name: '', amount: '', category: "", created: '', note: '' });
    const [editFormValue, setEditFormValue] = useState({ id: "", name: '', amount: '', category: "", created: '', note: '' });
    const [submit, setSubmit] = useState(false);
    const [formError, setFormError] = useState({});
    const [targetRecord, setTargetRecord] = useState(0);
    const [targetRecordIndex, setTargetRecordIndex] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [expenseTable, setExpenseTable] = useState(true);
    const [toggleAddExpense, setToggleAddToExpense] = useState(false);
    const [toggleAddIncome, setToggleAddToIncome] = useState(false);
    const [toggleExistingExpenseIncome, setExistingExpenseIncome] = useState(false);
    const [recordInfo, setRecordInfo] = useState([{ id: "", name: '', category: '', amount: '', currency: '', date: '', note: '' }]);

    useEffect(() => {
        identifyRecord();
    }, []);

    const identifyRecord = (id) => {
        expenses.map((expense) => {
            if (expense.id === id) {
                console.log(id)
                setTargetRecord(expense.id);
                setTargetRecordIndex(expenses.indexOf(expense));
            }
        })
    }

    const closeModal = () => {
        setToggleAddToExpense(false);
        setToggleAddToIncome(false);
        setExistingExpenseIncome(false);
    }

    const setExpenseTab = () => {
        setExpenseTable(true);
    }
    const setIncomeTab = () => {
        setExpenseTable(false);
    }
    const toggleExpenseModal = () => {
        setToggleAddToExpense(true);
    }
    const toggleIncomeModal = () => {
        setToggleAddToIncome(true);
    }
    const toggleExistingRecords = () => {
        setExistingExpenseIncome(true);
    }
    const getRecordInfo = (id, name, category, amount, currency, date, note) => {
        setRecordInfo({ id: id, name: name, category: category, amount: amount, currency: currency, date: date, note: note });
    }


    // * FORMS

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
        setEditFormValue({ id: "", name: '', amount: '', category: "", created: '', note: '' });
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

    ////////////// * Edit Exisitng Expense
    const editExpenseRecord = () => {
        setEditMode(true);
    }
    const cancelEditExpenseRecord = () => {
        setEditMode(false);
    }
    const deleteExistingRecord = () => {
        expenses.splice(targetRecordIndex, 1);
        resetForm();
        closeModal();

    }
    const handleEditValidation = (e) => {
        const { name, value } = e.target;
        setEditFormValue({ ...editFormValue, [name]: value });
    }

    const updateAddedExpense = (e) => {
        e.preventDefault();
        expenses.map(expense => {
            if (targetRecord === expense.id) {
                if (editFormValue.name.length > 0) {
                    expense.name = editFormValue.name;
                }
                if (editFormValue.amount.length > 0) {
                    expense.amount = editFormValue.amount;
                }
                if (expense.category !== editFormValue.category) {
                    expense.category = editFormValue.category;
                }
                if (expense.created !== editFormValue.created) {
                    expense.created = editFormValue.created;
                }
            }

        })
    }

    const validateEditForm = (value) => {
        console.log(value)
        // let errors = {};
        // if (isNaN(value.amount)) {
        //     errors.amount = "Please enter a valid amount in numbers";
        // }
        // return errors;
    }






    return (
        <div className="dashboard">
            {props.user
                ? <div>
                    <DashboardNavigation logout={props.onLogout} resetForm={resetForm} />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<MainDashboard formError={formError} resetForm={resetForm} user={props.user} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
                            <Route path="expenses" element={<ExpensesDashboard recordInfo={recordInfo} closeModal={closeModal} toggleExistingExpenseIncome={toggleExistingExpenseIncome} toggleAddExpense={toggleAddExpense} toggleAddIncome={toggleAddIncome} setIncomeTab={setIncomeTab} getRecordInfo={getRecordInfo} toggleExistingRecords={toggleExistingRecords} expenseTable={expenseTable} setExpenseTab={setExpenseTab} toggleExpenseModal={toggleExpenseModal} toggleIncomeModal={toggleIncomeModal} deleteExistingRecord={deleteExistingRecord} cancelEditExpenseRecord={cancelEditExpenseRecord} handleEditValidation={handleEditValidation} editFormValue={editFormValue} validateEditForm={validateEditForm} updateAddedExpense={updateAddedExpense} editMode={editMode} editExpenseRecord={editExpenseRecord} identifyRecord={identifyRecord} formError={formError} resetForm={resetForm} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
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
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
import bankAccounts from "../../data/Accounts";


const Dashboard = (props) => {
    const [formValue, setFormValue] = useState({ id: "", type: '', name: '', amount: '', currency: "$", category: "", bankAccount: "", created: '', note: '' });
    const [editFormValue, setEditFormValue] = useState({ id: "", type: '', name: '', amount: '', currency: "$", category: "", bankAccount: "", created: '', note: '' });
    const [submit, setSubmit] = useState(false);
    const [formError, setFormError] = useState({});
    const [editFormError, setEditFormError] = useState({});
    const [targetRecord, setTargetRecord] = useState(0);
    const [targetRecordIndex, setTargetRecordIndex] = useState(0);
    const [targetRecordType, setTargetRecordType] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [expenseTable, setExpenseTable] = useState(true);
    const [toggleAddExpense, setToggleAddToExpense] = useState(false);
    const [toggleAddIncome, setToggleAddToIncome] = useState(false);
    const [toggleExistingExpenseIncome, setExistingExpenseIncome] = useState(false);
    const [recordInfo, setRecordInfo] = useState([{ id: "", type: '', name: '', category: '', amount: '', bankAccount: "", currency: '', date: '', note: '' }]);


    // CONNECT EXPENSES/INCOMES WITH CARD
    // ! I tried to create state and save them to states so the components updates if I add anything new
    const [allIncomes, setAllIncomes] = useState([...incomes]);
    const [allExpenses, setAllExpenses] = useState([...expenses]);
    const [totalIncomes, setTotalIncomes] = useState(0);

    const identifyRecord = (id, type) => {
        if (type === 'expense') {
            allExpenses.map((expense) => {
                if (expense.id === id) {
                    setTargetRecord(expense.id);
                    setTargetRecordIndex(allExpenses.indexOf(expense));
                    setTargetRecordType(expense.type);
                }
                return expense;
            })
        }
        if (type === 'income') {
            allIncomes.map((income) => {
                if (income.id === id) {
                    setTargetRecord(income.id);
                    setTargetRecordIndex(allIncomes.indexOf(income));
                    setTargetRecordType(income.type);
                }
                return income;
            })
        }


    }

    const closeModal = () => {
        setToggleAddToExpense(false);
        setToggleAddToIncome(false);
        setExistingExpenseIncome(false);
        setEditMode(false);
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
    const getRecordInfo = ({ id, type, name, category, bankAccount, amount, currency, date, note }) => {
        identifyRecord(id, type);
        setRecordInfo({ id: id, type: type, name: name, category: category, bankAccount: bankAccount, amount: amount, currency: currency, date: date, note: note });
    }


    // * FORMS

    const handleValidation = (e) => {
        const { name, value } = e.target;

        if (targetRecordType === 'expense') {
            setFormValue({ ...formValue, id: allExpenses.length + 1, type: "expense", currency: "$", [name]: value });

        }
        if (targetRecordType === 'income') {

            setFormValue({ ...formValue, id: allIncomes.length + 1, type: "income", currency: "$", [name]: value });
        }
    }
    const addIncome = (e) => {
        e.preventDefault();
        setFormError(validateForm(formValue));
        setAllIncomes([...allIncomes, formValue]);
        setSubmit(true);
        if (!formError && Object.keys(props.formError).length === 0) {

            setFormValue({ id: "", type: '', name: '', amount: '', currency: "$", category: "", bankAccount: "", created: '', note: '' });
            resetForm();
        }

    }
    const addExpense = (e) => {
        e.preventDefault();
        setFormError(validateForm(formValue))
        setSubmit(true);
        setAllExpenses([...allExpenses, formValue]);
        if (!formError && Object.keys(props.formError).length === 0) {
            setFormValue({ id: "", type: '', name: '', amount: '', currency: "$", category: "", bankAccount: "", created: '', note: '' });

        }

    }
    const resetForm = () => {
        setSubmit(false);
        setFormValue({ id: "", type: '', name: '', amount: '', category: "", bankAccount: "", created: '', note: '' });
        setEditFormValue({ id: "", type: '', name: '', amount: '', category: "", bankAccount: "", created: '', note: '' });
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
        if (!value.bankAccount) {
            errors.bankAccount = "Please enter account name";
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
        if (targetRecordType === 'expense') {
            allExpenses.splice(targetRecordIndex, 1);

        }
        if (targetRecordType === 'income') {
            allIncomes.splice(targetRecordIndex, 1);
        }
        resetForm();
        closeModal();

    }
    const handleEditValidation = (e) => {
        const { name, value } = e.target;
        setEditFormValue({ ...editFormValue, [name]: value });
    }

    const updateAddedExpense = (e) => {
        e.preventDefault();
        setEditFormError(validateEditForm(editFormValue));
        if (targetRecordType === 'expense') {
            allExpenses.map(expense => {
                if (targetRecord === expense.id) {
                    if (editFormValue.name.length > 0) {
                        expense.name = editFormValue.name;
                    }
                    if (editFormValue.amount.length > 0 && !isNaN(editFormValue.amount)) {
                        expense.amount = editFormValue.amount;
                    }
                    if (editFormValue.category.length > 0 && expense.category !== editFormValue.category) {
                        expense.category = editFormValue.category;
                    }
                    if (editFormValue.created.length > 0 && expense.created !== editFormValue.created) {
                        expense.created = editFormValue.created;
                    }
                }
                return expense;

            })
        }
        if (targetRecordType === 'income') {
            allIncomes.map(income => {
                if (targetRecord === income.id) {
                    if (editFormValue.name.length > 0) {
                        income.name = editFormValue.name;
                    }
                    if (editFormValue.amount.length > 0 && !isNaN(editFormValue.amount)) {
                        income.amount = editFormValue.amount;
                    }
                    if (editFormValue.category.length > 0 && income.category !== editFormValue.category) {
                        income.category = editFormValue.category;
                    }
                    if (editFormValue.created.length > 0 && income.created !== editFormValue.created) {
                        income.created = editFormValue.created;
                    }
                }
                return income;

            })
        }

    }

    const validateEditForm = (value) => {
        let errors = {};
        if (isNaN(value.amount)) {
            errors.amount = "Please enter a valid amount in numbers";
        }
        return errors;
    }




    // CONNECT EXPENSES/INCOMES WITH CARD

    const countExpense = () => {
        allExpenses.map(expense => {
            bankAccounts.map(acc => {
                if (acc.name === expense.bankAccount) {
                    acc.expenses.push(Number(expense.amount));
                    acc.totalExpenses = acc.expenses.reduce((a, v) => a = a + v, 0);
                }
            })
        })
        return allExpenses;
    }

    const countSum = () => {
        allIncomes.map(income => {
            bankAccounts.map(acc => {
                if (acc.name === income.bankAccount) {
                    acc.incomes.push(Number(income.amount));
                    acc.totalIncomes = acc.incomes.reduce((a, v) => a = a + v, 0);
                }
            })
        })
    }

    const countTotals = () => {
        countSum();
        countExpense();
        bankAccounts.map(acc => {
            return acc.totalBalance = acc.totalIncomes - acc.totalExpenses;
        })
    }


    useEffect(() => {
        countTotals();
    }, []);


    return (
        <div className="dashboard">
            {props.user
                ? <div>
                    <DashboardNavigation logout={props.onLogout} resetForm={resetForm} />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<MainDashboard identifyRecord={identifyRecord} formError={formError} resetForm={resetForm} user={props.user} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
                            <Route path="expenses" element={<ExpensesDashboard allExpenses={allExpenses} allIncomes={allIncomes} identifyRecord={identifyRecord} editFormError={editFormError} recordInfo={recordInfo} closeModal={closeModal} toggleExistingExpenseIncome={toggleExistingExpenseIncome} toggleAddExpense={toggleAddExpense} toggleAddIncome={toggleAddIncome} setIncomeTab={setIncomeTab} getRecordInfo={getRecordInfo} toggleExistingRecords={toggleExistingRecords} expenseTable={expenseTable} setExpenseTab={setExpenseTab} toggleExpenseModal={toggleExpenseModal} toggleIncomeModal={toggleIncomeModal} deleteExistingRecord={deleteExistingRecord} cancelEditExpenseRecord={cancelEditExpenseRecord} handleEditValidation={handleEditValidation} editFormValue={editFormValue} validateEditForm={validateEditForm} updateAddedExpense={updateAddedExpense} editMode={editMode} editExpenseRecord={editExpenseRecord} formError={formError} resetForm={resetForm} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
                            <Route path="accounts" element={<AccountsDashboard />} />
                            <Route path="statistics" element={<StatisticsDashboard />} />
                            <Route path="budget" element={<BudgetDashboard />} />
                            <Route path="profile" element={<ProfileDashboard user={props.user} logout={props.onLogout} />} />
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
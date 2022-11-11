import { Routes, Route } from "react-router-dom";
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
import categories from "../../data/Categories";
import bankAccounts from "../../data/Accounts";
import { useState, useEffect } from "react";


const Dashboard = (props) => {
    const [formValue, setFormValue] = useState({ id: "", type: '', name: '', amount: '', currency: "$", category: "", bankAccount: '', created: '', note: '' });
    const [editFormValue, setEditFormValue] = useState({ id: "", type: '', name: '', amount: '', currency: "$", category: "", bankAccount: '', created: '', note: '' });
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
    const [recordInfo, setRecordInfo] = useState([{ id: "", type: '', name: '', category: '', amount: '', currency: '', date: '', note: '' }]);
    const covers = categories.reduce((c, { ["name"]: x, ["cover"]: cover }) => (c[x] = cover, c), {});
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        identifyRecord();
    }, []);

    const identifyRecord = (id, type) => {
        if (type === 'expense') {
            expenses.map((expense) => {
                if (expense.id === id) {
                    setTargetRecord(expense.id);
                    setTargetRecordIndex(expenses.indexOf(expense));
                    setTargetRecordType(expense.type);
                }
                return expense;
            })
        }
        if (type === 'income') {
            incomes.map((income) => {
                if (income.id === id) {
                    setTargetRecord(income.id);
                    setTargetRecordIndex(incomes.indexOf(income));
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
    const getRecordInfo = ({ id, type, name, category, bankAccount, amount, currency, created, note }) => {
        identifyRecord(id, type);
        setRecordInfo({ id: id, type: type, name: name, category: category, bankAccount: bankAccount, amount: amount, currency: currency, created: created, note: note });
    }


    // * FORMS

    const handleValidation = (e) => {
        const { name, value } = e.target;

        if (targetRecordType === 'expense') {
            console.log(name)
            setFormValue({ ...formValue, id: expenses.length + 1, type: "expense", currency: "$", cover: covers[formValue.category], [name]: value });

        }
        if (targetRecordType === 'income') {

            setFormValue({ ...formValue, id: incomes.length + 1, type: "income", currency: "$", cover: covers[formValue.category], [name]: value });
        }
    }
    const addIncome = (e) => {
        e.preventDefault();
        if (!validateForm(formValue))
            return false;

        incomes.push(formValue);
        updateBankBalance(formValue, "add")
        setSubmit(true);
        setFormValue({ id: "", type: '', name: '', amount: '', currency: "$", category: "", bankAccount: '', created: '', note: '' });
    }

    const addExpense = (e) => {
        e.preventDefault();
        if (!validateForm(formValue))
            return false;

        expenses.push(formValue);
        updateBankBalance(formValue, "substract")
        setSubmit(true);
        setFormValue({ id: "", type: '', name: '', amount: '', currency: "$", category: "", bankAccount: '', created: '', note: '' });

    }


    const resetForm = () => {
        setSubmit(false);
        setFormValue({ id: "", type: '', name: '', amount: '', category: "", bankAccount: '', created: '', note: '' });
        setEditFormValue({ id: "", type: '', name: '', amount: '', category: "", bankAccount: '', created: '', note: '' });
        setFormError({});
    }
    const validateForm = (value) => {
        let errors = {};
        let isValid = true;
        if (!value.name) {
            errors.name = "Please enter name";
            isValid = false
        }
        if (!value.amount) {
            errors.amount = "Please enter amount";
            isValid = false
        }
        else if (isNaN(value.amount)) {
            errors.amount = "Please enter a valid amount in numbers";
            isValid = false
        }
        if (!value.category) {
            errors.category = "Please enter category";
            isValid = false
        }
        if (!value.created) {
            errors.created = "Please enter date";
            isValid = false
        }

        if (!isValid)
            setFormError(errors)

        return isValid;
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
            updateBankBalance(recordInfo, "add")
            expenses.splice(targetRecordIndex, 1);
        }
        if (targetRecordType === 'income') {
            updateBankBalance(recordInfo, "substract")
            incomes.splice(targetRecordIndex, 1);
        }
        resetForm();
        setSuccessMessage(`Deleted ${targetRecordType} successfuly! 👀`)
        setTimeout(() => {
            setSuccessMessage("");
            closeModal();
        }, 1500);

    }
    const handleEditValidation = (e) => {
        const { name, value } = e.target;
        setEditFormValue({ ...editFormValue, [name]: value });
    }

    const updateAddedExpense = (e) => {
        e.preventDefault();
        setEditFormError(validateEditForm(editFormValue));
        if (targetRecordType === 'expense') {
            expenses.map(expense => {
                if (targetRecord === expense.id) {
                    if (editFormValue.name.length > 0) {
                        expense.name = editFormValue.name;
                    }
                    if (editFormValue.amount.length > 0 && !isNaN(editFormValue.amount)) {
                        updateBankBalance(expense, "edit");
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
            incomes.map(income => {
                if (targetRecord === income.id) {
                    if (editFormValue.name.length > 0) {
                        income.name = editFormValue.name;
                    }
                    if (editFormValue.amount.length > 0 && !isNaN(editFormValue.amount)) {
                        updateBankBalance(income, "edit");
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
        setSuccessMessage(`Edited ${targetRecordType} successfuly! 🎉`)
        setTimeout(() => {
            setSuccessMessage("")
            closeModal();
        }, 1500);
    }

    //Update Bank Account Balance when add new transaction, edit them or delete them.
    const updateBankBalance = (transaction, action) => {
        const card = bankAccounts.find(b => b.name === transaction.bankAccount)
        if (card) {
            if (action === "add") {
                card.currentBalance = Number(card.currentBalance) + Number(transaction.amount)
            }
            if (action === "substract") {
                card.currentBalance = Number(card.currentBalance) - Number(transaction.amount)
            }
            if (action === "edit") {
                if (transaction.type === "expense") {
                    (Number(transaction.amount < editFormValue.amount)) ?
                        card.currentBalance = Number(card.currentBalance) - Number(editFormValue.amount - transaction.amount)
                        :
                        card.currentBalance = Number(card.currentBalance) + Number(transaction.amount - editFormValue.amount)
                }
                if (transaction.type === "income") {
                    (Number(transaction.amount < editFormValue.amount)) ?
                        card.currentBalance = Number(card.currentBalance) + Number(editFormValue.amount - transaction.amount)
                        :
                        card.currentBalance = Number(card.currentBalance) - Number(transaction.amount - editFormValue.amount)
                }
            }
        }
    }

    const validateEditForm = (value) => {
        let errors = {};
        if (isNaN(value.amount)) {
            errors.amount = "Please enter a valid amount in numbers";
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
                            <Route path="/" element={<MainDashboard identifyRecord={identifyRecord} formError={formError} resetForm={resetForm} user={props.user} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
                            <Route path="expenses" element={<ExpensesDashboard successMessage={successMessage} identifyRecord={identifyRecord} editFormError={editFormError} recordInfo={recordInfo} closeModal={closeModal} toggleExistingExpenseIncome={toggleExistingExpenseIncome} toggleAddExpense={toggleAddExpense} toggleAddIncome={toggleAddIncome} setIncomeTab={setIncomeTab} getRecordInfo={getRecordInfo} toggleExistingRecords={toggleExistingRecords} expenseTable={expenseTable} setExpenseTab={setExpenseTab} toggleExpenseModal={toggleExpenseModal} toggleIncomeModal={toggleIncomeModal} deleteExistingRecord={deleteExistingRecord} cancelEditExpenseRecord={cancelEditExpenseRecord} handleEditValidation={handleEditValidation} editFormValue={editFormValue} validateEditForm={validateEditForm} updateAddedExpense={updateAddedExpense} editMode={editMode} editExpenseRecord={editExpenseRecord} formError={formError} resetForm={resetForm} addIncome={addIncome} addExpense={addExpense} handleValidation={handleValidation} formValue={formValue} submit={submit} />} />
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
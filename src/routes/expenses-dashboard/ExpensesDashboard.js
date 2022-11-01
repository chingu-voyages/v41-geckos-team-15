import { useState } from 'react';
import ExpensesPagination from '../accounts-dashboard/ExpensesPagination';
import ExistingExpenseincome from './ExistingExpenseincome';
import ExpenseModal from './ExpenseModal';
import './expensesDashboard.css';
import ExpensesTable from './ExpensesTable';
import IncomeModal from './IncomeModal';
import IncomesTable from './IncomesTable';

const ExpensesDashboard = ({ submit, formError, resetForm, addIncome, addExpense, handleValidation, formValue }) => {
    const [expenseTable, setExpenseTable] = useState(true);
    const [toggleAddExpense, setToggleAddToExpense] = useState(false);
    const [toggleAddIncome, setToggleAddToIncome] = useState(false);
    const [toggleExistingExpenseIncome, setExistingExpenseIncome] = useState(false);
    const [recordInfo, setRecordInfo] = useState([{ name: '', category: '', amount: '', currency: '', date: '', note: '' }]);


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
    const getRecordInfo = (name, category, amount, currency, date, note) => {
        setRecordInfo({ name: name, category: category, amount: amount, currency: currency, date: date, note: note })
    }
    return (
        <main className="expenses-dashboard">
            <article>
                <section className="expenses-action-btns">
                    <button onClick={toggleExpenseModal}>Add expense &#65291;</button>
                    <button onClick={toggleIncomeModal}>Add Income &#65291;</button>
                </section>
            </article>
            <article className='expenses-grid'>
                <section className='expenses-tabs'>
                    <button onClick={setExpenseTab} className={`${expenseTable ? 'active-tab' : null}`}>Expenses</button>
                    <button onClick={setIncomeTab} className={`${expenseTable ? null : 'active-tab'}`}>Incomes</button>
                </section>
                {expenseTable ? <ExpensesTable toggleExistingRecords={toggleExistingRecords} getRecordInfo={getRecordInfo} /> : <IncomesTable toggleExistingRecords={toggleExistingRecords} getRecordInfo={getRecordInfo} />}
                <ExpensesPagination />
            </article>
            {toggleAddExpense ? <ExpenseModal formError={formError} resetForm={resetForm} closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addExpense={addExpense} submit={submit} /> : null}
            {toggleAddIncome ? <IncomeModal formError={formError} resetForm={resetForm} closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addIncome={addIncome} submit={submit} /> : null}
            {toggleExistingExpenseIncome ? <ExistingExpenseincome closeModal={closeModal} recordInfo={recordInfo} /> : null}
        </main>
    )
}

export default ExpensesDashboard;
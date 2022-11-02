import { useState } from 'react';
import ExpensesPagination from '../accounts-dashboard/ExpensesPagination';
import ExistingExpenseincome from './ExistingExpenseincome';
import ExpenseModal from './ExpenseModal';
import './expensesDashboard.css';
import ExpensesTable from './ExpensesTable';
import IncomeModal from './IncomeModal';
import IncomesTable from './IncomesTable';

const ExpensesDashboard = ({ recordInfo, toggleAddExpense, closeModal, toggleExistingExpenseIncome, toggleAddIncome, toggleExpenseModal, toggleIncomeModal, setExpenseTab, expenseTable, getRecordInfo, toggleExistingRecords, setIncomeTab, deleteExistingRecord, cancelEditExpenseRecord, handleEditValidation, editFormValue, validateEditForm, updateAddedExpense, editMode, editExpenseRecord, identifyRecord, submit, formError, resetForm, addIncome, addExpense, handleValidation, formValue }) => {
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
                {expenseTable ?
                    <ExpensesTable identifyRecord={identifyRecord} toggleExistingRecords={toggleExistingRecords} getRecordInfo={getRecordInfo} /> :
                    <IncomesTable toggleExistingRecords={toggleExistingRecords} getRecordInfo={getRecordInfo} />}
                <ExpensesPagination />
            </article>
            {toggleAddExpense ?
                <ExpenseModal formError={formError} resetForm={resetForm} closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addExpense={addExpense} submit={submit} /> :
                null}
            {toggleAddIncome ?
                <IncomeModal formError={formError} resetForm={resetForm} closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addIncome={addIncome} submit={submit} /> :
                null}
            {toggleExistingExpenseIncome ?
                <ExistingExpenseincome deleteExistingRecord={deleteExistingRecord} cancelEditExpenseRecord={cancelEditExpenseRecord} identifyRecord={identifyRecord} handleEditValidation={handleEditValidation} editFormValue={editFormValue} validateEditForm={validateEditForm} updateAddedExpense={updateAddedExpense} editMode={editMode} editExpenseRecord={editExpenseRecord} closeModal={closeModal} recordInfo={recordInfo} /> :
                null}
        </main>
    )
}

export default ExpensesDashboard;
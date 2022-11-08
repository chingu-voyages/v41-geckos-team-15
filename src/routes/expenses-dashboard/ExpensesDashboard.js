import ExistingExpenseincome from './ExistingExpenseincome';
import ExpenseModal from './ExpenseModal';
import './expensesDashboard.css';
import ExpensesTable from './ExpensesTable';
import IncomeModal from './IncomeModal';
import IncomesTable from './IncomesTable';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ScrollToTop from '../../helpers/ScrollToTop';

const ExpensesDashboard = ({ allExpenses, allIncomes, editFormError, recordInfo, toggleAddExpense, closeModal, toggleExistingExpenseIncome, toggleAddIncome, toggleExpenseModal, toggleIncomeModal, setExpenseTab, expenseTable, getRecordInfo, toggleExistingRecords, setIncomeTab, deleteExistingRecord, cancelEditExpenseRecord, handleEditValidation, editFormValue, validateEditForm, updateAddedExpense, editMode, editExpenseRecord, identifyRecord, submit, formError, resetForm, addIncome, addExpense, handleValidation, formValue }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 5;
    const currentExpenses = [...allExpenses].reverse().slice(itemOffset, endOffset);
    const currentIncomes = [...allIncomes].reverse().slice(itemOffset, endOffset);
    const pageCountExpenses = Math.ceil(allExpenses.length / 5);
    const pageCountIncomes = Math.ceil(allIncomes.length / 5);

    const handlePageClickExpenses = (event) => {
        const newOffset = (event.selected * 5) % allExpenses.length;
        setItemOffset(newOffset);
        ScrollToTop();

    };
    const handlePageClickIncomes = (event) => {
        const newOffset = (event.selected * 5) % allIncomes.length;
        setItemOffset(newOffset);
        ScrollToTop();
    };

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
                    <>
                        <ExpensesTable currentExpenses={currentExpenses} identifyRecord={identifyRecord} toggleExistingRecords={toggleExistingRecords} getRecordInfo={getRecordInfo} />
                        <ReactPaginate
                            className="pagination"
                            breakLabel="..."
                            nextLabel="next &#62;"
                            onPageChange={handlePageClickExpenses}
                            pageRangeDisplayed={5}
                            pageCount={pageCountExpenses}
                            previousLabel="&#60; previous"
                            renderOnZeroPageCount={null}
                        />
                    </> :
                    <>
                        <IncomesTable currentIncomes={currentIncomes} toggleExistingRecords={toggleExistingRecords} getRecordInfo={getRecordInfo} />
                        <ReactPaginate
                            className="pagination"
                            breakLabel="..."
                            nextLabel="next &#62;"
                            onPageChange={handlePageClickIncomes}
                            pageRangeDisplayed={5}
                            pageCount={pageCountIncomes}
                            previousLabel="&#60; previous"
                            renderOnZeroPageCount={null}
                        />
                    </>
                }
            </article>
            {toggleAddExpense ?
                <ExpenseModal identifyRecord={identifyRecord} getRecordInfo={getRecordInfo} formError={formError} resetForm={resetForm} closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addExpense={addExpense} submit={submit} /> :
                null}
            {toggleAddIncome ?
                <IncomeModal identifyRecord={identifyRecord} formError={formError} resetForm={resetForm} closeModal={closeModal} handleValidation={handleValidation} formValue={formValue} addIncome={addIncome} submit={submit} /> :
                null}
            {toggleExistingExpenseIncome ?
                <ExistingExpenseincome editFormError={editFormError} deleteExistingRecord={deleteExistingRecord} cancelEditExpenseRecord={cancelEditExpenseRecord} identifyRecord={identifyRecord} handleEditValidation={handleEditValidation} editFormValue={editFormValue} validateEditForm={validateEditForm} updateAddedExpense={updateAddedExpense} editMode={editMode} editExpenseRecord={editExpenseRecord} closeModal={closeModal} recordInfo={recordInfo} /> :
                null}
        </main>
    )
}

export default ExpensesDashboard;
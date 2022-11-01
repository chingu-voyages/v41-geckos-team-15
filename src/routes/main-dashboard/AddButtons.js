import React from 'react'
import "./mainDashboard.css"

const AddButtons = (props) => {

    return (
        <div className="buttons">
            <button onClick={() => { props.toggleExpenseModal() }}>Add expense &#65291;</button>
            <button onClick={() => { props.toggleIncomeModal(); }}>Add income &#65291;</button>
            <button>Add account &#65291;</button>
            <button>Add category &#65291;</button>
        </div>
    )
}

export default AddButtons
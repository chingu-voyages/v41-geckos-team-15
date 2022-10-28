
import CloseExpenseModal from "./CloseExpenseModal";

const ExistingExpenseincome = (props) => {
    return (
        <article className="add-existing-modal">
            <section className="add-existing-popup">
                <CloseExpenseModal closeModal={props.closeModal} />
                <h2>{props.recordInfo.name}</h2>
                <section className="recording-data">
                    <p>Category: <span>{props.recordInfo.category}</span></p>
                    <p>Amount: <span>{props.recordInfo.amount} {props.recordInfo.currency}</span></p>
                    <p>Date: <span>{props.recordInfo.date}</span></p>
                    <p>Note: <span>{props.recordInfo.note}</span></p>
                </section>
                <section className="existing-record-buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </section>
            </section>
        </article>
    )
}

export default ExistingExpenseincome;
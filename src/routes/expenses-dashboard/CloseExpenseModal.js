const CloseExpenseModal = (props) => {
    return (
        <button onClick={() => { props.closeModal(); props.resetForm() }} className="close-modal">&#10005;</button>
    )
}

export default CloseExpenseModal;
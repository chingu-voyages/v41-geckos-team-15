const CloseExpenseModal = (props) => {
    return (
        <button onClick={() => { props.closeModal(); props.resetForm() }} className="close-modal">X</button>
    )
}

export default CloseExpenseModal;
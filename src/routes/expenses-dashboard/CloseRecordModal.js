const CloseRecordModal = (props) => {
    return (
        <button onClick={() => { props.closeModal(); }} className="close-modal">X</button>
    )
}

export default CloseRecordModal;
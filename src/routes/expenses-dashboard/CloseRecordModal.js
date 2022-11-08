const CloseRecordModal = (props) => {
    return (
        <button onClick={() => { props.closeModal(); }} className="close-modal">&#10005;</button>
    )
}

export default CloseRecordModal;
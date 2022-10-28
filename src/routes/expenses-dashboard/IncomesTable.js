import incomes from "../../data/Incomes";

const IncomesTable = (props) => {
    return (
        <table className="greyGridTable">
            <thead>
                <tr>
                    <th>Income name</th>
                    <th>Category</th>
                    <th>Created</th>
                    <th>Amount</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
                {incomes.map((income) =>
                    <tr key={income.id}>
                        <td> <img src={income.cover} alt="" />{income.name}</td>
                        <td>{income.category}</td>
                        <td>{income.created}</td>
                        <td className="income-amount">{income.amount}{income.currency}</td>
                        <td onClick={() => {
                            props.toggleExistingRecords();
                            props.getRecordInfo(income.name, income.category, income.amount, income.currency, income.created, income.note);
                        }}>...</td>
                    </tr>)}
            </tbody>
        </table >
    )
}


export default IncomesTable;
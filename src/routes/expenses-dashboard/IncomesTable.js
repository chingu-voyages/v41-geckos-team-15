import incomes from "../../data/Incomes";

const IncomesTable = (props) => {
    return (
        <table className="greyGridTable">
            <thead>
                <tr>
                    <th scope="col">Income name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Created</th>
                    <th scope="col">Amount</th>
                    <th scope="col">More</th>
                </tr>
            </thead>
            <tbody>
                {incomes.map((income) =>
                    <tr key={income.id}>
                        <td data-label="Expense name"><span><img src={income.cover} alt="" />{income.name}</span></td>
                        <td data-label="Category">{income.category}</td>
                        <td data-label="Created">{income.created}</td>
                        <td data-label="Amount" className="income-amount">{income.amount}{income.currency}</td>
                        <td data-label="More" onClick={() => {
                            props.toggleExistingRecords();
                            props.getRecordInfo(income.id, income.type, income.name, income.category, income.amount, income.currency, income.created, income.note);
                        }}>...</td>
                    </tr>)}
            </tbody>
        </table >
    )
}


export default IncomesTable;
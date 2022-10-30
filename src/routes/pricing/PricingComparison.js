const PricingComparison = () => {
    return (
        <table className='pricingComparison'>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th className='th-1'>
                        <h3>Basic Plan</h3>
                        <p className='th-price'>$0</p>
                        <p className='th-note'>Per month</p>
                        <button>Get started</button>
                    </th>
                    <th className='th-2'>
                        <h3>Business Plan</h3>
                        <p className='th-price'>$29</p>
                        <p className='th-note'>Per month</p>
                        <button>Get started</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Available users</td>
                    <td>1</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>App Store  & Play Store</td>
                    <td>✔️</td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>All countries</td>
                    <td>✔️</td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Connect banks for auto-sync</td>
                    <td>✔️</td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Exclusive Premium features</td>
                    <td></td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Optional Invoicing</td>
                    <td></td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Create and send estimates</td>
                    <td>✔️</td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Billable hours</td>
                    <td>✔️</td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Track sales & sales tax</td>
                    <td>✔️</td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Manage 1099 contractors</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Manage & pay bills</td>
                    <td>✔️</td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Track project profitability</td>
                    <td></td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Customize access by role</td>
                    <td></td>
                    <td>✔️</td>
                </tr>
                <tr>
                    <td>Enhanced custom categories</td>
                    <td>✔️</td>
                    <td>✔️</td>
                </tr> <tr>
                    <td>Automate processes & tasks</td>
                    <td></td>
                    <td>✔️</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PricingComparison;
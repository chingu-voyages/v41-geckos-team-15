import bankAccounts from "../../data/Accounts";
import PlusIcon from "../../assets/images/accounts-dashboard/plus-icon.png"
import CardIcon from "../../assets/images/accounts-dashboard/card-icon.png";
import EditIcon from "../../assets/images/accounts-dashboard/edit-icon.png";

const BankAccounts = (props) => {

    return (
        <article className="accounts-and-cards">
            <h2>Accounts & Cards</h2>
            <section className="accounts">
                {bankAccounts.map(account =>
                    <section className="account-card"
                        style={{ backgroundColor: account.color }}
                        key={account.id}>
                        <section className="account-header">
                            <section>
                                <img src={CardIcon} alt="Card icon" />
                                <h3>{account.name}</h3>
                            </section>
                            <img src={EditIcon} alt="Edit card icon" onClick={() => props.toggleCardModal({ account })} />
                        </section>
                        <section className="account-current-balance">
                            <h3 >{account.currentBalance} {account.currency}</h3>
                        </section>
                    </section>
                )}
                <button onClick={props.toggleCardModal} className="empty-card">
                    <img src={PlusIcon} alt="Add card icon" />
                </button>

            </section>
        </article>
    )
}

export default BankAccounts;
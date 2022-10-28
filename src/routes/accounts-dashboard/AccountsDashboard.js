import "./accountsDashboard.css"
import bankAccounts from "../../data/Accounts";
import categories from "../../data/Categories";
import CardIcon from "../../assets/images/accounts-dashboard/card-icon.png";
import EditIcon from "../../assets/images/accounts-dashboard/edit-icon.png";
import PlusIcon from "../../assets/images/accounts-dashboard/plus-icon.png"

const AccountsDashboard = () => {
    return (

        <main className="accounts-dashboard">
            <article className="accounts-and-cards">
                <h2>Accounts & Cards</h2>
                <section className="accounts">
                    {bankAccounts.map(account =>
                        <section className="account-card">
                            <section className="account-header">
                                <section>
                                    <img src={CardIcon} alt="Card icon" />
                                    <h3>{account.name}</h3>
                                </section>
                                <img src={EditIcon} alt="Edit card icon" />
                            </section>
                            <section className="account-current-balance">
                                <h3 >{account.currentBalance} {account.dollarCurrency}</h3>
                            </section>

                        </section>
                    )}
                    <section className="empty-card">
                        <img src={PlusIcon} alt="Add card icon" />
                    </section>

                </section>
            </article>
            <article className="accounts-categories">
                <h2>Categories</h2>
                <section className="categories">
                    <section className="empty-category">
                        <img src={PlusIcon} alt="Add category icon" />
                    </section>
                    {categories.map(category =>
                        <section className="categories-card">
                            <h3>{category.name}</h3>
                            <img src={PlusIcon} alt="Add card icon" />
                            <p>0 USD</p>
                        </section>
                    )}


                </section>
            </article>
        </main>
    )
}

export default AccountsDashboard;
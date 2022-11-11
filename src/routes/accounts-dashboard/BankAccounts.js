// import bankAccounts from "../../data/Accounts";
// import PlusIcon from "../../assets/images/accounts-dashboard/plus-icon.png"
// import CardIcon from "../../assets/images/accounts-dashboard/card-icon.png";
// import EditIcon from "../../assets/images/accounts-dashboard/edit-icon.png";
import PlusIcon from "../../assets/images/accounts-dashboard/white-plus-icon.png";
import BankCards from "./BankCards";

const BankAccounts = (props) => {

    return (
        <article className="accounts-and-cards">
            <div className="acc-header">
                <h1>Accounts & Cards</h1>
            </div>
            <section className="accounts">
            <BankCards toggleCardModal={props.toggleCardModal} user={props.user} />
                <section className="bank-account-card">
                    <button onClick={props.toggleCardModal} className="empty-card">
                        <img src={PlusIcon} alt="Add card icon" />
                    </button>
                </section>
            </section>
        </article>
    )
}

export default BankAccounts;
import accounts from "../../data/Accounts"
import { useState } from "react";

const AddCardModal = (props) => {
    const [formValue, setFormValue] = useState({ id: "", name: '', currentBalance: '', currency: "$", color: "" });
    const [formError, setFormError] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const cardColors = [{ blue: "#7aa0da" }, { purple: "#b796d9" }, { lightpink: "#e36cbb" }, { pink: "#dc5d8b" }, { red: "#fa4242" }, { orange: "#fe9256" }, { yellow: "#fae98f" }, { green: "#75e762" }]

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, id: accounts.length + 1, [name]: value });
    }
    const addCard = (e) => {
        e.preventDefault();

        if (!validateForm(formValue))
            return false;

        accounts.push(formValue);
        setFormValue({ id: "", name: '', currentBalance: '', currency: "$", color: "" })
        setSuccessMessage("Added Card Successfuly!")
        setTimeout(() => {
            setSuccessMessage("")
            props.closeModal();
        }, 1000);
    }

    const validateForm = (value) => {
        let errors = {};
        let isValid = true;
        if (!value.name) {
            errors.name = "Please enter name";
            isValid = false;
        }
        if (!value.currentBalance) {
            errors.currentBalance = "Please enter current balance";
            isValid = false;
        }
        else if (isNaN(value.currentBalance)) {
            errors.currentBalance = "Please enter a valid amount in numbers";
            isValid = false;
        }
        if (!isValid) {
            setFormError(errors)
        }
        return isValid
    }

    return (
        <article className="add-card-modal" >
            <section className="add-card-popup">
                <button onClick={props.closeModal} className="close-modal">&times;</button>
                <h2>New account</h2>
                {successMessage ? <div>{successMessage}</div> :
                    <form onSubmit={addCard}>
                        <section className="form-inner">
                            <input type="text"
                                name="name"
                                placeholder="Enter account name"
                                value={formValue.name}
                                onChange={handleValidation} />
                            {formError.name ? <span className="modal-input-err">{formError.name}</span> : null}
                            <section className="card-cover">
                                <input
                                    className="add-card-amount"
                                    name="currentBalance"
                                    type="text"
                                    placeholder="0"
                                    value={formValue.currentBalance}
                                    onChange={handleValidation} />
                                {formError.currentBalance ? <span className="modal-input-err">{formError.currentBalance}</span> : null}
                                <select
                                    name="currency"
                                    value={formValue.currency}
                                    onChange={handleValidation}  >
                                    <option value="$" defaultChecked >USD</option>
                                    <option value="€">EUR</option>
                                </select>
                                {formError.currency ? <span className="modal-input-err">{formError.currency}</span> : null}
                            </section>
                            <section className="add-card-colors">
                                <h4>Color:</h4>
                                {cardColors.map((c, index) => {
                                    return (
                                        <section class="add-card-color">
                                            <input type="radio" class="sb-checkbox__input" id={index} name="color" value={Object.values(c)} onChange={handleValidation} />
                                            <label class={`sb-checkbox__label sb-checkbox__label--${Object.keys(c)}`} htmlFor={index}></label>
                                        </section>)
                                })}
                            </section>
                        </section>
                        <button type="submit">Create</button>
                    </form>
                }
            </section>
        </article>
    )
}

export default AddCardModal;
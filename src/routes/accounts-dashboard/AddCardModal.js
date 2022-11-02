import accounts from "../../data/Accounts"
import { useState } from "react";

const AddCardModal = (props) => {
    const [formValue, setFormValue] = useState({ id: "", name: '', currentBalance: '', currency: "$", color: "" });
    const [formError, setFormError] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
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
                                <section class="add-card-color">
                                    <input type="radio" class="sb-checkbox__input" id="check1" name="color" value="#7aa0da" onChange={handleValidation} />
                                    <label class="sb-checkbox__label sb-checkbox__label--blue" htmlFor="check1"></label>
                                </section>
                                <section class="add-card-color">
                                    <input type="radio" class="sb-checkbox__input" id="check2" name="color" value="#b796d9" onChange={handleValidation} />
                                    <label class="sb-checkbox__label sb-checkbox__label--purple" htmlFor="check2"></label>
                                </section>
                                <section class="add-card-color">
                                    <input type="radio" class="sb-checkbox__input" id="check3" name="color" value="#e36cbb" onChange={handleValidation} />
                                    <label class="sb-checkbox__label sb-checkbox__label--light-pink" htmlFor="check3"></label>
                                </section>
                                <section class="add-card-color">
                                    <input type="radio" class="sb-checkbox__input" id="check4" name="color" value="#dc5d8b" onChange={handleValidation} />
                                    <label class="sb-checkbox__label sb-checkbox__label--pink" htmlFor="check4"></label>
                                </section>
                                <section class="add-card-color">
                                    <input type="radio" class="sb-checkbox__input" id="check5" name="color" value="#fa4242" onChange={handleValidation} />
                                    <label class="sb-checkbox__label sb-checkbox__label--red" htmlFor="check5"></label>
                                </section>
                                <section class="add-card-color">
                                    <input type="radio" class="sb-checkbox__input" id="check6" name="color" value="#fe9256" onChange={handleValidation} />
                                    <label class="sb-checkbox__label sb-checkbox__label--orange" htmlFor="check6"></label>
                                </section>
                                <section class="add-card-color">
                                    <input type="radio" class="sb-checkbox__input" id="check7" name="color" value="#fae98f" onChange={handleValidation} />
                                    <label class="sb-checkbox__label sb-checkbox__label--yellow" htmlFor="check7"></label>
                                </section>
                                <section class="add-card-color">
                                    <input type="radio" class="sb-checkbox__input" id="check8" name="color" value="#75e762" onChange={handleValidation} />
                                    <label class="sb-checkbox__label sb-checkbox__label--green" htmlFor="check8"></label>
                                </section>
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
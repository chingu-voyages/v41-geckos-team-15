import categories from "../../data/Categories";
import { useState } from "react";
import Default from "../../assets/images/accounts-dashboard/categories/default.png";

const AddCategoryModal = (props) => {

    const [formValue, setFormValue] = useState({ id: "", name: "", cover: Default, description: "" });
    const [formError, setFormError] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, id: categories.length + 1, [name]: value });
    }

    const addCategory = (e) => {
        e.preventDefault();

        if (!validateForm(formValue))
            return false;

        categories.push(formValue);
        setFormValue({ id: "", name: "", cover: Default, description: "" })
        setSuccessMessage("Added Category Successfuly!")
        setTimeout(() => {
            setSuccessMessage("")
            props.closeModal();
        }, 1000);
    }

    const validateForm = (value) => {
        let errors = {};
        let isValid = true;
        if (!value.name) {
            errors.name = "Please enter category name";
            isValid = false;
        }

        if (!isValid) {
            setFormError(errors)
        }
        return isValid
    }
    return (
        <article className="add-category-modal">
            <section className="add-category-popup">
                <button onClick={props.closeModal} className="close-modal">&#10005;</button>
                <h2>New category</h2>
                {successMessage ? <div>{successMessage}</div> :
                    <form onSubmit={addCategory}>
                        <input type="text"
                            placeholder="Category name"
                            name="name"
                            value={formValue.name}
                            onChange={handleValidation} />
                        {formError.name ? <span className="modal-input-err">{formError.name}</span> : null}
                        <textarea type="textarea"
                            placeholder="Description"
                            rows="5" name="description"
                            value={formValue.description}
                            onChange={handleValidation} />
                        <button className="dash-button"  type="submit">Create</button>
                    </form>
                }
            </section>
        </article>
    )
}

export default AddCategoryModal;
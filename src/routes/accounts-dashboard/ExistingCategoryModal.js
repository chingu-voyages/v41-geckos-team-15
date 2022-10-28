import CloseModal from "./CloseModal";

const ExistingCategoryModal = (props) => {
    return (
        <article className="view-category-modal">
            <section className="view-category-popup">
                <CloseModal closeModal={props.closeModal} />
                <h2>{props.categoryInfo.name}</h2>
                <section>
                    <h3>Category description</h3>
                    <p>{props.categoryInfo.description}</p>
                </section>
                <section className="view-category-buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </section>

            </section>
        </article>
    )
}

export default ExistingCategoryModal;
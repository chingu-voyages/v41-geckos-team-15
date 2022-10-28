const AddCategoryModal = () => {
    return (
        <article className="add-category-modal">
            <section className="add-category-popup">
                <h2>New category</h2>
                <form>
                    <input type="text" placeholder="Category name" />
                    <textarea type="textarea" placeholder="Description" rows="5" />
                    <button>Create</button>
                </form>

            </section>
        </article>
    )
}

export default AddCategoryModal;
const AddCardModal = () => {
    return (
        <article className="add-card-modal">
            <section className="add-card-popup">
                <h2>New account</h2>
                <form>
                    <section className="form-inner">
                        <input type="text" placeholder="Enter account name" />
                        <section className="card-cover">
                            <input className="add-card-amount" type="text" placeholder="0" />
                            <select>
                                <option value="USD" defaultChecked >USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </section>
                        <section className="add-card-colors">
                            <h4>Color:</h4>
                            <section class="add-card-color">
                                <input type="radio" class="sb-checkbox__input" id="check1" name="color-radio" />
                                <label class="sb-checkbox__label sb-checkbox__label--blue" htmlFor="check1"></label>
                            </section>
                            <section class="add-card-color">
                                <input type="radio" class="sb-checkbox__input" id="check2" name="color-radio" />
                                <label class="sb-checkbox__label sb-checkbox__label--purple" htmlFor="check2"></label>
                            </section>
                            <section class="add-card-color">
                                <input type="radio" class="sb-checkbox__input" id="check3" name="color-radio" />
                                <label class="sb-checkbox__label sb-checkbox__label--light-pink" htmlFor="check3"></label>
                            </section>
                            <section class="add-card-color">
                                <input type="radio" class="sb-checkbox__input" id="check4" name="color-radio" />
                                <label class="sb-checkbox__label sb-checkbox__label--pink" htmlFor="check4"></label>
                            </section>
                            <section class="add-card-color">
                                <input type="radio" class="sb-checkbox__input" id="check5" name="color-radio" />
                                <label class="sb-checkbox__label sb-checkbox__label--red" htmlFor="check5"></label>
                            </section>
                            <section class="add-card-color">
                                <input type="radio" class="sb-checkbox__input" id="check6" name="color-radio" />
                                <label class="sb-checkbox__label sb-checkbox__label--orange" htmlFor="check6"></label>
                            </section>
                            <section class="add-card-color">
                                <input type="radio" class="sb-checkbox__input" id="check7" name="color-radio" />
                                <label class="sb-checkbox__label sb-checkbox__label--yellow" htmlFor="check7"></label>
                            </section>
                            <section class="add-card-color">
                                <input type="radio" class="sb-checkbox__input" id="check8" name="color-radio" />
                                <label class="sb-checkbox__label sb-checkbox__label--green" htmlFor="check8"></label>
                            </section>
                        </section>
                    </section>
                    <button>Create</button>
                </form>
            </section>

        </article>
    )
}

export default AddCardModal;
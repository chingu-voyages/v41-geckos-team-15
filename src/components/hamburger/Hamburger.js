import './hamburger.css'

const Hamburger = ({ toggleMenu, responsive }) => {
    return (
        <div className={"menu-toggle " + (responsive && "is-active")} onClick={toggleMenu}>
            <div className="dash-hamburger">
                <span></span>
            </div>
        </div>
    )
}

export default Hamburger;
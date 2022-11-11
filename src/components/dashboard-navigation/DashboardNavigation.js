import { Link } from "react-router-dom";
import "./dashboardNavigation.css"
import { ReactComponent as Home } from '../../assets/images/dashboard-icons/home.svg'
import { ReactComponent as Expenses } from '../../assets/images/dashboard-icons/expenses.svg'
import { ReactComponent as Accounts } from '../../assets/images/dashboard-icons/accounts.svg'
import { ReactComponent as Statistics } from '../../assets/images/dashboard-icons/statistics.svg'
import { ReactComponent as Budget } from '../../assets/images/dashboard-icons/budget.svg'
import { ReactComponent as Profile } from '../../assets/images/dashboard-icons/profile.svg'
import { ReactComponent as Logout } from '../../assets/images/dashboard-icons/log-out.svg'
import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import { useState } from "react";
import Hamburger from "../hamburger/Hamburger";
import ScrollToTop from "../../helpers/ScrollToTop";

const DashboardNavigation = (props) => {
    const [responsive, setResponsive] = useState(false);

    const toggleMenu = () => setResponsive(!responsive);

    return (
        <div className={"sidebar " + (responsive && "is-active")}>
            <Hamburger toggleMenu={toggleMenu} responsive={responsive} />
            <div className="logo">
                <img src={ExpenselessLogo} alt="" />
            </div>
            <div className="sidebar-items">
                <ul className="menu">
                    <li>
                        <Link to="" onClick={() => { toggleMenu(); props.resetForm(); ScrollToTop() }}>
                            <Home className="icon" />
                            <span className="item-name">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="accounts" onClick={() => { toggleMenu(); props.resetForm(); ScrollToTop() }}>
                            <Accounts className="icon" />
                            <span className="item-name">Accounts</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="expenses" onClick={() => { toggleMenu(); props.resetForm(); ScrollToTop() }}>
                            <Expenses className="icon" />
                            <span className="item-name">Expenses</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="budget" onClick={() => { toggleMenu(); props.resetForm(); ScrollToTop() }}>
                            <Budget className="icon" />
                            <span className="item-name">Budget</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="statistics" onClick={() => { toggleMenu(); props.resetForm(); ScrollToTop() }}>
                            <Statistics className="icon" />
                            <span className="item-name">Statistics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="profile" onClick={() => { toggleMenu(); props.resetForm(); ScrollToTop() }}>
                            <Profile className="icon" />
                            <span className="item-name">Profile</span>
                        </Link>
                    </li>
                </ul>
                <div className="bottom-content">
                    <li className="">
                        <Link to="/">
                            <button className="logout-button" onClick={() => { toggleMenu(); props.logout(); props.resetForm(); ScrollToTop() }}>
                                <Logout className="icon" />
                                <span className="item-name">Logout</span>
                            </button>
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavigation;
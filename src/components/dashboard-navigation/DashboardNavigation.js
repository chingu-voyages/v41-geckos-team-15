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
import Hamburger from '../../assets/images/landing/hamburger.png'
import { useState } from 'react';

const DashboardNavigation = (props) => {
    const [toggleMenu, setToggleMeu] = useState(false);
    const toggleHamMenu = () => {
        toggleMenu ? setToggleMeu(false) : setToggleMeu(true);
    }
    const toggleOffMenu = () => {
        setToggleMeu(false);
    }
    return (

        <div className={`sidebar${!toggleMenu ? `` : ` active-header`}`}>
            <div className="logo" onClick={toggleOffMenu}>
                <img src={ExpenselessLogo} alt="" />
            </div>
            <img className='hamburger' src={Hamburger} alt="" onClick={toggleHamMenu} />
            <div className={`sidebar-items${!toggleMenu ? `` : ` active-menu`}`}>
                <ul>
                    <li>
                        <Link to="" onClick={toggleOffMenu}>
                            <Home className="icon" />
                            <span className="item-name">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="accounts" onClick={toggleOffMenu}>
                            <Accounts className="icon" />
                            <span className="item-name">Accounts</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="expenses" onClick={toggleOffMenu}>
                            <Expenses className="icon" />
                            <span className="item-name">Expenses</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="budget">
                            <Budget className="icon" />
                            <span className="item-name">Budget</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="statistics" onClick={toggleOffMenu}>
                            <Statistics className="icon" />
                            <span className="item-name">Statistics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="profile" onClick={toggleOffMenu}>
                            <Profile className="icon" />
                            <span className="item-name">Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="logout-button" onClick={() => { props.logout(); toggleOffMenu() }} >
                            <Logout className="icon" />
                            <span className="item-name">Logout</span>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default DashboardNavigation;
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

const DashboardNavigation = (props) => {
    return (

        <div className="sidebar ">
            <div className="logo">
                <img src={ExpenselessLogo} alt="" />
            </div>

            <div class="sidebar-items">
                <ul>
                    <li>
                        <Link to="">
                            <Home className="icon" />
                            <span className="item-name">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="accounts">
                            <Accounts className="icon" />
                            <span className="item-name">Accounts</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="expenses">
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
                        <Link to="statistics">
                            <Statistics className="icon" />
                            <span className="item-name">Statistics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="profile">
                            <Profile className="icon" />
                            <span className="item-name">Profile</span>
                        </Link>
                    </li>
                </ul>


                {/* <div class="bottom-content"> */}
                <button className="logout-button" onClick={props.logout}>
                    <Logout className="icon" />
                    <span class="item-name">Logout</span>
                </button>
                {/* </div> */}
            </div>
        </div>
    )
}

export default DashboardNavigation;
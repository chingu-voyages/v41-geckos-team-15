import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardNavigation from "../../components/dashboard-navigation/DashboardNavigation";
import ProfileDashboard from "../profile-dashboard/ProfileDashboard";
import StatisticsDashboard from "../statistics-dashboard/StatiscticsDashboard";
import ExpensesDashboard from "../expenses-dashboard/ExpensesDashboard";
import BudgetDashboard from "../budget-dashboard/BudgetDashboard";
import AccountsDashboard from "../accounts-dashboard/AccountsDashboard";
import MainDashboard from "../main-dashboard/MainDashboard";
import "./dashboard.css"

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            {props.user
                ? <div>
                    <DashboardNavigation logout={props.onLogout} />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<MainDashboard user={props.user} />} />
                            <Route path="expenses" element={<ExpensesDashboard />} />
                            <Route path="accounts" element={<AccountsDashboard />} />
                            <Route path="statistics" element={<StatisticsDashboard />} />
                            <Route path="budget" element={<BudgetDashboard />} />
                            <Route path="profile" element={<ProfileDashboard />} />
                        </Routes>
                    </div>
                </div>

                : <div>
                    You need to Login or Register
                </div>
            }
        </div>
    )
}

export default Dashboard;
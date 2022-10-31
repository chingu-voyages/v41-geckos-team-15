import "./mainDashboard.css"
import MonthlyExpenses from "./MonthlyExpenses";
import AddButtons from "./AddButtons";
import BudgetStatus from "./BudgetStatus";
import PopularCategories from "./PopularCategories";

const MainDashboard = ({ user }) => {
    return (
        <div className="mainDashboard">

            <div className="header">
                <h1>Hello {user},</h1>
                <p>Take a look at your current balance 👀</p>
            </div>

            <div className="sections">
                <AddButtons />
                <BudgetStatus />
                <PopularCategories />
                <MonthlyExpenses />
            </div>
        </div>
    )
}

export default MainDashboard;

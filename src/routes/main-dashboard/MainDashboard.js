import "./mainDashboard.css"
import ProgressBar from "./charts/progressbar/ProgressBar";
import { Link } from "react-router-dom";
import { BubbleChart } from "./charts/BubbleChart";

const MainDashboard = ({ user }) => {
    return (
        <div className="mainDashboard">
            <div className="header">
                <h1>Hello {user},</h1>
                <p>Take a look at your current balance</p>
            </div>
            <div className="sections">
                <div className="buttons">
                    <button>Add expense &#65291;</button>
                    <button>Add Income &#65291;</button>
                    <button>Add account &#65291;</button>
                    <button>Add category &#65291;</button>
                </div>

                <div className="budget-status card">
                    <div className="card-content">
                        Budget status
                        <div>
                            <span className="bar-title">Income </span>
                            <span className="amount">1000$</span>
                            <ProgressBar done={90} />
                        </div>
                        <div>
                            <span className="bar-title">Expenses</span>
                            <span className="amount">500$</span>
                            <ProgressBar done={50} />
                        </div>

                        <Link to="">See all transactions &#62; </Link>
                    </div>
                </div>

                <div className="bubbles card">
                    <div className="card-content">
                        Popular categories
                        <span className="card-year">2022</span>
                        <BubbleChart />
                    </div>
                </div>
                <div className="months-stat card">
                </div>
            </div>
        </div >
    )
}

export default MainDashboard

import "./statiscticsDashboard.css";
import { PieChart } from "./charts/PieChart";
import { BarChart } from "./charts/BarChart";

const StatisticsDashboard = () => {
    return (
        <div className="statistics">

            <div className="header">
                <h1>Statistics</h1>

            </div>
            <div className="sections">
                <div className="byCategory card">
                    <div className="card-title">
                        Expenses By Category
                    </div>
                    <PieChart />

                </div>

                <div className="byMonth card">
                    <div className="card-title">
                        Expenses By Month
                        <span className="year"> 2022 </span>
                    </div>
                    <BarChart />
                </div>
            </div>

        </div>
    )
}

export default StatisticsDashboard;
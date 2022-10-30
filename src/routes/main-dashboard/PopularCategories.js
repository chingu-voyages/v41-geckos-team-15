import React from 'react'
import "./mainDashboard.css"
import { BubbleChart } from "./charts/BubbleChart";

const PopularCategories = () => {
    return (
        <div className="bubbles card">
            <div className="card-content">
                Popular categories
                <span className="card-year">2022</span>
                <BubbleChart />
            </div>
        </div>
    )
}

export default PopularCategories
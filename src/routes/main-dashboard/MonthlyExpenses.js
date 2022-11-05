import React from 'react'
import { ReactComponent as RedChart } from '../../assets/images/micro-charts/redChart.svg';
import { ReactComponent as YellowChart } from '../../assets/images/micro-charts/yellowChart.svg';
import { ReactComponent as GreenChart } from '../../assets/images/micro-charts/greenChart.svg';
import { allExpenses, allIncome } from '../../helpers/AllTransactions';
import "./mainDashboard.css";

const MonthlyExpenses = () => {

    //get current month
    const currentMonth = new Date().toLocaleString('en-US', { month: 'short' });

    //get total expenses & income 
    const expenses = allExpenses()
    const income = allIncome()

    return (
        <div className="months-stat">

            <div className="micro-charts card">
                {expenses.map((e, index) => {
                    //if expenese are equal to or greater than the income -> red!
                    if (e.value >= income[index].value && e.value !== 0) {
                        return (
                            <div key={index} className={(currentMonth === e.label) ? "current-month red" : null}>
                                <div className="sum red">{e.value} $</div>
                                <h3>{e.label}</h3>
                                <RedChart />
                            </div>
                        )
                    }
                    //if the expenses are  less or equal to half of the incom -> green!
                    if (e.value <= (income[index].value * 0.5)) {
                        return (
                            <div key={index} className={(currentMonth === e.label) ? "current-month green" : null}>
                                <div className="sum green">{e.value} $</div>
                                <h3>{e.label}</h3>
                                <GreenChart />
                            </div>)
                    }
                    else {
                        //if expenses nearing the income amount but not there yet -> yellow!
                        return (
                            <div key={index} className={(currentMonth === e.label) ? "current-month yellow" : null}>
                                <div className="sum yellow">{e.value}  $</div>
                                <h3>{e.label}</h3>
                                <YellowChart />
                            </div>
                        )
                    }
                }
                )}
            </div>
        </div>
    )
}

export default MonthlyExpenses

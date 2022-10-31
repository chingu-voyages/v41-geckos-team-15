import React from 'react'
import { ReactComponent as RedChart } from '../../assets/images/micro-charts/redChart.svg';
import { ReactComponent as YellowChart } from '../../assets/images/micro-charts/yellowChart.svg';
import { ReactComponent as GreenChart } from '../../assets/images/micro-charts/greenChart.svg';
import "./mainDashboard.css";
import expensesByMonth from '../../data/ExpensesByMonth';

const MonthlyExpenses = () => {


    //get current month
    const currentMonth = new Date().toLocaleString('en-US', { month: 'short' });

    //get total expenses & income 
    const expenses = expensesByMonth.filter(e => { return e.type === "Expenses" });
    const income = expensesByMonth.filter(e => { return e.type === "Income" });

    //get average for all expenses 
    const sum = expenses.reduce((sum, a) => sum + Number(a.value), 0);
    const average = sum / 12;

    return (
        <div className="months-stat">

            <div className="micro-charts card">
                {expenses.map((m, index) => {
                    if (m.value >= income[index].value) {
                        return (
                            <div key={index} className={(currentMonth === m.label) ? "current-month red" : null}>
                                <div className="sum red">{m.value} $</div>
                                <h3>{m.label}</h3>
                                <RedChart />
                            </div>
                        )
                    }
                    if (m.value <= average) {
                        return (
                            <div key={index} className={(currentMonth === m.label) ? "current-month green" : null}>
                                <div className="sum green">{m.value} $</div>
                                <h3>{m.label}</h3>
                                <GreenChart />
                            </div>)
                    }
                    else {
                        return (
                            <div key={index} className={(currentMonth === m.label) ? "current-month yellow" : null}>
                                <div className="sum yellow">{m.value}  $</div>
                                <h3>{m.label}</h3>
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

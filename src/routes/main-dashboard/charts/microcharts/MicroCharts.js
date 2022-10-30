import React from 'react'
import { ReactComponent as RedChart } from '../../../../assets/images/micro-charts/redChart.svg';
import { ReactComponent as YellowChart } from '../../../../assets/images/micro-charts/yellowChart.svg';
import { ReactComponent as GreenChart } from '../../../../assets/images/micro-charts/greenChart.svg';
import "./microCharts.css";

const MicroCharts = () => {

    //data
    const months = [{ Jan: 925 }, { Feb: 1125 }, { Mar: 844 }, { Apr: 1526 }, { May: 1110 }, { Jun: 1026 }, { Jul: 989 }, { Aug: 1295 }, { Sep: 783 }, { Oct: 679 }, { Nov: 1391 }, { Dec: 1025 }];
    const income = 1200;

    const currentMonth = new Date().getMonth();
    const sum = Object.values(months).reduce((sum, a) => sum + Number(Object.values(a)), 0);
    const average = sum / 12;

    return (
        <div className="micro-charts">
            {months.map((m, index) => {
                if (Object.values(m) >= income) {
                    return (
                        <div className={(currentMonth === index) ? "current-month red" : null}>
                            <div className="sum red">{Object.values(m)} $</div>
                            <h3>{Object.keys(m)}</h3>
                            <RedChart />
                        </div>
                    )
                }
                if (Object.values(m) <= average) {
                    return (
                        <div className={(currentMonth === index) ? "current-month green" : null}>
                            <div className="sum green">{Object.values(m)}  $</div>
                            <h3>{Object.keys(m)}</h3>
                            <GreenChart />
                        </div>)
                }
                else {
                    return (
                        <div className={(currentMonth === index) ? "current-month yellow" : null}>
                            <div className="sum yellow">{Object.values(m)}  $</div>
                            <h3>{Object.keys(m)}</h3>
                            <YellowChart />
                        </div>
                    )
                }
            }
            )}
        </div>
    )
}

export default MicroCharts;
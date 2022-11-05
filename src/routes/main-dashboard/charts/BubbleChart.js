import { CirclePacking } from '@ant-design/plots';
import { allCategoriesExpenses } from '../../../helpers/ExpensesByCategory';

export const BubbleChart = () => {

    const data = {
        "name": "root",
        "children": allCategoriesExpenses()
    }
    const config = {
        autoFit: true,
        padding: 0,
        data,
        sizeField: 'r',
        color: 'rgba(255,245,219,255)-rgba(183,208,245,255)-rgba(253,228,139,255)-rgba(128,229,202,255)-rgba(247,164,204,255)',
        label: {
            formatter: ({ name }) => {
                return name !== 'root' ? name : '';
            },
            offsetY: 8,
            style: {
                fontSize: 12,
                textAlign: 'center',
                fill: 'rgba(0,0,0,0.65)',
            },
        },
        legend: false,
    };
    return <CirclePacking {...config} />;
};


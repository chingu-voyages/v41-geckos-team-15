import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CirclePacking } from '@ant-design/plots';

export const BubbleChart = () => {
    const [data, setData] = useState([]);

    const dataSet = {
        "name": "root",
        "children": [
            {
                "name": "Housing",
                "value": 1046790
            },
            {
                "name": "Transportation",
                "value": 1039358
            },
            {
                "name": "Food",
                "value": 461880
            },
            {
                "name": "Utilities",
                "value": 308136
            },
            {
                "name": "Insurance",
                "value": 270578
            },
            {
                "name": "Medical & Healthcare",
                "value": 226334
            },
            {
                "name": "Saving",
                "value": 197342
            },
            {
                "name": "Investing",
                "value": 189739
            }]
    }

    useEffect(() => {
        setData(dataSet);
    }, []);

    /*--- Use This instead when fetching data from server---*/
    /*
    useEffect(() => {
        asyncFetch();
    }, []);
   
        const asyncFetch = () => {
            fetch('https://gw.alipayobjects.com/os/antfincdn/%24m0nDoQYqH/basic-packing.json')
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => {
                    console.log('fetch data failed', error);
                });
        };
    */
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


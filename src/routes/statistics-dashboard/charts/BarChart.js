import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/plots';
import expensesByMonth from '../../../data/ExpensesByMonth';

export const BarChart = () => {

    const data = expensesByMonth

    const config = {
        data,
        isGroup: true,
        xField: 'value',
        yField: 'label',


        seriesField: 'type',
        marginRatio: 0,
        label: {
            position: 'middle',
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return <Bar {...config} />;
};



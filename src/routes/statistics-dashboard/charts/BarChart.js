import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/plots';

export const BarChart = () => {
    const data = [
        {
            label: 'Jan.',
            type: 'Expenses',
            value: 2800,
        },
        {
            label: 'Jan.',
            type: 'Income',
            value: 2260,
        },
        {
            label: 'Feb.',
            type: 'Expenses',
            value: 1800,
        },
        {
            label: 'Feb.',
            type: 'Income',
            value: 1300,
        },
        {
            label: 'Mar.',
            type: 'Expenses',
            value: 950,
        },
        {
            label: 'Mar.',
            type: 'Income',
            value: 900,
        },
        {
            label: 'Apr.',
            type: 'Expenses',
            value: 500,
        },
        {
            label: 'Apr.',
            type: 'Income',
            value: 390,
        },
        {
            label: 'May.',
            type: 'Expenses',
            value: 170,
        },
        {
            label: 'May.',
            type: 'Income',
            value: 100,
        },
        {
            label: 'Jun.',
            type: 'Expenses',
            value: 400,
        },
        {
            label: 'Jun.',
            type: 'Income',
            value: 550,
        },
    ];
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



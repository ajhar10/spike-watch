import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useRecharts from '../../hooks/customData';

const Barchart = () => {
    const [chartdata, setChartdata] = useRecharts([])
    return (
        <div>
            <BarChart width={730} height={350} data={chartdata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={'investment'} fill="#8884d8" />
                <Bar dataKey={'revenue'} fill="#82ca9d" />

            </BarChart>
        </div>
    );
};

export default Barchart;
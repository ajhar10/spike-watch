import React from 'react';
import { Pie, PieChart } from 'recharts';
import useRecharts from '../../hooks/customData';

const data2 = [
    {
        "month": "Mar",
        "revenue": 4001
    },
    {
        "month": "Apr",
        "revenue": 5401

    },
    {
        "month": "May",
        "revenue": 7011
    },
    {
        "month": "Jun",
        "revenue": 8201

    },
    {
        "month": "Jul",
        "revenue": 10401

    },
    {
        "month": "Aug",
        "revenue": 12401
    }
]

const Piechart = () => {
    const [chartdata, setChartdata] = useRecharts([])
    return (
        <div>
            <PieChart width={730} height={350}>
                <Pie data={chartdata} dataKey={'revenue'} nameKey={'month'} cx="50%" cy="50%" outerRadius={110} fill="#8884d8" />
                <Pie data={data2} dataKey={'revenue'} nameKey={"month"} cx="50%" cy="50%" innerRadius={125} outerRadius={155} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default Piechart;
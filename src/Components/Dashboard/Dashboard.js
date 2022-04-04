import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useRecharts from '../../hooks/customData';

const Dashboard = () => {
    const [chartdata, setChartdata] = useRecharts([]);
    return (
        <div className="container mx-auto grid grid-cols-1 ">
            <section className="">

                <h1 className="m-3 flex justify-center text-4xl">Monthly Sell Reports</h1>
                <ResponsiveContainer width="90%" height={300}>
                    <LineChart data={chartdata} >
                        <Line type="monotone" dataKey={"month"} stroke="#8884d8" />
                        <Line type="monotone" dataKey={"sell"} stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey={"month"} />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>

            </section>

            <section className="grid grid-rows-1 m-5">
                <h1 className="m-3 flex justify-center text-4xl">Monthly Sell VS Revenue Reports</h1>
                <ResponsiveContainer width="95%" height={300}>
                    <AreaChart width={730} height={250} data={chartdata}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey={"month"} />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey={"sell"} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey={"revenue"} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>

            </section>

            <section className="grid grid-rows-1">

                <h1 className="m-3 flex justify-center text-4xl">Monthly Investment vs Revenue Reports</h1>
                <ResponsiveContainer width="90%" height={300}>
                    <BarChart width={730} height={250} data={chartdata}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"month"} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={"investment"} fill="#82ca9d" />
                        <Bar dataKey={"revenue"} fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>

            </section>
        </div>
    );
};

export default Dashboard;
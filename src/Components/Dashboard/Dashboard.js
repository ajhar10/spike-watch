import React from 'react';
import Barchart from '../Barchart/Barchart';
import Funnelchart from '../Funnelchart/Funnelchart';
import Piechart from '../Piechart/Piechart';

const Dashboard = () => {

    return (
        <div>
            <Barchart></Barchart>
            <Funnelchart></Funnelchart>
            <Piechart></Piechart>
        </div>
    );
};

export default Dashboard;
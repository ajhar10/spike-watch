import React from 'react';
import { Funnel, FunnelChart, LabelList, Tooltip } from 'recharts';
import useRecharts from '../../hooks/customData';

const Funnelchart = () => {
    const [chartdata, setChartdata] = useRecharts([])
    return (
        <div>
            <FunnelChart width={730} height={300}>
                <Tooltip />
                <Funnel
                    dataKey={'revenue'}
                    data={chartdata}
                    isAnimationActive
                >
                    <LabelList position="right" fill="#000" stroke="none" dataKey={'month'} />
                </Funnel>
            </FunnelChart>
        </div>
    );
};

export default Funnelchart;
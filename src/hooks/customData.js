import { useEffect, useState } from "react";

const useRecharts = () => {
    const [chartdata, setChartdata] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartdata(data));
    }, [])
    return [chartdata, setChartdata];
}

export default useRecharts;
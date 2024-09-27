import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

// Define the type for data items
type DataItem = {
    name: string;
    km: number; // Change the data point from 'uv' to 'km'
};

// Updated data for 12 months of distance in kilometers
const data: DataItem[] = [
    { name: "Jan", km: 400 },
    { name: "Feb", km: 300 },
    { name: "Mar", km: 500 },
    { name: "Apr", km: 400 },
    { name: "May", km: 600 },
    { name: "Jun", km: 700 },
    { name: "Jul", km: 800 },
    { name: "Aug", km: 900 },
    { name: "Sep", km: 1000 },
    { name: "Oct", km: 1100 },
    { name: "Nov", km: 1200 },
    { name: "Dec", km: 1300 },
];

// Function to provide introductory text based on the month
const getIntroOfMonth = (label: string) => {
    return `In ${label}, the distance traveled was recorded.`;
};

// Custom tooltip component for displaying data
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label}: ${payload[0].value} km`}</p>
                <p className="intro">{getIntroOfMonth(label)}</p>
                <p className="desc">Distance traveled in kilometers.</p>
            </div>
        );
    }

    return null;
};

const Miles: React.FC = () => {
    return (
        <div>
            <BarChart
                width={600}
                height={320}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="km" barSize={20} fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Miles;

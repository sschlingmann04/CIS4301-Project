"use client";

import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register the components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartComponent = ({ labels, points, title, ylabel }) => {
    const chartRef = useRef(null);

    const data = {
        labels: labels,
        datasets: [
            {
                label: title,
                data: points,
                tension: 0.2,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true, position: "top" },
            title: { display: !!title, text: title },
        },
        scales: {
            x: {
                title: { display: true, text: "Year" },
            },
            y: {
                title: { display: true, text: ylabel },
            },
        },
    };

    return <Line ref={chartRef} data={data} options={options} />;
};

export default ChartComponent;

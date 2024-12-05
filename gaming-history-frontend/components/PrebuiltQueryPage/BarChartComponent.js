"use client";

import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

const BarChartComponent = ({ data, title, ylabel }) => {
    const chartRef = useRef(null);

    const platforms = Array.from(new Set(data.map((item) => item[1])));
    const years = Array.from(new Set(data.map((item) => item[0])));

    const datasets = platforms.map((platform) => {
        const platformData = years.map(
            (year) =>
                data.find(
                    (item) => item[0] === year && item[1] === platform
                )?.[2] || 0
        );
        return {
            label: platform,
            data: platformData,
            backgroundColor: `rgba(${Math.floor(
                Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                Math.random() * 255
            )}, 0.5)`,
        };
    });

    const chartData = {
        labels: years,
        datasets: datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: !!title,
                text: title,
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: "xy",
                    threshold: 5,
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: "xy",
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: "Year",
                },
            },
            y: {
                stacked: true,
                title: {
                    display: !!ylabel,
                    text: ylabel,
                },
            },
        },
    };

    return <Bar ref={chartRef} data={chartData} options={options} />;
};

export default BarChartComponent;

"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";


const chartData = [
    { title: "placed", count: 90, fill: "#17726d" },
    { title: "notPlaced", count: 10, fill: "#eae4d2" },
]

const chartConfig = {
    placed: {
        label: "Total Placed",
        color: "#17726d"
    },
    notPlaced: {
        label: "Not Placed",
        color: "#eae4d2",
    },
} satisfies ChartConfig;

const perPlaced = (chartData[0].count / chartData.reduce((acc, curr) => acc + curr.count, 0)) * 100 || 100;



export default function PieChartContainer() {




    return (
        <ChartContainer
            config={chartConfig}
            className="aspect-square w-full"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    className="md:hidden"
                    data={chartData}
                    dataKey="count"
                    nameKey="placed"
                    innerRadius={50}
                    strokeWidth={15}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-3xl font-bold"
                                        >
                                            {perPlaced.toLocaleString() + " %"}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-muted-foreground"
                                        >
                                            TOTAL PLACED
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </Pie>
                <Pie
                    className="hidden md:block"
                    data={chartData}
                    dataKey="count"
                    nameKey="placed"
                    innerRadius={120}
                    strokeWidth={15}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-3xl font-bold"
                                        >
                                            {perPlaced.toLocaleString() + " %"}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-muted-foreground"
                                        >
                                            TOTAL PLACED
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer >

    )
}

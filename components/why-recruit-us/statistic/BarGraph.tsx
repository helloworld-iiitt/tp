
"use client";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { title: "CSE", highCTC: 13, avgCTC: 7.25, medianCTC: 6 },
    { title: "ECE", highCTC: 10, avgCTC: 7.75, medianCTC: 7.5 },
    { title: "Overall", highCTC: 13, avgCTC: 7.5, medianCTC: 6 }
]

const chartConfig = {
    highCTC: {
        label: "Highest CTC",
        color: "#17726d",
    },
    avgCTC: {
        label: "Average CTC",
        color: "#b2b08f",
    },
    medianCTC: {
        label: "Median CTC",
        color: "#eae4d2",
    },
} satisfies ChartConfig;

export default function BarGraphContainer() {
    return (
        <ChartContainer config={chartConfig} className="h-[160px] md:h-[60vh]">
            <BarChart accessibilityLayer data={chartData} className="">
                {/* <YAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
        /> */}
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="title"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                // tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <ChartLegend scale={2} content={<ChartLegendContent />} />
                <Bar dataKey="highCTC" fill="var(--color-highCTC)" radius={4}>
                    <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                    />
                </Bar>
                <Bar dataKey="avgCTC" fill="var(--color-avgCTC)" radius={4}>
                    <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                    />
                </Bar>
                <Bar dataKey="medianCTC" fill="var(--color-medianCTC)" radius={4} >
                    <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                    />
                </Bar>
            </BarChart>
        </ChartContainer>


    )
}

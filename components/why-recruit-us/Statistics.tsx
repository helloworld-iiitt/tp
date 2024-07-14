"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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


const pieChartData = [
    { title: "placed", count: 90, fill: "#17726d" },
    { title: "notPlaced", count: 10, fill: "#eae4d2" },
]

const pieChartConfig = {
    placed: {
        label: "Total Placed",
        color: "#17726d"
    },
    notPlaced: {
        label: "Not Placed",
        color: "#eae4d2",
    },
} satisfies ChartConfig

import { Label, Pie, PieChart } from "recharts"


const perPlaced = (pieChartData[0].count / pieChartData.reduce((acc, curr) => acc + curr.count, 0)) * 100 || 100;

export default function Statistics() {

    return (
        <div className="mb-10">
            <Card className="">
                <CardHeader>
                    <CardTitle>Statistics</CardTitle>
                    <CardDescription>Batch 2024-25 (in LPA)</CardDescription>
                </CardHeader>
                <CardContent className="flex">
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






                    <ChartContainer
                        config={pieChartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={pieChartData}
                                dataKey="count"
                                nameKey="title"
                                innerRadius={100}
                                strokeWidth={10}
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
                                                        {perPlaced.toLocaleString()} %
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
                    </ChartContainer>

                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total count for the last 6 months
                    </div>
                </CardFooter>
            </Card>

        </div>
    )
}

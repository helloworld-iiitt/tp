import { Label, Pie, PieChart } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { pieChartData } from "@/lib/constants/home";

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

const perPlaced = (pieChartData[0].count / pieChartData.reduce((acc, curr) => acc + curr.count, 0)) * 100 || 100;



export default function PieChartContainer() {
    return (
        <ChartContainer
            config={chartConfig}
            className="md:aspect-square w-full"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    className="md:hidden"
                    data={pieChartData}
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
                                            className="fill-foreground text-xl md:text-3xl font-bold"
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
                    data={pieChartData}
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

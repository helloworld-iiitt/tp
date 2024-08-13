"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BarGraphContainer from "./BarGraph";
import PieChartContainer from "./PieChart";

export default function Statistics() {

    return (
        <div className="">
            <Card className="">
                <CardHeader>
                    <CardTitle>Statistics</CardTitle>
                    <CardDescription>Batch 2024-25 (in LPA)</CardDescription>
                </CardHeader>
                <CardContent className="flex">
                    <div className="flex flex-col md:flex-row">
                        <BarGraphContainer />

                        <PieChartContainer />
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="w-full flex flex-col items-end">

                        <h1 className="font-semibold text-xl">Internships for 2024 Batch</h1>
                        <h2 className="text-base text-gray-600">Highest Stipend: 75000/month</h2>
                    </div>

                </CardFooter>
            </Card>

        </div >
    )
}

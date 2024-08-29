import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BarGraphContainer from "./BarGraph";
import PieChartContainer from "./PieChart";

export default function Statistics() {

    return (
        <div className="">
            <Card className="">
                <CardHeader className='text-2xl md:text-3xl font-semibold'>
                    <CardTitle>Statistics</CardTitle>
                    <CardDescription>Batch 2023-24 (in LPA)</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 justify-items-center">
                    {/* <div className="grid justify-items-center"> */}
                    <BarGraphContainer />

                    <PieChartContainer />
                    {/* </div> */}
                </CardContent>
                <CardFooter>
                    <div className="w-full flex flex-col items-center text-center md:items-end">

                        <h1 className="font-semibold text-base md:text-xl">Internships for 2024 Batch</h1>
                        <h2 className="text-sm sm:text-base text-gray-600">Highest Stipend: 75000/month</h2>
                    </div>

                </CardFooter>
            </Card>

        </div >
    )
}

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BarGraphContainer from "./BarGraph";
import PieChartContainer from "./PieChart";
import {cdnurl} from "@/components/ui/ImageLoader.tsx";
import {quickLink2s} from "@/lib/constants/home.tsx";
import {Button} from "@/components/ui/button.tsx";
import { FileType} from "lucide-react";

export default function Statistics() {

    return (
        <div className="">
            <Card className="">
                <CardHeader className='text-2xl md:text-3xl font-semibold'>
                    <CardTitle>Statistics</CardTitle>
                    <CardDescription>Batch 2025 - 26 (in LPA)</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 justify-items-center">
                    {/* <div className="grid justify-items-center"> */}
                    <BarGraphContainer />

                    <PieChartContainer />
                    {/* </div> */}
                </CardContent>
                <CardFooter className="flex">
                    <div className="">
                        <a href={`${cdnurl}/${quickLink2s[1].href}`} target="_blank" rel="noopener noreferrer">
                            <Button variant='outline' className='w-[90%] sm:w-full'><FileType className='h-4 uppercase' />PLACEMENT POLICY 2025-26</Button>
                        </a>
                    </div>
                    <div className="w-full flex flex-col items-center text-center md:items-end">
                        {/*<h1 className="font-semibold text-base md:text-xl">Internships for 2025 Batch</h1>*/}
                        {/*<h2 className="text-sm sm:text-base text-gray-600">Highest Stipend: 1,15,000/month</h2>*/}
                        <h1 className=" text-base md:text-sm">*Students opted for higher education and other government jobs have</h1>
                        <h1 className=" text-base md:text-sm">not been eliminated from the percentage and is subject to change</h1>
                    </div>

                </CardFooter>
            </Card>
        </div >
    )
}

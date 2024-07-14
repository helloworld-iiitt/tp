import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDownToLine, FileText, Mail } from 'lucide-react'

export default function OnCrousalContent() {
    return (
        <div className='text-center'>
            <h1 className='text-6xl font-bold mb-3 text-green-500'>Training & Placement Cell</h1>
            <h1 className='text-5xl text-green-500'> IIIT Tiruchirappalli</h1>
            <section className='mt-5 flex justify-center gap-3' >
                <Button variant='outline'><Mail className='h-4' /> CONTACT US</Button>
                <Button variant='outline'><FileText className='h-4' /> BROCHURE</Button>
                <Button variant='outline'><ArrowDownToLine className='h-4' /> PLACEMENT DETAILS</Button>
            </section>
        </div>
    )
}
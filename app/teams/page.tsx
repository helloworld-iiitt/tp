import { heads, representatives } from '@/components/teams/data'
import MemberCard from '@/components/teams/MemberCard'
import React from 'react'

export default function page() {
    return (
        <div className=''>
            <div className='container  mt-20'>
                <h1 className='text-2xl text-center my-8'>HEAD & OFFICER</h1>
                <section className='flex justify-center gap-4'>
                    {
                        heads.map((head, idx) =>
                            <MemberCard
                                key={idx}
                                idx={idx}
                                name={head.name}
                                role={head.role}
                                imageUrl={head.imageUrl}
                                email={head.email}
                                phone={head.phone}
                                linkedinUrl={head.linkedinUrl}
                                githubUrl={head.githubUrl}
                            />
                        )
                    }
                </section>

            </div>
            <div className=' mt-20 bg-slate-100 py-10'>
                <h1 className='text-2xl my-8 text-center'>STUDENT COORDINATORS</h1>
                <section className='container flex justify-center gap-4'>
                    {
                        representatives.map((head, idx) =>
                            <MemberCard
                                key={idx}
                                idx={idx}
                                name={head.name}
                                role={head.role}
                                imageUrl={head.imageUrl}
                                email={head.email}
                                phone={head.phone}
                                linkedinUrl={head.linkedinUrl}
                                githubUrl={head.githubUrl}
                            />
                        )
                    }
                </section>
            </div>
        </div>
    )
}

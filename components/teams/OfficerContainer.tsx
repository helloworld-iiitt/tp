import { heads } from '@/lib/constants/home';
import MemberCard from '@/components/teams/MemberCard'
import React from 'react'

export default function OfficerContainer() {
    return (
        <>
            <h1 className='text-2xl md:text-3xl text-center font-semibold mb-8' >HEAD & OFFICER</h1>
            <section className='flex justify-center flex-wrap gap-4'>
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
                            linkedinUrl={head.linkedinId}
                        // githubUrl={head.githubUrl}
                        />
                    )
                }
            </section>

        </>
    )
}

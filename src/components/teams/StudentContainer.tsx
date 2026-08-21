// import { representatives } from '@/lib/constants/home'
// import MemberCard from '@/components/teams/MemberCard'
//
//
//
// export default function StudentContainer() {
//     return (
//         <>
//             <h1 className='text-2xl md:text-3xl text-center font-semibold mb-8'>STUDENT COORDINATORS</h1>
//             <section className='flex flex-wrap justify-center gap-4'>
//                 {
//                     representatives.map((head, idx) =>
//                         <MemberCard
//                             key={idx}
//                             idx={idx}
//                             name={head.name}
//                             role={head.role}
//                             imageUrl={head.imageUrl}
//                             email={head.email}
//                             phone={head.phone}
//                             linkedinUrl={head.linkedinId}
//                             // githubUrl={head.githubUrl}
//                         />
//                     )
//                 }
//             </section>
//         </>
//     )
// }


import { representatives } from '@/lib/constants/home'
import MemberCard from '@/components/teams/MemberCard'

export default function StudentContainer() {
    const groupedRepresentatives = representatives.reduce<
        Record<string, typeof representatives>
    >((groups, representative) => {
        if (!groups[representative.role]) {
            groups[representative.role] = []
        }

        groups[representative.role].push(representative)

        return groups
    }, {})

    return (
        <>
            {Object.entries(groupedRepresentatives).map(([role, members]) => (
                <section key={role} className="mb-12">
                    <h1 className="text-2xl md:text-3xl text-center font-semibold mb-8">
                        {role}
                    </h1>

                    <div className="flex flex-wrap justify-center gap-4">
                        {members.map((head, idx) => (
                            <MemberCard
                                key={`${role}-${idx}`}
                                idx={idx}
                                name={head.name}
                                role={head.role}
                                imageUrl={head.imageUrl}
                                email={head.email}
                                phone={head.phone}
                                linkedinUrl={head.linkedinId}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </>
    )
}
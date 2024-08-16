import { Airplay, Bus, Car, Footprints, Plane, Train } from "lucide-react";

export const produreSteps = [
    {
        icon: <Footprints />,
        step: 1,
        title: "Invitation",
        description: "The Training and Placement Office, IIITT sends invitations along with the Job Notification Form (INF) to Organisers to participate in the campus placement drive."
    },
    {
        icon: <Footprints />,
        step: 2,
        title: "JAF/IAF",
        description: "The organization fills the JNF containing details of the job offer (pay package, Place of posting, allowances, and other bonuses). The JNF can be sent by mail to placement@iiitt.ac.in."
    },
    {
        icon: <Footprints />,
        step: 3,
        title: "Details",
        description: "The organization details along with the job offer are made available to the students in a private group, requesting them to apply."
    },
    {
        icon: <Footprints />,
        step: 4,
        title: "Schedule",
        description: "The Training and Placement Office, IIITT allots date(s) to an organization for their placement drive and confirms it with them."
    },
    {
        icon: <Footprints />,
        step: 5,
        title: "Resumes",
        description: "The list of students who have applied is provided to the organization along with their Resumes."
    },
    {
        icon: <Footprints />,
        step: 6,
        title: "Interview",
        description: "Organizations come to the campus on the allotted date(s) and conduct tests and/or Interviews as per their recruitment process."
    },
    {
        icon: <Footprints />,
        step: 7,
        title: "Selection",
        description: "The organization is expected to furnish the list of selected candidates at the end of the assigned interview slot, preferably on the day of the campus visit."
    },
    {
        icon: <Footprints />,
        step: 8,
        title: "Offers",
        description: "The Training and Placement Office, IIITT also coordinates the signing of offer letters by the students selected to ensure that they reach the organization/company as soon as possible."
    },
]

export const locations = [
    {
        icon: <Car className='h-10 w-10 text-gray-600' />,
        descp: "We are a 20-minute drive from Tiruchirappalli Junction/Central Bus stand on the Tiruchirappalli-Madurai Highway to IIIT Tiruchirappalli."
    },
    {
        icon: <Bus className='h-10 w-10 text-gray-600' />,
        descp: "Tiruchirappalli is also well-connected to the other cities of Tamil Nadu, southern Karnataka and Kerala through Govt./Private buses."
    },
    {
        icon: <Train className='h-10 w-10 text-gray-600' />,
        descp: "Tiruchirappalli is a critical junction on the Souther Railway. It connects Chennai, Thanjavur, Madurai, Tirupati, Rameshwaram, Bengaluru, Coimbature, Kolkata, Jammu, New Delhi, Cochin and Manglaore."
    },
    {
        icon: <Plane className='h-10 w-10 text-gray-600' />,
        descp: "It has an international airport connected with Chennai, Dubai, Kuala Lumpur, Singapore and Colombo."
    },
]
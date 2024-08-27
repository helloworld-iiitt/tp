import { Bug, CodeXml, GraduationCap, Landmark, LineChart, PersonStanding, SmartphoneNfc, Wifi } from "lucide-react";
import { Globe, Home, MessageCircle, Search, UserRound, Users, UserSearch } from 'lucide-react';
import { ArrowDownToLine, FileText, Linkedin, Mail, Phone, Twitter } from "lucide-react";

// nav bar menu
export const navigation = [
    { name: 'Home', href: '/', current: true, icon: <Home /> },
    { name: 'About Us', href: '/#about-us', current: false, icon: <UserRound /> },
    { name: 'Why Recruit@IIITT', href: '/#why-recruit@IIITT', current: false, icon: <Search /> },
    { name: 'For Recruiters', href: '/for-recruiters', current: false, icon: <UserSearch /> },
    { name: 'Teams', href: '/#teams', current: false, icon: <Users /> },
    { name: 'Contact Us', href: '/#contact-us', current: false, icon: <MessageCircle /> },
]


// why us
export const clubCards = [
    {
        icon: <GraduationCap className="h-16 w-16" />,
        title: "Best of the Best make It !!",
        description:
            <>The students are admitted through the esteemed JEE Mains and represents the Top <span className="text-green-500 font-semibold">2% </span> of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.</>,
    },
    {
        icon: <Landmark className="h-16 w-16" />,
        title: "World Class Faculty",
        description:
            <>IIIT Trichy is constituted by the best faculties of India who hold exceptional teaching skills and methodologies. Apart from delivering quality education, they motivate students to engage in cutting edge research and are highly inclined towards ideation and innovation.</>,
    },
    {
        icon: <CodeXml className="h-16 w-16" />,
        title: "Coding and Competitive Programming",
        description:
            <>Not only the Students from IIITT dominate the leaderboard on CodeChef, Hackerrank, CodeForces, Leetcode but also organize Coding competitions and take up learning initiatives at IIITT like <span className="text-green-500 font-semibold" >Bi-Monthly coding competitions</span> hosted by IIIT Trichy and <span className="text-green-500 font-semibold" >Online contests</span> organised by different institutes and organizations. Students also take efforts in learning <span className="text-green-500 font-semibold" >Data Science, Machine Learning and Artificial Intelligence</span> to cope with the new trends in the world of technology.</>,
    },
    {
        icon: <Bug className="h-16 w-16" />,
        title: "Web Development",
        description:
            <>The Web Development Club of IIIT Trichy is a vibrant community of aspiring and experienced web developers coming together to learn, collaborate, and explore the ever-evolving world of web development. Members of the club worked on projects like <span className="text-green-500 font-semibold" > IIITT&apos;s official college website,IIITT Grades Portal</span>. The club offers a platform for members to grow their expertise, share their knowledge, and foster a sense of camaraderie among like-minded enthusiasts through workshops and hands-on projects.</>,
    },
    {
        icon: <SmartphoneNfc className="h-16 w-16" />,
        title: "Internet of Things",
        description:
            <>The IoT Club at IIIT Trichy opens doors to endless opportunities for students. Through <span className="text-green-500 font-semibold" >hands-on projects, workshops</span> and <span className="text-green-500 font-semibold" >industry collaborations</span>, the club equips students with practical skills and knowledge in IoT, empowering them to innovate and contribute to the exciting world of connected technologies.
            </>,
    },
    {
        icon: <Wifi className="h-16 w-16" />,
        title: "Network Security",
        description:
            <>On platforms like <span className="text-green-500 font-semibold" > PicoCTF, HackTheBox</span>  and <span className="text-green-500 font-semibold" > TryHackMe</span> , students at IIITT have participated in various CTFs on a monthly basis. They have learned how to apply their theoretical knowledge to practical scenarios and how to solve complex security challenges.</>,
    },
    {
        icon: <LineChart className="h-16 w-16" />,
        title: "workshops and industrial talks",
        description:
            <>Aimed at making the students learn and experience the latest technologies and modern trends, it consists of highly experienced speakers and organizers from top companies and firms. Not only it helps the students sync with the modern trends but also help in chosing a better career path. Some of the recent talks were focussed on <span className="text-green-500 font-semibold" >Blockchain, Robotics, VLSI Design Flow</span> using Vivado, <span className="text-green-500 font-semibold" > Machine Learning, Cyber Security, Entrepreneurship & Mental Wellness.</span></>,
    },
    {
        icon: <PersonStanding className="h-16 w-16" />,
        title: "All Round Development",
        description:
            <>Participation in Extracurricular Activities throughout the year lead to 360 degree development of an individual. Some of them include Prothymos [Sports fest], Aahladh [Cultural fest], Atrang [Technical fest], other festive celebrations and awareness drives.
            </>,
    },
];

// company

export const companies = [
    "/companies/Tejas_Networks_Logo.jpg",
    "/companies/ip-tronk.png",
    "/companies/quantum-phinance.png",
    "/companies/adp.png",
    "/companies/juspay.png",
    "/companies/ramco.png",
    "/companies/amazon.png",
    "/companies/landmark-group.png",
    "/companies/razor-group.png",
]
export const companies1 = [
    "/companies/cgi.png",
    "/companies/mindtree.png",
    "/companies/ruminds.png",
    "/companies/codetantra.png",
    "/companies/modelon.png",
    "/companies/simemens.png",
    "/companies/cognizant.png",
    "/companies/navitas.png",
    "/companies/tcs.png",
    "/companies/elcot.png",
    "/companies/nvidia.png",
]
export const companies2 = [
    "/companies/value-labs.png",
    "/companies/epam.png",
    "/companies/optum.png",
    "/companies/virtusa.png",
    "/companies/ibm.png",
    "/companies/paytm.png",
    "/companies/infosys.png",
    "/companies/publicic-sapient.png"
];

// Top students placed
export const topPlacedStudents = [
    {
        name: "John Doe",
        company: "Google",
        ctcPerAnnum: "₹ 25 LPA",
    },
    {
        name: "Jane Doe",
        company: "Microsoft",
        ctcPerAnnum: "₹ 20 LPA",
    },
    {
        name: "John Doe",
        company: "Google",
        ctcPerAnnum: "₹ 25 LPA",
    },
    {
        name: "Jane Doe",
        company: "Microsoft",
        ctcPerAnnum: "₹ 20 LPA",
    },
    {
        name: "John Doe",
        company: "Google",
        ctcPerAnnum: "₹ 25 LPA",
    },
    {
        name: "Jane Doe",
        company: "Microsoft",
        ctcPerAnnum: "₹ 20 LPA",
    },
    {
        name: "John Doe",
        company: "Google",
        ctcPerAnnum: "₹ 25 LPA",
    },
    {
        name: "Jane Doe",
        company: "Microsoft",
        ctcPerAnnum: "₹ 20 LPA",
    },
    {
        name: "John Doe",
        company: "Google",
        ctcPerAnnum: "₹ 25 LPA",
    },
    {
        name: "Jane Doe",
        company: "Microsoft",
        ctcPerAnnum: "₹ 20 LPA",
    },
    {
        name: "John Doe",
        company: "Google",
        ctcPerAnnum: "₹ 25 LPA",
    },
    {
        name: "Jane Doe",
        company: "Microsoft",
        ctcPerAnnum: "₹ 20 LPA",
    },
    {
        name: "John Doe",
        company: "Google",
        ctcPerAnnum: "₹ 25 LPA",
    },
    {
        name: "Jane Doe",
        company: "Microsoft",
        ctcPerAnnum: "₹ 20 LPA",
    },
    {
        name: "John Doe",
        company: "Google",
        ctcPerAnnum: "₹ 25 LPA",
    },
    {
        name: "Jane Doe",
        company: "Microsoft",
        ctcPerAnnum: "₹ 20 LPA",
    }
]

// crousal data
export const mainCrousalImg = [
    //"/main-slider/3.png",
    //"/main-slider/2.png",
    //"/main-slider/1.png",
    //"/main-slider/activity.png",
    //"/main-slider/ahlad.png",
    //"/main-slider/atrang.png",
    //"/main-slider/participation.png",
    //"/main-slider/prothimos.png",
    "/main-slider/firstpage.png",
    "/main-slider/aahald.png",
    "/main-slider/atrang.png",
    "/main-slider/miscellaneous.png",
    "/main-slider/achievers.png",
    "/main-slider/prothymos.png",
];

// statistics
export const barChartData = [
    { title: "CSE", highCTC: 46, avgCTC: 12, medianCTC: 7 },
    { title: "ECE", highCTC: 10, avgCTC: 7, medianCTC: 8 },
    { title: "Overall", highCTC: 46, avgCTC: 10, medianCTC: 7 }
]

export const pieChartData = [
    { title: "placed", count: 90, fill: "#17726d" },
    { title: "notPlaced", count: 10, fill: "#eae4d2" },
]

// teams
export const heads = [
    {
        name: "DR. G. DEVASENA",
        role: "Training and Placement Officer",
        imageUrl: "/teams/devasena.jpg",
        email: "placement@iiitt.ac.in",
        phone: "9042473621",
        linkedinId: "tnp-cell-iiit-tiruchirappalli",
    },
    {
        name: "DR. D. SURESH",
        role: "Additional Incharge",
        imageUrl: "/teams/Suresh.jpeg",
        email: "sureshd@iiitt.ac.in",
        phone: "8827958387",
        linkedinId: "tnp-cell-iiit-tiruchirappalli",
    },
];

export const representatives = [
    {
        name: "AKASH YADAV",
        role: "TnP Representatives",
        imageUrl: "/teams/akash_yadav.jpg",
        email: "211205@iiitt.ac.in",
        phone: "9306854791, 9518243295",
        linkedinId: "akash-yadav-23897b228",
    },
    {
        name: "AYUSH KUMAR",
        role: "Site Designer & Maintainer, TnP Rep",
        imageUrl: "/teams/ayush_kumar.jpeg",
        email: "211107@iiitt.ac.in",
        phone: "7061357391",
        linkedinId: "rtnayush",
        // githubUrl: "",
    },
    {
        name: "ATHARVA SANJAY MORE",
        role: "TnP Representatives",
        imageUrl: "/teams/atharva_more.jpg",
        email: "211105@iiitt.ac.in",
        phone: "9324373587",
        linkedinId: "atharvamor3",
        // githubUrl: "",
    },
    {
        name: "G. CHARAN",
        role: "TnP Representatives",
        imageUrl: "/teams/g_charan.jpg",
        email: "211210@iiitt.ac.in",
        phone: "6301745974",
        linkedinId: "charan-galanki-161612253",
        // githubUrl: "",
    },
    {
        name: "Sayan Das",
        role: "TnP Representatives",
        imageUrl: "/teams/sanyan_das.jpg",
        email: "232103@iiitt.ac.in",
        phone: "9612547652",
        linkedinId: "sayan-das-631751217",
        // githubUrl: "",
    },
];

// Footer
export const quickLink1s = [
    {
        icon: <Mail className='h-4' />,
        href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=placement@iiitt.ac.in",
        title: "placement@iiitt.ac.in"
    },
    {
        icon: <Phone className='h-4' />,
        href: "https://api.whatsapp.com/send?phone=9042473621",
        title: "+91 9042473621"
    },
    {
        icon: <Linkedin className='h-4' />,
        href: "https://www.linkedin.com/in/tnp-cell-iiit-tiruchirappalli",
        title: "@tnp-cell-iiit-tiruchirappalli"
    },
    {
        icon: <Twitter className='h-4' />,
        href: "https://twitter.com/IIITTrichy",
        title: "Twitter"
    },
];

export const quickLink2s = [
    {
        icon: <FileText className='h-4' />,
        href: "CONTACT US",
        title: "BROCHURE"
    },
    {
        icon: <ArrowDownToLine className='h-4' />,
        href: "",
        title: "PLACEMENT DETAILS"
    },
    {
        icon: <Globe className='h-4' />,
        href: "http://iiitt.ac.in/",
        title: "iiitt.ac.in"
    },
]
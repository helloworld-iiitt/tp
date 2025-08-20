import { Bug, CodeXml, GraduationCap, Landmark, LineChart, PersonStanding, SmartphoneNfc, Wifi } from "lucide-react";
import { Globe, Home, MessageCircle, Search, UserRound, Users, UserSearch } from 'lucide-react';
import { FileText, Linkedin, Mail, Phone, Twitter } from "lucide-react";

// nav bar menu
export const navigation = [
    { name: 'Home', href: '/', current: true, icon: <Home /> },
    { name: 'About Us', href: '/#about-us', current: false, icon: <UserRound /> },
    { name: 'Why Recruit@IIITT', href: '/#why-recruit', current: false, icon: <Search /> },
    { name: 'For Recruiters', href: '/for-recruiters', current: false, icon: <UserSearch /> },
    { name: 'Teams', href: '/#teams', current: false, icon: <Users /> },
    { name: 'Contact Us', href: '#contact-us', current: false, icon: <MessageCircle /> },
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
    "http://store.iiitt.ac.in/placement_images/companies/Tejas_Networks_Logo.jpg",
    "http://store.iiitt.ac.in/placement_images/companies/ip-tronk.png",
    "http://store.iiitt.ac.in/placement_images/companies/quantum-phinance.png",
    "http://store.iiitt.ac.in/placement_images/companies/adp.png",
    "http://store.iiitt.ac.in/placement_images/companies/juspay.png",
    "http://store.iiitt.ac.in/placement_images/companies/ramco.png",
    "http://store.iiitt.ac.in/placement_images/companies/amazon.png",
    "http://store.iiitt.ac.in/placement_images/companies/landmark-group.png",
    "http://store.iiitt.ac.in/placement_images/companies/razor-group.png",
]
export const companies1 = [
    "http://store.iiitt.ac.in/placement_images/companies/cgi.png",
    "http://store.iiitt.ac.in/placement_images/companies/mindtree.png",
    "http://store.iiitt.ac.in/placement_images/companies/ruminds.png",
    "http://store.iiitt.ac.in/placement_images/companies/codetantra.png",
    "http://store.iiitt.ac.in/placement_images/companies/modelon.png",
    "http://store.iiitt.ac.in/placement_images/companies/simemens.png",
    "http://store.iiitt.ac.in/placement_images/companies/cognizant.png",
    "http://store.iiitt.ac.in/placement_images/companies/navitas.png",
    "http://store.iiitt.ac.in/placement_images/companies/tcs.png",
    "http://store.iiitt.ac.in/placement_images/companies/elcot.png",
    "http://store.iiitt.ac.in/placement_images/companies/nvidia.png",
]
export const companies2 = [
    "http://store.iiitt.ac.in/placement_images/companies/value-labs.png",
    "http://store.iiitt.ac.in/placement_images/companies/epam.png",
    "http://store.iiitt.ac.in/placement_images/companies/optum.png",
    "http://store.iiitt.ac.in/placement_images/companies/virtusa.png",
    "http://store.iiitt.ac.in/placement_images/companies/ibm.png",
    "http://store.iiitt.ac.in/placement_images/companies/paytm.png",
    "http://store.iiitt.ac.in/placement_images/companies/infosys.png",
    "http://store.iiitt.ac.in/placement_images/companies/publicic-sapient.png"
];

// statistics
export const barChartData = [
    { title: "CSE", highCTC: 46.67, avgCTC: 18.10, medianCTC: 9.04 },
    { title: "ECE", highCTC: 46.67, avgCTC: 21.06, medianCTC: 8.00 },
    { title: "Overall", highCTC: 46.67, avgCTC: 19.28, medianCTC: 8.00 }
]

export const pieChartData = [
    { title: "placed", count: 40, fill: "#17726d" },
    { title: "notPlaced", count: 60, fill: "#eae4d2" },
]

// teams
export const heads = [
    {
        name: "Dr. Anoop Jacob Thomas",
        role: "Training and Placement Officer",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/anoop.jpg",
        email: "placement@iiitt.ac.in",
        phone: "7696265939",
        linkedinId: "anoopjt",
        
    }
];

export const representatives = [
    {
        name: "PRATEEK GAURAV",
        role: "T&P Representative",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/prateek_gaurav.jpg",
        email: "242103@iiitt.ac.in",
        phone: "8093297445",
        linkedinId: "prateekgaurav7296",
    },
    {
        name: "HEMANSHU CHOUDHARY",
        role: "T&P Representative",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/hemanshu.jpg",
        email: "221220@iiitt.ac.in",
        phone: "7021552408",
        linkedinId: "hemanshuchoudhary",
        // githubUrl: "",
    },
    {
        name: "THIVYA PU",
        role: "T&P Representative",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/thivya.jpg",
        email: "242105@iiitt.ac.in",
        phone: "7010298470",
        linkedinId: "thivya-pu-446848378",
        // githubUrl: "",
    },
    {
        name: "KARTIKEYA SINGH",
        role: "T&P Representative",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/kartikeya.jpg",
        email: "221120@iiitt.ac.in",
        phone: "8052835194",
        linkedinId: "singhkartikeya28",
        // githubUrl: "",
    },
    {
        name: "ARVIND MISHRA",
        role: "T&P Representative",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/arvind.jpg",
        email: "221207@iiitt.ac.in",
        phone: "8005542019",
        linkedinId: "arvind-mishra-34b560257",
        // githubUrl: "",
    },
    {
        name: "PRASAD VENKAT",
        role: "T&P Representative",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/venkat.jpg",
        email: "221140@iiitt.ac.in",
        phone: "7331134884",
        linkedinId: "prasadvenkat1008",
        // githubUrl: "",
    },
    {
        name: "CHARAN PAL",
        role: "T&P Representative",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/charan.jpg",
        email: "242201@iiitt.ac.in",
        phone: "9701422789",
        linkedinId: "charan-pal-74710a244",
        // githubUrl: "",
    },   {
        name: "RITUL MISHRA",
        role: "T&P Representative",
        imageUrl: "http://store.iiitt.ac.in/placement_images/teams/ritul.jpg",
        email: "221243@iiitt.ac.in",
        phone: "8755862526",
        linkedinId: "ritul-mishra-6783b4269",
        // githubUrl: "",
    }
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
        href: "https://api.whatsapp.com/send?phone=7696265939",
        title: "+91 7696265939"
    },
    {
        icon: <Linkedin className='h-4' />,
        href: "https://www.linkedin.com/in/iiitt-tnp",
        title: "@iiitt-tnp"
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
        href: "http://store.iiitt.ac.in/placement_images/docs/Placement Brochure IIIT Trichy 2026.pdf",
        title: "BROCHURE"
    },
    // {
    //     icon: <ArrowDownToLine className='h-4' />,
    //     href: "",
    //     title: "PLACEMENT DETAILS"
    // },
    {
        icon: <Globe className='h-4' />,
        href: "http://iiitt.ac.in/",
        title: "iiitt.ac.in"
    },
]

// Gallary

export const pics = [
    'http://store.iiitt.ac.in/placement_images/gallary/pic(1).jpeg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(19).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(29).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(4).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(5).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(1).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(2).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(3).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(4).png', 'http://store.iiitt.ac.in/placement_images/gallary/pic(50).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(1).png', 'http://store.iiitt.ac.in/placement_images/gallary/pic(2).png', 'http://store.iiitt.ac.in/placement_images/gallary/pic(30).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(40).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(51).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(10).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(20).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(31).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(41).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(52).jpg'
];
export const pic1s = [
    'http://store.iiitt.ac.in/placement_images/gallary/pic(11).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(21).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(32).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(42).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(53).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(12).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(22).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(33).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(43).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(6).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(13).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(23).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(34).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(44).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(7).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(14).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(24).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(35).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(45).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(8).jpg'
];
export const pic2s = [
    'http://store.iiitt.ac.in/placement_images/gallary/pic(15).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(25).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(36).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(46).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(9).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(16).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(26).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(37).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(47).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(17).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(27).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(38).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(48).jpg',
    'http://store.iiitt.ac.in/placement_images/gallary/pic(18).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(28).JPG', 'http://store.iiitt.ac.in/placement_images/gallary/pic(39).jpg', 'http://store.iiitt.ac.in/placement_images/gallary/pic(49).jpg'
];

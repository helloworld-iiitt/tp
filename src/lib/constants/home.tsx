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
    "Tejas_Networks_Logo.jpg",
    "ip-tronk.png",
    "quantum-phinance.png",
    "adp.png",
    "juspay.png",
    "ramco.png",
    "amazon.png",
    "landmark-group.png",
    "razor-group.png",
]
export const companies1 = [
    "cgi.png",
    "mindtree.png",
    "ruminds.png",
    "codetantra.png",
    "modelon.png",
    "simemens.png",
    "cognizant.png",
    "navitas.png",
    "tcs.png",
    "elcot.png",
    "nvidia.png",
]
export const companies2 = [
    "value-labs.png",
    "epam.png",
    "optum.png",
    "virtusa.png",
    "ibm.png",
    "paytm.png",
    "infosys.png",
    "publicic-sapient.png"
];

// statistics
export const barChartData = [
    { title: "CSE", highCTC: 46.67, avgCTC: 18.67, medianCTC: 12.50 },
    { title: "ECE", highCTC: 46.67, avgCTC: 20.48, medianCTC: 8.00 },
    { title: "Overall", highCTC: 46.67, avgCTC: 19.51, medianCTC: 10.52 }
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
        imageUrl: "anoop.jpg",
        email: "placement@iiitt.ac.in",
        phone: "7696265939",
        linkedinId: "anoopjt",

    }
];

export const representatives = [ //NOTE: stored in /teams folder
    {
        name: "PRATEEK GAURAV",
        role: "T&P Representative",
        imageUrl: "prateek_gaurav.jpg",
        email: "242103@iiitt.ac.in",
        phone: "8093297445",
        linkedinId: "prateekgaurav7296",
    },
    {
        name: "HEMANSHU CHOUDHARY",
        role: "T&P Representative",
        imageUrl: "hemanshu.jpg",
        email: "221220@iiitt.ac.in",
        phone: "7021552408",
        linkedinId: "hemanshuchoudhary",
        // githubUrl: "",
    },
    {
        name: "KOSHTUBH SHARAN RAJ",
        role: "T&P Representative",
        imageUrl: "koustubh.jpg",
        email: "252203@iiitt.ac.in",
        phone: "8448771138",
        linkedinId: "koshtubh-raj-556a8424a",
        //     // githubUrl: "",
    },
    // {
    //     name: "THIVYA PU",
    //     role: "T&P Representative",
    //     imageUrl: "thivya.jpg",
    //     email: "242105@iiitt.ac.in",
    //     phone: "7010298470",
    //     linkedinId: "thivya-pu-446848378",
    //     // githubUrl: "",
    // },
    {
        name: "KARTIKEYA SINGH",
        role: "T&P Representative",
        imageUrl: "kartikeya.jpg",
        email: "221120@iiitt.ac.in",
        phone: "8052835194",
        linkedinId: "singhkartikeya28",
        // githubUrl: "",
    },
    {
        name: "ARVIND MISHRA",
        role: "T&P Representative",
        imageUrl: "arvind.jpg",
        email: "221207@iiitt.ac.in",
        phone: "8005542019",
        linkedinId: "arvind-mishra-34b560257",
        // githubUrl: "",
    },
    // {
    //     name: "PRASAD VENKAT",
    //     role: "T&P Representative",
    //     imageUrl: "venkat.jpg",
    //     email: "221140@iiitt.ac.in",
    //     phone: "7331134884",
    //     linkedinId: "prasadvenkat1008",
    //     // githubUrl: "",
    // },
    {
        name: "CHARAN PAL",
        role: "T&P Representative",
        imageUrl: "charan.jpg",
        email: "242201@iiitt.ac.in",
        phone: "9701422789",
        linkedinId: "charan-pal-74710a244",
        // githubUrl: "",
    }, {
        name: "RITUL MISHRA",
        role: "T&P Representative",
        imageUrl: "ritul.jpg",
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
        href:"docs/IIITT 26 brochure.pdf",
        //href: "/docs/Placement Brochure IIIT Trichy 2026.pdf",Note: Older Document
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

export const pics = [ //NOTE: stored in /gallary folder
    'pic(1).jpeg', 'pic(19).JPG', 'pic(29).JPG', 'pic(4).jpg', 'pic(5).jpg',
    'pic(1).jpg', 'pic(2).jpg', 'pic(3).jpg', 'pic(4).png', 'pic(50).jpg',
    'pic(1).png', 'pic(2).png', 'pic(30).JPG', 'pic(40).jpg', 'pic(51).jpg',
    'pic(10).jpg', 'pic(20).JPG', 'pic(31).JPG', 'pic(41).jpg', 'pic(52).jpg'
];
export const pic1s = [
    'pic(11).jpg', 'pic(21).JPG', 'pic(32).JPG', 'pic(42).jpg', 'pic(53).jpg',
    'pic(12).jpg', 'pic(22).JPG', 'pic(33).JPG', 'pic(43).jpg', 'pic(6).jpg',
    'pic(13).jpg', 'pic(23).JPG', 'pic(34).JPG', 'pic(44).jpg', 'pic(7).jpg',
    'pic(14).jpg', 'pic(24).JPG', 'pic(35).JPG', 'pic(45).jpg', 'pic(8).jpg'
];
export const pic2s = [
    'pic(15).jpg', 'pic(25).JPG', 'pic(36).JPG', 'pic(46).jpg', 'pic(9).jpg',
    'pic(16).jpg', 'pic(26).JPG', 'pic(37).JPG', 'pic(47).jpg',
    'pic(17).JPG', 'pic(27).JPG', 'pic(38).JPG', 'pic(48).jpg',
    'pic(18).JPG', 'pic(28).JPG', 'pic(39).jpg', 'pic(49).jpg'
];

import { Bug, CodeXml, GraduationCap, Landmark, LineChart, PersonStanding, SmartphoneNfc, Wifi } from "lucide-react";
import { Globe, Home, MessageCircle, Search, UserRound, Users, UserSearch ,FileType} from 'lucide-react';
import { FileText, Linkedin, Mail, Phone, Twitter } from "lucide-react";

// nav bar menu
export const navigation = [
    { name: 'Home', href: '/', current: true, icon: <Home /> },
    { name: 'About Us', href: '/#about-us', current: false, icon: <UserRound /> },
    { name: 'Why Recruit@IIITT', href: '/#why-recruit', current: false, icon: <Search /> },
    { name: 'For Recruiters', href: '/for-recruiters', current: false, icon: <UserSearch /> },
    { name: 'Our Team', href: '/ourteam', current: false, icon: <Users /> },
    {name: 'Calender', href: '/calender', current: false, icon: <Globe />},
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
    { title: "CSE", highCTC: 26, avgCTC: 10.8, medianCTC: 8 },
    { title: "ECE", highCTC: 12.5, avgCTC: 8, medianCTC: 8 },
    { title: "Overall", highCTC: 26, avgCTC: 9.96, medianCTC: 8}
]

export const pieChartData = [
    { title: "placed", count: 43, fill: "#17726d" },
    { title: "notPlaced", count: 62, fill: "#eae4d2" },
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

export const representatives = [
    {
        "name": "KANISHWAR S",
        "role": "T&P Representative",
        "imageUrl": "kanishwar.jpeg",
        "email": "241123@iiitt.ac.in",
        "phone": "9940683179",
        "linkedinId": "kanishwar-s-a72b48340"
    },
    {
        "name": "VIGNESH R.S",
        "role": "T&P Representative",
        "imageUrl": "vignesh.jpeg",
        "email": "rsvignesh141@gmail.com",
        "phone": "7339161651",
        "linkedinId": "vignesh-r-s-74285b332"
    },
    {
        "name": "ARUNDHATHI M",
        "role": "T&P Representative",
        "imageUrl": "arundhathi.jpeg",
        "email": "241107@iiitt.ac.in",
        "phone": "8015361484",
        "linkedinId": "arundhathi-mohan-1b0456336"
    },
    {
        "name": "BHUVAN M ACHARYA",
        "role": "T&P Representative",
        "imageUrl": "bhuvan.jpg",
        "email": "bhuvanm200623@gmail.com",
        "phone": "9606654776",
        "linkedinId": "bhuvan-m-acharya-7b9256335"
    },
    {
        "name": "RAJ ARYAN MAHATO",
        "role": "Student and Corporate Relations",
        "imageUrl": "raj.jpg",
        "email": "251145@iiitt.ac.in",
        "phone": "7488620573",
        "linkedinId": "raj-aryan-mahato-630724369"
    },
    {
        "name": "AMIRTHABALU BALAMURUGAN",
        "role": "Student and Corporate Relations",
        "imageUrl": "amirthabalu.png",
        "email": "251301@iiitt.ac.in",
        "phone": "9361157855",
        "linkedinId": "amirthabalu-balamurugan-20528b383"
    },
    {
        "name": "NITISH SHIVRAM YADAV",
        "role": "Student and Corporate Relations",
        "imageUrl": "nitish.jpg",
        "email": "251420@iiitt.ac.in",
        "phone": "7620481441",
        "linkedinId": "nitish-yadav-a0ab653a5"
    },
    {
        "name": "K YS JAGANMOHAN REDDY",
        "role": "Email Tracking",
        "imageUrl": "reddy.jpg",
        "email": "251411@iiitt.ac.in",
        "phone": "7569271958",
        "linkedinId": "karra-yeduguri-sandinti-jagan-mohan-reddy-05ba38409"
    },

    {
        "name": "JEYAPRAKAASH P S",
        "role": "Data management",
        "imageUrl": "jeyaprakaash.jpg",
        "email": "251222@iiitt.ac.in",
        "phone": "9361274646",
        "linkedinId": "jeyaprakaash-ps-7552a537b"
    },
    {
        "name": "AYUSH KUNTAL",
        "role": "Data management",
        "imageUrl": "ayush.jpg",
        "email": "251306@iiitt.ac.in",
        "phone": "9625911049",
        "linkedinId": "ayush-kuntal-381279378"
    },
    {
        "name": "SWATI SINGH",
        "role": "Samarth ERP",
        "imageUrl": "swati.jpg",
        "email": "251256@iiitt.ac.in",
        "phone": "8409490131",
        "linkedinId": "swati-singh-5b67ba381"
    },
    {
        "name": "NARESH ARVINDH T",
        "role": "Samarth ERP",
        "imageUrl": "naresh.jpg",
        "email": "251321@iiitt.ac.in",
        "phone": "8754063641",
        "linkedinId": "naresh-arvindh-t-1b3947380"
    },
    {
        "name": "PURAMSETTI LAKSHMI KEERTHI",
        "role": "Email Tracking",
        "imageUrl": "lakshmi.jpg",
        "email": "251244@iiitt.ac.in",
        "phone": "9391288622",
        "linkedinId": "lakshmi-keerthi-puramsetti-8103b236a"
    },
    {
        "name": "MINHA FATHIMA KP",
        "role": "Email Tracking",
        "imageUrl": "minha.jpg",
        "email": "251229@iiitt.ac.in",
        "phone": "9605791103",
        "linkedinId": ""
    },
    {
        "name": "THANUJ IMAYAVARAMBAN M",
        "role": "Website Management",
        "imageUrl": "thanuj.jpeg",
        "email": "251332@iiitt.ac.in",
        "phone": "7339003506",
        "linkedinId": "thanuj-imayavaramban-m-0a12b0380"
    },
    {
        "name": "ANANYA RAJ",
        "role": "Website Management",
        "imageUrl": "ananya.jpg",
        "email": "251205@iiitt.ac.in",
        "phone": "9341671705",
        "linkedinId": "ananya-raj-49bb1a42b"
    },
    {
        "name": "BADHRINATH NAGIDI",
        "role": "Event and Calender Management",
        "imageUrl": "badhrinath.jpeg",
        "email": "badhrinath1207@gmail.com",
        "phone": "8008299967",
        "linkedinId": "badhrinath-nagidi-8ab78937a"
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
        href:"docs/Placement Brochure IIIT Trichy 2026.pdf",
        //href: "/docs/Placement Brochure IIIT Trichy 2026.pdf",Note: Older Document
        title: "BROCHURE"
    },
    // {
    //     icon: <ArrowDownToLine className='h-4' />,
    //     href: "",
    //     title: "PLACEMENT DETAILS"
    // },

    {
        icon: <FileType className='h-4' />,
        href: "docs/IIIT_Trichy_Placement_Policy_2025-26.pdf",
        title: "PLACEMENT POLICY 2025-26"
    },
    {
        icon: <Globe className='h-4' />,
        href: "http://iiitt.ac.in/",
        title: "iiitt.ac.in"
    }
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

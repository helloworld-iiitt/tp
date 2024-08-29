import AboutIIITT from "@/components/main/AboutIIITT";
import DeskPost from "@/components/main/DeskPost";
import HeroSection from "@/components/main/HeroSection";
import OfficerContainer from "@/components/teams/OfficerContainer";
import StudentContainer from "@/components/teams/StudentContainer";
import WhyRecruitUs from "@/components/why-recruit-us/WhyUs";
import CompaniesCard from "@/components/why-recruit-us/CompaniesCard";
import Statistics from "@/components/statistic/Statistics";
import Gallary from "@/components/gallary/Gallary";

export default function Home() {
    return (
        <>
            {/* <Main /> */}
            <HeroSection />

            <div id='about-us' className="container  py-20 pt-20">
                {/* About iiitt */}
                <AboutIIITT />
            </div>

            {/* From director&TPO desk */}
            <div className="bg-[#f8ffeb] py-20">
                <div className="container">
                    <DeskPost />
                </div>
            </div>

            {/* why recruit us */}
            <div id='why-recruit@IIITT' className="container py-20 pt-20">
                <WhyRecruitUs />
            </div>

            <div className="bg-[#f8ffeb] py-20">
                <div className="container">
                    <Statistics />
                </div>
            </div>

            <div className="container py-20">
                <CompaniesCard />
            </div>

            <div id="teams" className="bg-[#f8ffeb] py-20 pt-20">
                <div className="container">
                    <OfficerContainer />
                </div>
            </div>

            <div className="py-20">
                <div className="container">
                    <StudentContainer />
                </div>
            </div>

            <div className="bg-[#f8ffeb] py-20 pt-20">
                <div className="container">
                    <Gallary />
                </div>
            </div>
        </>
    );
}
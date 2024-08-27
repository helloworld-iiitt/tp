import AboutIIITT from "@/components/main/AboutIIITT";
import DeskPost from "@/components/main/DeskPost";
import HeroSection from "@/components/main/HeroSection";
import OfficerContainer from "@/components/teams/OfficerContainer";
import StudentContainer from "@/components/teams/StudentContainer";
import WhyRecruitUs from "@/components/why-recruit-us/WhyUs";
import CompaniesCard from "@/components/why-recruit-us/CompaniesCard";
import Statistics from "@/components/statistic/Statistics";

export default function Home() {
  return (
    <>
      {/* <Main /> */}
      <HeroSection />

      <div className="container my-20">
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
      <div className="container pb-6">
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

      <div className="bg-[#f8ffeb] py-20">
        <div className="container">
          <OfficerContainer />
        </div>
      </div>

      <div id="teams" className="py-20 pt-20">
        <div className="container">
          <StudentContainer />
        </div>
      </div>
    </>
  );
}

import AboutIIITT from "@/components/main/AboutIIITT";
import DeskPost from "@/components/main/DeskPost";
import HeroSection from "@/components/main/HeroSection";
import MainCrousal from "@/components/main/MainCrousal";
import OfficerContainer from "@/components/teams/OfficerContainer";
import StudentContainer from "@/components/teams/StudentContainer";
import TeamContainer from "@/components/teams/StudentContainer";
import WhyRecruitUs from "@/components/why-recruit-us";
import CompaniesCard from "@/components/why-recruit-us/CompaniesCard";
import PlacedStudentCard from "@/components/why-recruit-us/PlacedStudentCard";
import Statistics from "@/components/why-recruit-us/statistic/Statistics";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <MainCrousal /> */}

      <div className="container my-20">
        {/* About iiitt */}
        <AboutIIITT />
      </div>

      <div className="bg-[#f8ffeb] py-20">
        <div className="container">
          {/* From director&TPO desk */}
          <DeskPost />
        </div>
      </div>

      {/* why recruit us */}
      <div className="container pb-6">
        <WhyRecruitUs />
      </div>

      <div className="bg-[#f8ffeb] py-20">
        <div className="container">
          {/* From director&TPO desk */}
          <Statistics />
        </div>
      </div>

      <div className="container py-20">
        {/* <PlacedStudentCard /> */}
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

      {/* <div className="bg-[#f8ffeb] py-20">
        <div className="container">
        </div>
      </div> */}
    </>
  );
}

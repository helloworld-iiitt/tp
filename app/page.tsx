import AboutIIITT from "@/components/main/AboutIIITT";
import DeskPost from "@/components/main/DeskPost";
import MainCrousal from "@/components/main/MainCrousal";
import WhyRecruitUs from "@/components/why-recruit-us";

export default function Home() {
  return (
    <>
      <MainCrousal />

      <div className="container my-16">
        {/* About iiitt */}
        <AboutIIITT />

        {/* From director&TPO desk */}
        <DeskPost />

        {/* why recruit us */}
        <WhyRecruitUs />
      </div>
    </>
  );
}

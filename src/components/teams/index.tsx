import StudentContainer from "@/components/teams/StudentContainer.tsx";
import OfficerContainer from "@/components/teams/OfficerContainer.tsx";

const Index = () => {
    return (
        <div>
            <div className="py-20 bg-slate-50">
                <div id="teams" className="bg-[#f8ffeb] py-20 pt-20">
                    <div className="container">
                        <OfficerContainer />
                    </div>
                </div>

                <div className="container  pt-10">
                    <StudentContainer />
                </div>
            </div>
        </div>
    );
};

export default Index;
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import styles from '@/styles/MemberCard.module.css';
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cdnurl } from "../ui/ImageLoader";
import ImageLoader from "../ui/ImageLoader";
const colors = ["#3DA3F4", "#F36E67", "#91CE93", "#FFD763"];
const patterns = [`${cdnurl}/patterns/double-bubble-outline.png`, "more-leaves.png", "moroccan-flower.png", "spikes.png"];

export default function MemberCard({ idx, name, role, imageUrl, linkedinUrl, phone, email }: { idx: number, name: string, role: string, imageUrl: string, linkedinUrl: string, githubUrl?: string, phone: string, email: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            <Card
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors[idx % 4];
                    setIsHovered(true);
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "";
                    setIsHovered(false);
                }}
                className="text-center border-0 rounded-lg w-[340px] hover:text-white transition-all duration-300 border-b-4"
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", borderColor: colors[idx % 4] }}
            >


                <CardHeader
                    style={{
                        background: isHovered ? "" : `url('/patterns/${patterns[idx % 4]}')`,
                        backgroundSize: 'cover',
                        transition: "all 0.3s ease",
                    }}
                    className="p-0 flex justify-center items-center h-[200px] rounded-t-lg"
                >
                    <div className={`${styles.circle} ${isHovered ? styles.circlehover + " rounded-none object-fill m-0 border-none w-[180px] h-[180px]" : "m-[25px] border-4 shadow-lg border-white overflow-hidden object-fill h-[140px] w-[140px]"} relative`}
                    >
                        <ImageLoader
                            imgUrl={`teams/2026-27/${imageUrl}`}
                            className='h-40 w-48 object-fill'
                        />               </div>
                </CardHeader>
                <CardContent className="my-2 pb-0">
                    <h1 className="font-bold text-lg tracking-tighter">{name}</h1>
                    <p className={`text-[#808080] ${isHovered ? "text-white" : ""}`}>{role}</p>
                </CardContent>
                <CardFooter
  className={`flex flex-col items-center justify-center gap-2 text-[#808080] ${isHovered ? "text-white" : ""}`}
>
  {/* Phone Number (visible as text + clickable) */}
                    {(role === "T&P Representative" || role === "Student and Corporate Relations" || role ==="Training and Placement Officer") && (<div className="flex items-center gap-2">
                        <Phone className="h-5 w-5"/>
                        <a href={"tel:+91" + phone.split(",")[0]} className="text-base font-medium">
                            +91 {phone.split(",")[0]}
                        </a>
                    </div>)}

  {/* Social Icons (LinkedIn + Email) */}
  <section className="flex justify-center items-center gap-6 mt-2">
    {/* LinkedIn */}
    <a
      href={"https://www.linkedin.com/in/" + linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* your LinkedIn SVG unchanged */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </a>

    {/* Email */}
      {(role === "T&P Representative" || role ==="Training and Placement Officer" || role ==="Student and Corporate Relations") && (
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
              <Mail className="h-7 w-7" />
          </a>
      )}
  </section>
</CardFooter>
            </Card>
        </motion.div>

    )
}

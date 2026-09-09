import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import styles from "@/styles/MemberCard.module.css";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cdnurl } from "../ui/ImageLoader";
import ImageLoader from "../ui/ImageLoader";

const colors = ["#3DA3F4", "#F36E67", "#91CE93", "#FFD763"];

const patterns = [
    `${cdnurl}/patterns/double-bubble-outline.png`,
    "more-leaves.png",
    "moroccan-flower.png",
    "spikes.png",
];

export default function MemberCard({
    idx,
    name,
    designation,
    department,
    role,
    imageUrl,
    phone,
    email,
    showContact = true,
}: {
    idx: number;
    name: string;
    designation?: string;
    department?: string;
    role: string;
    imageUrl: string;
    phone?: string;
    email?: string;
    showContact?: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 1 }}
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
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderColor: colors[idx % 4],
                }}
            >
                <CardHeader
                    style={{
                        background: isHovered
                            ? ""
                            : `url('/patterns/${patterns[idx % 4]}')`,
                        backgroundSize: "cover",
                        transition: "all 0.3s ease",
                    }}
                    className="p-0 flex justify-center items-center h-[200px] rounded-t-lg"
                >
                    <div
                        className={`${styles.circle} ${
                            isHovered
                                ? styles.circlehover +
                                  " rounded-none object-fill m-0 border-none w-[180px] h-[180px]"
                                : "m-[25px] border-4 shadow-lg border-white overflow-hidden object-fill h-[140px] w-[140px]"
                        } relative`}
                    >
                        <ImageLoader
                            imgUrl={`teams/2026-27/${imageUrl}`}
                            className="h-40 w-48 object-fill"
                        />
                    </div>
                </CardHeader>

                <CardContent className="my-2 pb-0">
                    <h1 className="font-bold text-lg tracking-tighter">
                        {name}
                    </h1>

                    {/* Academic designation */}
                    {designation && (
                        <p
                            className={`text-[#808080] ${
                                isHovered ? "text-white" : ""
                            }`}
                        >
                            {designation}
                        </p>
                    )}

                    {/* Department */}
                    {department && (
                        <p
                            className={`text-[#808080] ${
                                isHovered ? "text-white" : ""
                            }`}
                        >
                            {department}
                        </p>
                    )}

                    {/* Official role */}
                    <p
                        className={`text-[#808080] font-medium ${
                            isHovered ? "text-white" : ""
                        }`}
                    >
                        {role}
                    </p>
                </CardContent>

                {showContact && (
                    <CardFooter
                        className={`flex flex-col items-center justify-center gap-2 text-[#808080] ${
                            isHovered ? "text-white" : ""
                        }`}
                    >
                        {/* Phone */}
                        {phone && (
                            <div className="flex items-center gap-2">
                                <Phone className="h-5 w-5" />

                                <a
                                    href={`tel:+91${phone.split(",")[0]}`}
                                    className="text-base font-medium"
                                >
                                    +91 {phone.split(",")[0]}
                                </a>
                            </div>
                        )}

                        {/* Email */}
                        {email && (
                            <section className="flex justify-center items-center gap-6 mt-2">
                                <a
                                    href={`mailto:${email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail className="h-7 w-7" />
                                </a>
                            </section>
                        )}
                    </CardFooter>
                )}
            </Card>
        </motion.div>
    );
}

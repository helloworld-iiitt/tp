"use client"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/MemberCard.module.css';
import { useState } from "react";
import { Mail, Phone } from "lucide-react";


const colors = ["#3DA3F4", "#F36E67", "#91CE93", "#FFD763"];
const patterns = ["double-bubble-outline.png", "more-leaves.png", "moroccan-flower.png", "spikes.png"];

export default function MemberCard({ idx, name, role, imageUrl, linkedinUrl, githubUrl, phone, email }: { idx: number, name: string, role: string, imageUrl: string, linkedinUrl: string, githubUrl?: string, phone: string, email: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
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
                    <Image
                        src={imageUrl || "/teams/logo.png"}
                        alt=""
                        className="object-cover"
                        fill
                    />
                </div>
            </CardHeader>
            <CardContent className="my-2 pb-0">
                <h1 className="font-bold text-lg tracking-tighter">{name}</h1>
                <p className={`text-[#808080] ${isHovered ? "text-white" : ""}`}>{role}</p>
            </CardContent>
            <CardFooter className={`flex flex-col items-center justify-center  gap-2 text-[#808080] ${isHovered ? "text-white" : ""}`}>
                <section className="flex justify-center items-center gap-1">
                    <Link href={"https://www.linkedin.com/in/" + linkedinUrl} className="flex items-center gap-2" target="_blank">
                        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        <span className="text-[0.8rem]">
                            {"@" + linkedinUrl}
                        </span>
                    </Link>
                    {/* <Link href={githubUrl}>
                        <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </Link> */}
                </section>
                <section className="text-sm">
                    <Link href={"tel:+91" + phone.split(',')[0]} className="flex items-center gap-1">
                        <Phone className="h-4" />
                        +91 {phone}
                    </Link>
                    <Link href={"mailto:" + email} className="flex justify-center items-center gap-1">
                        <Mail className="h-4" />
                        {email}
                    </Link>
                </section>
            </CardFooter>
        </Card>

    )
}

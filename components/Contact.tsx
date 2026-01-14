import BentoCard from "./BentoCard";
import SocialIcon from "./SocialIcon";
import Mail from "@/public/SocialImg/mail.png";
import LinkedIn from "@/public/SocialImg/linkedin.png";
import Resume from "@/public/resume.png";

export default function ContactSection() {
    return (
        <section className="col-span-3 grid grid-cols-3 gap-3">

            {/* SOCIALS */}
            <BentoCard className="col-span-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    {/* Left text */}
                    <h2 className="font-semibold text-base sm:text-lg">Socials</h2>

                    {/* Right icons */}
                    <div className="flex gap-4 sm:gap-6">
                        <SocialIcon
                            href="https://www.linkedin.com/in/slokesh1810/"
                            icon={LinkedIn}
                            label="LinkedIn"
                        />
                        <SocialIcon
                            href="mailto:slokesh1810@gmail.com"
                            icon={Mail}
                            label="Mail"
                        />
                    </div>
                </div>
            </BentoCard>

            {/* RESUME */}
            <BentoCard>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    {/* Left text */}
                    <h2 className="font-semibold text-base sm:text-lg">Resume</h2>

                    {/* Right icon */}
                    <div className="flex">
                        <SocialIcon
                            href="/Resume - Lokesh.pdf"
                            icon={Resume}
                            label="Resume"
                        />
                    </div>
                </div>
            </BentoCard>

        </section>
    );
}

import BentoCard from "./BentoCard";
import SocialIcon from "./SocialIcon";
import Mail from "@/public/SocialImg/mail.png";
import LinkedIn from "@/public/SocialImg/linkedin.png";
import Resume from "@/public/resume.png";

export default function ContactSection() {
    return (
        <section className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

            {/* SOCIALS */}
            <BentoCard>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    {/* Left text */}
                    <h2 className="font-semibold text-base sm:text-lg">Socials</h2>

                    {/* Right icons */}
                    <div className="flex gap-4 sm:gap-6">
                        <SocialIcon
                            href="https://linkedin.com"
                            icon={LinkedIn}
                            label="LinkedIn"
                        />
                        <SocialIcon
                            href="mailto:yourmail@example.com"
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
                            href="/resume.pdf"
                            icon={Resume}
                            label="Resume"
                        />
                    </div>
                </div>
            </BentoCard>

        </section>
    );
}

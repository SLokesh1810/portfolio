import BentoCard from "./BentoCard";
import LinkedIn from "@/public/SocialImg/linkedin.png";
import GitHub from "@/public/SocialImg/github-sign.png";
import Insta from "@/public/SocialImg/instagram.png";
import SocialIcon from "./SocialIcon";

export default function SocailSection() {
    return (
        <BentoCard className="col-span-1">
            <h2 className="font-semibold mb-4 sm:mb-6 lg:mb-9">Socials</h2>
            <div className="flex gap-4 sm:gap-6 lg:gap-10 justify-center flex-wrap">
                <SocialIcon
                    href="https://linkedin.com"
                    icon={LinkedIn}
                    label="LinkedIn"
                />
                <SocialIcon
                    href="https://github.com"
                    icon={GitHub}
                    label="GitHub"
                />
                <SocialIcon
                    href="https://instagram.com"
                    icon={Insta}
                    label="Instagram"
                />
            </div>
        </BentoCard>
    );
}
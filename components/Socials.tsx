import BentoCard from "./BentoCard";
import GitHub from "@/public/SocialImg/github-sign.png";
import Kaggle from "@/public/SocialImg/kaggle.png";
import Leetcode from "@/public/SocialImg/leetcode.png";
import CodeChef from "@/public/SocialImg/codechef.png";
import SocialIcon from "./SocialIcon";

export default function SocailSection() {
    return (
        <BentoCard className="bg-alter-card col-span-1 lg:col-span-2">
            <h2 className="font-semibold mb-4 sm:mb-6 text-item">Socials</h2>
            <div className="flex gap-10 md:gap-8 justify-center flex-wrap">
                <SocialIcon
                    href="https://github.com/SLokesh1810"
                    icon={GitHub}
                    label="GitHub"
                />
                <SocialIcon
                    href="https://www.kaggle.com/lokeshs18/code"
                    icon={Kaggle}
                    label="Kaggle"
                />
                <SocialIcon
                    href="https://leetcode.com/u/S_Lokesh_18/"
                    icon={Leetcode}
                    label="Leetcode"
                />
                <SocialIcon
                    href="https://www.codechef.com/users/slokesh1810"
                    icon={CodeChef}
                    label="CodeChef"
                />
            </div>
        </BentoCard>
    );
}
import Image from "next/image";
import BentoCard from "./BentoCard";
import PortfolioImage from "@/public/Portfolio Image1.png";
import AIMLImg from '@/public/RolesImg/AI & ML icon image.png';
import BackendDev from '@/public/RolesImg/Backend dev.png';
import SoftwareEng from '@/public/RolesImg/Software engineer.png';
import Opensrc from '@/public/RolesImg/Open source.png';
import WorkItem from "./WorkItem";
import { group } from "console";

export default function HeroSection() {
    const classStyle = `
                    group
                    flex flex-col items-center justify-center
                    gap-1.5 sm:gap-2
                    rounded-lg
                    bg-blue-50
                    p-2 sm:p-3
                    shadow-sm
                    hover:scale-105
                    transition-transform
                    duration-400
                    ease-in-out
                    cursor-pointer
                    text-center
                    `;
    return (
        <>
            {/* HERO TEXT */}
            <BentoCard
                className="col-span-3
                grid
                grid-cols-3">
                <section
                    className="
                    col-span-2
                    relative
                    overflow-hidden
                    flex flex-col justify-center
                    min-h-[200px] sm:min-h-[240px]"
                >
                    {/* Subtle structural accent */}
                    <div
                        className="
                        absolute
                        inset-y-0
                        left-0
                        w-1
                        bg-gradient-to-b
                        from-transparent
                        via-accent/40
                        to-transparent"
                    />

                    {/* Main content */}
                    <div className="relative z-10">
                        <p className="text-muted">Hi, I’m</p>

                        <h1 className="font-bold mt-0">Lokesh S</h1>

                        <p className="text-muted mt-4">
                            Software Engineer (ML & Backend)
                        </p>

                        <p className="text-muted max-w-2xl mt-4">
                            Building scalable systems and applied ML solutions
                        </p>
                    </div>

                </section>
                {/* <section
                    className="col-span-1 relative flex items-center justify-center min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                    <Image
                        src={PortfolioImage}
                        alt="Profile illustration"
                        fill
                        priority
                        className="object-contain rounded-lg"
                    />
                </section> */}
            </BentoCard>

            {/* WHAT I'VE DONE */}
            <BentoCard className="col-span-1">
                <h2 className="font-semibold mb-2 sm:mb-3">What I've done</h2>
                <ul className="space-y-1.5 sm:space-y-2 text-muted text-sm sm:text-base">
                    <li>• Built an ML-powered app with 92% accuracy</li>
                    <li>• Worked with real-world datasets (1.5k+ samples)</li>
                    <li>• Hands-on with Python, ML & backend systems</li>
                </ul>
            </BentoCard>

            {/* WHAT I WORK ON */}
            <BentoCard className="col-span-2">
                <div
                    className="h-full grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6"
                >
                    {/* Title */}
                    <h2 className="font-semibold sm:col-span-1 text-left mb-3 sm:mb-0">
                        What I work on
                    </h2>

                    {/* Icon Grid */}
                    <div className="sm:col-span-3 grid grid-cols-2 gap-3 sm:gap-4">
                        <WorkItem icon={SoftwareEng} label="Software Development" classStyle={classStyle}
                            description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                        <WorkItem icon={BackendDev} label="Backend Systems" classStyle={classStyle}
                            description="I work primarily on backend systems using Python-based frameworks, focusing on API design, data handling, and reliability. I’ve built backend services that integrate machine learning models, databases, and frontend clients, and I’ve begun using CI pipelines to automate testing and ensure backend changes don’t break existing functionality. My goal is to design scalable, well-tested backend systems while improving my understanding of deployment workflows and system-level trade-offs." />
                        <WorkItem icon={AIMLImg} label="Machine Learning" classStyle={classStyle}
                            description="I’ve built and evaluated machine learning models on real datasets, focusing on data preprocessing, feature selection, model training, and evaluation rather than just using libraries blindly. My work includes building ML-powered applications where models are actually integrated into usable systems. I’m now aiming to go deeper into model reasoning, deployment workflows, and applied ML—building models that are reliable, interpretable, and usable in production environments." />
                        <WorkItem icon={Opensrc} label="Open Source Contribution" classStyle={classStyle}
                            description="I’m actively working toward contributing to open-source projects by understanding real-world codebases, issue discussions, and collaboration workflows. I’m learning how to read existing code, identify meaningful problems, and contribute fixes or improvements that align with project standards. My goal is to consistently contribute high-quality code, improve documentation where it matters, and grow as a collaborative engineer by working with experienced maintainers and real production systems." />
                    </div>
                </div>
            </BentoCard>

        </>
    );
}

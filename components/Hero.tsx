import BentoCard from "./BentoCard";
import AIMLImg from '@/public/RolesImg/AI & ML icon image.png';
import BackendDev from '@/public/RolesImg/Backend dev.png';
import SoftwareEng from '@/public/RolesImg/Software engineer.png';
import Opensrc from '@/public/RolesImg/Open source.png';
import WorkItem from "./WorkItem";

export default function HeroSection() {
    const classStyle = `
                    group
                    flex flex-col items-center justify-center
                    gap-1.5 sm:gap-2
                    rounded-lg
                    bg-item
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
                lg:col-span-2">
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
                        to-transparent"
                    />

                    {/* Main content */}
                    <div className="relative z-10">
                        <p className="text-muted">Hi, I’m</p>

                        <h1 className="font-bold mt-0 name-font">Lokesh S</h1>

                        <p className="text-muted mt-4">
                            Software Engineer focused on ML & Backend Systems
                        </p>

                        <p className="text-muted mt-4">
                            Turning data into intelligent systems with scalable engineering
                        </p>
                    </div>

                </section>
            </BentoCard>

            {/* WHAT I'VE DONE */}
            <BentoCard className="bg-alter-card text-item col-span-3 lg:col-span-1 md:col-span-1">
                <h2 className="font-semibold mb-2 sm:mb-3">What I've Built</h2>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                    <li>• End-to-end ML systems with production-grade deployment</li>
                    <li>• Scalable ETL pipelines for real-world data</li>
                    <li>• Backend architectures with CI, Docker, and REST APIs</li>
                </ul>
            </BentoCard>

            {/* WHAT I WORK ON */}
            <BentoCard className="col-span-3 lg:col-span-2 md:col-span-2">
                <div className="h-full grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
                    <h2 className="font-semibold sm:col-span-1 text-left">
                        What I Work On<p className="font-light text-xs lg:hidden">(Click to see more)</p>
                    </h2>


                    <div className="sm:col-span-3 mt-2 grid grid-cols-2 gap-3 sm:gap-4">

                        <WorkItem
                            icon={SoftwareEng}
                            label="Software Development"
                            classStyle={classStyle}
                            description="I build end-to-end applications with strong emphasis on clean architecture, modular design, and long-term maintainability. My work typically starts from problem definition and moves through structured implementation, integration, and refinement. I focus on writing code that is readable, testable, and scalable as system complexity grows."
                        />

                        <WorkItem
                            icon={BackendDev}
                            label="Backend Systems"
                            classStyle={classStyle}
                            description="I design backend systems using Python-based frameworks, focusing on API design, data modeling, and system reliability. I’ve built services that integrate machine learning models, databases, and frontend clients, while incorporating CI pipelines and containerization for stable deployments. I aim to build backend systems that are scalable, well-tested, and production-ready."
                        />

                        <WorkItem
                            icon={AIMLImg}
                            label="Machine Learning"
                            classStyle={classStyle}
                            description="I develop and evaluate machine learning models with strong attention to data preprocessing, feature engineering, and performance evaluation. My focus goes beyond model accuracy — I integrate ML components into usable systems where reliability, interpretability, and real-world deployment matter."
                        />

                        <WorkItem
                            icon={Opensrc}
                            label="Open Source"
                            classStyle={classStyle}
                            description="I actively explore open-source projects to understand real-world architecture, collaboration workflows, and large-scale codebases. I’m working toward contributing meaningful improvements through well-structured code and documentation, while strengthening my ability to operate within production-level systems."
                        />

                    </div>
                </div>
            </BentoCard>

        </>
    );
}

import Image from "next/image";
import BentoCard from "./BentoCard";
import PortfolioImage from "@/public/Portfolio Image.png";
import AIMLImg from '@/public/RolesImg/AI & ML icon image.png';
import BackendDev from '@/public/RolesImg/Backend dev.png';
import SoftwareEng from '@/public/RolesImg/Software engineer.png';
import DataSci from '@/public/RolesImg/Data science.png';
import EdgeImg from "@/public/BgImg/catpng.png";
import WorkItem from "./WorkItem";

export default function HeroSection() {
    return (
        <>
            {/* HERO TEXT */}
            <BentoCard
                className="
    col-span-1
    sm:col-span-2
    relative
    overflow-hidden
    flex flex-col justify-center
    min-h-[200px] sm:min-h-[240px]
  "
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
      to-transparent
    "
                />

                {/* Main content */}
                <div className="relative z-10">
                    <p className="text-muted">Hi, I’m</p>

                    <h1 className="font-bold mt-1">Lokesh S</h1>

                    <p className="text-muted mt-4">
                        Software Engineer (ML & Backend)
                    </p>

                    <p className="text-muted max-w-2xl mt-4">
                        Building scalable systems and applied ML solutions
                    </p>
                </div>

                {/* Character element (integrated, not floating) */}
                <div
                    className="
      absolute
      bottom-0
      right-0
      w-20
      sm:w-28
      md:w-32
      lg:w-40
      opacity-60
      translate-y-2
      pointer-events-none
      z-0
    "
                >
                    <Image
                        src={EdgeImg}
                        alt=""
                        className="object-contain"
                    />
                </div>
            </BentoCard>


            {/* IMAGE */}
            <BentoCard className="relative flex items-center justify-center min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                <Image
                    src={PortfolioImage}
                    alt="Profile illustration"
                    fill
                    priority
                    className="object-contain rounded-lg"
                />
            </BentoCard>

            {/* WHAT I'VE DONE */}
            <BentoCard className="col-span-1 sm:col-span-1">
                <h2 className="font-semibold mb-2 sm:mb-3">What I've done</h2>
                <ul className="space-y-1.5 sm:space-y-2 text-muted text-sm sm:text-base">
                    <li>• Built an ML-powered app with 92% accuracy</li>
                    <li>• Worked with real-world datasets (1.5k+ samples)</li>
                    <li>• Hands-on with Python, ML & backend systems</li>
                </ul>
            </BentoCard>

            {/* WHAT I WORK ON */}
            <BentoCard className="col-span-1 sm:col-span-2">
                <div
                    className="h-full grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6"
                >
                    {/* Title */}
                    <h2 className="font-semibold sm:col-span-1 text-left mb-3 sm:mb-0">
                        What I work on
                    </h2>

                    {/* Icon Grid */}
                    <div className="sm:col-span-3 grid grid-cols-2 gap-3 sm:gap-4">
                        <WorkItem icon={SoftwareEng} label="Software Development" />
                        <WorkItem icon={BackendDev} label="Backend Systems" />
                        <WorkItem icon={AIMLImg} label="Machine Learning" />
                        <WorkItem icon={DataSci} label="Data Science" />
                    </div>
                </div>
            </BentoCard>

        </>
    );
}

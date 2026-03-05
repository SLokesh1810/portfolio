import BentoCard from "./BentoCard";

export default function AboutSection() {
    return (
        <BentoCard className="col-span-2 lg:col-span-3">
            <h2 className="font-semibold mb-2 sm:mb-3">About Me</h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
                I’m an engineering student focused on backend systems and applied machine learning. My work revolves around designing scalable architectures, building data-driven applications, and integrating ML models into reliable, production-ready systems. I value clean design, structured problem-solving, and writing code that remains maintainable as complexity grows.
            </p>
        </BentoCard>
    )
}
{/* ABOUT ME */ }
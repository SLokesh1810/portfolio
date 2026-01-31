import BentoCard from "./BentoCard";

export default function AboutSection() {
    return (
        <BentoCard className="col-span-2 lg:col-span-3">
            <h2 className="font-semibold mb-2 sm:mb-3">About Me</h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
                Technology-focused problem solver with experience in Machine Learning
                and application development. Interested in building efficient,
                practical systems and seeking internships to grow as an engineer.
            </p>
        </BentoCard>
    )
}
{/* ABOUT ME */ }
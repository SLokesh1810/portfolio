import BentoCard from "./BentoCard";
import Image from "next/image";
import WorkItem from "./WorkItem";
import PythonLogo from '@/public/SkillsImg/python.png';
import JavaLogo from '@/public/SkillsImg/java.png';
import CppLogo from '@/public/SkillsImg/c-.png';
import DjangoLogo from '@/public/SkillsImg/django.png';
import FlaskLogo from '@/public/SkillsImg/Flask.png';
import FastAPILogo from '@/public/SkillsImg/FastAPI.png';
import SqlLogo from '@/public/SkillsImg/database.png';
import GitLogo from '@/public/SkillsImg/github.png';
import GitHubActionsLogo from '@/public/SkillsImg/GitHub Actions.png';
import DockerLogo from '@/public/SkillsImg/docker.png';
import NextJSLogo from '@/public/SkillsImg/Next.js.png';
import SklearnLogo from '@/public/SkillsImg/scikit-learn.png';
import FigmaLogo from '@/public/SkillsImg/Figma.png';
import FlutterLogo from '@/public/SkillsImg/Flutter.png';

export default function SkillSection() {
    const classStyle = `
                    flex flex-col items-center justify-center
                    gap-1.5 sm:gap-2
                    rounded-lg
                    p-2 sm:p-3
                    shadow-sm
                    hover:scale-105
                    hover:bg-blue-50
                    duration-400
                    ease-in-out
                    cursor-pointer
                    transition-transform
                    text-center
                    `;
    return (
        <>
            <BentoCard className="col-span-3">
                <h2 className="font-semibold">Programming Languages</h2>
                <div className="mt-4 sm:col-span-3 grid grid-cols-3 gap-3 sm:gap-4">
                    <WorkItem icon={PythonLogo} label="Python" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={JavaLogo} label="Java" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={CppLogo} label="C++" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                </div>
            </BentoCard>
            <BentoCard className="col-span-3">
                <h2 className="font-semibold">Skills</h2>
                <div className="mt-4 sm:col-span-3 grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    <WorkItem icon={DjangoLogo} label="Django" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={FlaskLogo} label="Flask" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={FastAPILogo} label="FastAPI" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={SqlLogo} label="SQL" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={SklearnLogo} label="Scikit-learn" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={GitLogo} label="Git & GitHub" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={GitHubActionsLogo} label="GitHub Actions (Basics)" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={DockerLogo} label="Docker (Basics)" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={NextJSLogo} label="Next.js (Basics)" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={FigmaLogo} label="Figma (Basics)" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={FlutterLogo} label="Flutter (Basics)" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                </div>
            </BentoCard>
        </>
    );
}
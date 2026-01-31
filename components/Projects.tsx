import BentoCard from "./BentoCard";
import WorkItem from "./WorkItem";
import PythonLogo from '@/public/SkillsImg/python.png';
import FlaskLogo from '@/public/SkillsImg/Flask.png';
import FastAPILogo from '@/public/SkillsImg/FastAPI.png';
import GitHubActionsLogo from '@/public/SkillsImg/GitHub Actions.png';
import DockerLogo from '@/public/SkillsImg/docker.png';
import SklearnLogo from '@/public/SkillsImg/scikit-learn.png';
import FlutterLogo from '@/public/SkillsImg/Flutter.png';
import PostgresLogo from '@/public/SkillsImg/PostgresSQL.png';
import ParquetLogo from '@/public/SkillsImg/parquet.png';
import ChromaDBLogo from '@/public/SkillsImg/chromaDb.png';
import PandasLogo from '@/public/SkillsImg/Pandas.png';
import NumpyLogo from '@/public/SkillsImg/NumPy.png';

export default function Projects() {
    const classStyle = `
                    flex flex-col items-center justify-center
                    gap-1.5 sm:gap-2
                    rounded-lg
                    p-2 sm:p-3
                    shadow-sm
                    bg-blue-50
                    hover:scale-105
                    duration-400
                    ease-in-out
                    cursor-pointer
                    transition-transform
                    text-center
                    `;
    return (
        <>
            <BentoCard className="col-span-2 lg:col-span-3">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">MindEase – Mental Health Management App (ML + Mobile App + Chatbot)</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Built a cross-platform Flutter application with a Flask (Python) backend to assess user mental well-being. Trained and deployed an ML model achieving 92% accuracy in real-time predictions and integrated an AI chatbot (Serene) to support interactive user engagement.
                </p>
            </BentoCard>
            <BentoCard className="col-span-1 lg:col-span-2">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Stack</h3>
                <div className="mt-4 sm:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    <WorkItem icon={FlaskLogo} label="Flask" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={SklearnLogo} label="Scikit-learn" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={DockerLogo} label="Docker" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={GitHubActionsLogo} label="GitHub Actions" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={FlutterLogo} label="Flutter (Basics)" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                </div>
            </BentoCard>
            <BentoCard className="col-span-1 lg:col-span-2">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Stack</h3>
                <div className="mt-4 sm:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    <WorkItem icon={FastAPILogo} label="FastAPI" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={PythonLogo} label="Python" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={PostgresLogo} label="PostgreSQL" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={ParquetLogo} label="Parquet" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={ChromaDBLogo} label="ChromaDB" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                </div>
            </BentoCard>
            <BentoCard className="col-span-2 lg:col-span-3">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">FloatChat – AI Ocean Data Pipeline (Smart India Hackathon 2025 Participant)</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Designed and implemented an end-to-end data pipeline to ingest, clean, and process 10,000+ real-time ARGO float records from .nc files into Parquet, PostgreSQL, and ChromaDB. Automated the complete workflow using Python and Pandas for scalable and reliable data ingestion.
                </p>
            </BentoCard>
            <BentoCard className="col-span-2 lg:col-span-3">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">Data Science Internship - Corizo (Powered by Wipro) - July 2024 to Sep 2024</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Developed an ML classifier to predict manufacturing yield using 1,567 samples and 591 sensor features. Applied feature selection and evaluated Random Forest, SVM, and Naive Bayes models, with Random Forest achieving the best accuracy and reliability. Also built an independent model to classify BMI by gender.
                </p>
            </BentoCard>
            <BentoCard className="col-span-1 lg:col-span-2">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Learned</h3>
                <div className="mt-4 sm:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    <WorkItem icon={PythonLogo} label="Python" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={PandasLogo} label="Pandas" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={NumpyLogo} label="NumPy" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                    <WorkItem icon={SklearnLogo} label="Scikit-learn" classStyle={classStyle}
                        description="I build software with a strong focus on correctness, readability, and real-world usability. Most of my work starts from problem understanding and flows through clean architecture, modular code, and iterative refinement. I’ve developed end-to-end applications where I handled logic, data flow, and integration rather than just isolated features. Going forward, I’m aiming to deepen my system-level thinking, write more production-grade code, and design software that scales cleanly as complexity grows." />
                </div>
            </BentoCard>
        </>
    );
}

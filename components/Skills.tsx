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
                    bg-item
                    duration-400
                    ease-in-out
                    cursor-pointer
                    transition-transform
                    text-center
                    `;
    return (
        <>
            <BentoCard className="col-span-3 lg:col-span-1">
                <h2 className="font-semibold">Programming Languages <p className="font-light text-xs lg:hidden">(Click to see more)</p></h2>

                <div className="mt-4 sm:col-span-3 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-1 lg:grid-rows-3">

                    <WorkItem
                        icon={PythonLogo}
                        label="Python"
                        classStyle={classStyle}
                        description="Primary language used for backend systems, machine learning pipelines, and data engineering workflows. Built MindEase (ML inference + Flask APIs), FloatChat (NetCDF ETL → Parquet → PostgreSQL), and CareerIn (resume parsing + analysis APIs). Strong proficiency in writing modular, production-oriented Python code."
                    />

                    <WorkItem
                        icon={JavaLogo}
                        label="Java"
                        classStyle={classStyle}
                        description="Used extensively for data structures, algorithms, and object-oriented system design. Strong grasp of OOP principles, memory concepts, and problem-solving patterns through structured DSA practice and academic work."
                    />

                    <WorkItem
                        icon={CppLogo}
                        label="C++"
                        classStyle={classStyle}
                        description="Foundational knowledge of C++ with focus on syntax, STL basics, and low-level programming concepts. Explored primarily for understanding performance-oriented design and language internals."
                    />

                </div>
            </BentoCard>

            <BentoCard className="col-span-3 lg:col-span-4">
                <h2 className="font-semibold">Skills <p className="font-light text-xs lg:hidden">(Click to see more)</p></h2>

                <div className="mt-4 sm:col-span-3 grid grid-cols-3 gap-4">

                    {/* Backend & APIs */}
                    <WorkItem
                        icon={FastAPILogo}
                        label="Backend & REST APIs"
                        classStyle={classStyle}
                        description="Designed and built RESTful services using Flask and FastAPI. Integrated ML inference, request validation, database operations, and structured API responses (MindEase, CareerIn)."
                    />

                    {/* Databases */}
                    <WorkItem
                        icon={SqlLogo}
                        label="PostgreSQL & SQL"
                        classStyle={classStyle}
                        description="Designed relational schemas and wrote optimized queries for backend systems and data pipelines (FloatChat ETL → PostgreSQL, application data storage)."
                    />

                    {/* Machine Learning */}
                    <WorkItem
                        icon={SklearnLogo}
                        label="Machine Learning (Scikit-learn)"
                        classStyle={classStyle}
                        description="Trained and evaluated ML models including Random Forest, SVM, and Naive Bayes. Built production-integrated inference systems (MindEase, internship projects)."
                    />

                    {/* Data Processing */}
                    <WorkItem
                        icon={PythonLogo}
                        label="Data Processing & ETL"
                        classStyle={classStyle}
                        description="Built data ingestion and transformation pipelines using Pandas and scientific datasets (NetCDF → cleaned dataframes → Parquet → PostgreSQL in FloatChat)."
                    />

                    {/* DevOps */}
                    <WorkItem
                        icon={DockerLogo}
                        label="Docker & CI/CD"
                        classStyle={classStyle}
                        description="Containerized ML services and implemented GitHub Actions pipelines for automated testing and reproducible builds (MindEase)."
                    />

                    {/* Version Control */}
                    <WorkItem
                        icon={GitLogo}
                        label="Git & GitHub"
                        classStyle={classStyle}
                        description="Managed version control, branching strategies, and collaborative workflows across multiple backend and ML projects."
                    />

                    {/* Frontend */}
                    <WorkItem
                        icon={NextJSLogo}
                        label="Frontend (Next.js & Flutter)"
                        classStyle={classStyle}
                        description="Built responsive web interfaces (portfolio) and mobile frontend for ML-integrated app (MindEase) with REST API integration."
                    />

                </div>
            </BentoCard>
        </>
    );
}
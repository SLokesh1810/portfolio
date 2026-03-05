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
                    bg-item
                    hover:scale-105
                    duration-400
                    ease-in-out
                    cursor-pointer
                    transition-transform
                    text-center
                    `;
    return (
        <>
            {/* ===================== MindEase ===================== */}

            <BentoCard className="col-span-2 lg:col-span-3">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">
                    MindEase – ML-Powered Mental Health App
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Built an end-to-end ML application with real-time mental health risk prediction (92% accuracy), backend inference APIs, and a Flutter mobile interface. Integrated a conversational assistant and production-ready deployment workflows.
                </p>
            </BentoCard>

            <BentoCard className="col-span-1 lg:col-span-2">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Stack</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                    <WorkItem
                        icon={FlaskLogo}
                        label="Flask"
                        classStyle={classStyle}
                        description="Built REST APIs for real-time ML inference and request handling."
                    />

                    <WorkItem
                        icon={SklearnLogo}
                        label="Scikit-learn"
                        classStyle={classStyle}
                        description="Trained and evaluated Random Forest model (92% accuracy) for prediction."
                    />

                    <WorkItem
                        icon={DockerLogo}
                        label="Docker"
                        classStyle={classStyle}
                        description="Containerized inference service for reproducible deployment."
                    />

                    <WorkItem
                        icon={GitHubActionsLogo}
                        label="GitHub Actions"
                        classStyle={classStyle}
                        description="Implemented CI pipeline for automated testing and Docker builds."
                    />

                    <WorkItem
                        icon={FlutterLogo}
                        label="Flutter"
                        classStyle={classStyle}
                        description="Built cross-platform mobile UI integrated with backend APIs."
                    />

                </div>
            </BentoCard>



            {/* ===================== FloatChat ===================== */}

            <BentoCard className="col-span-1 lg:col-span-2">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Stack</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                    <WorkItem
                        icon={FastAPILogo}
                        label="FastAPI"
                        classStyle={classStyle}
                        description="Built structured APIs to access processed ocean datasets."
                    />

                    <WorkItem
                        icon={PythonLogo}
                        label="Python"
                        classStyle={classStyle}
                        description="Implemented ETL workflows, data transformation, and ingestion logic."
                    />

                    <WorkItem
                        icon={PostgresLogo}
                        label="PostgreSQL"
                        classStyle={classStyle}
                        description="Designed relational storage for processed oceanographic data."
                    />

                    <WorkItem
                        icon={ParquetLogo}
                        label="Parquet"
                        classStyle={classStyle}
                        description="Used columnar storage format for efficient large-scale data processing."
                    />

                    <WorkItem
                        icon={ChromaDBLogo}
                        label="ChromaDB"
                        classStyle={classStyle}
                        description="Stored vectorized metadata for retrieval-based workflows."
                    />

                </div>
            </BentoCard>
            <BentoCard className="col-span-2 lg:col-span-3">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">
                    FloatChat – AI Ocean Data Pipeline
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Designed an end-to-end ETL pipeline to ingest and process 10,000+ ARGO float records from NetCDF files into Parquet and PostgreSQL. Optimized data transformation and storage for scalable querying and retrieval workflows.
                </p>
            </BentoCard>



            {/* ===================== Internship ===================== */}

            <BentoCard className="col-span-2 lg:col-span-3">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">
                    Data Science Internship – Corizo (Powered by Wipro)
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Developed ML models to predict manufacturing yield using 1,567 samples and 591 sensor features. Performed feature selection, model comparison (Random Forest, SVM, Naive Bayes), and cross-validation to identify the most reliable predictive approach.
                </p>
            </BentoCard>

            <BentoCard className="col-span-1 lg:col-span-2">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Core Tools Used</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                    <WorkItem
                        icon={PythonLogo}
                        label="Python"
                        classStyle={classStyle}
                        description="Implemented preprocessing, feature engineering, and modeling workflows."
                    />

                    <WorkItem
                        icon={PandasLogo}
                        label="Pandas"
                        classStyle={classStyle}
                        description="Handled dataset cleaning, transformation, and feature preparation."
                    />

                    <WorkItem
                        icon={NumpyLogo}
                        label="NumPy"
                        classStyle={classStyle}
                        description="Performed numerical operations for model input processing."
                    />

                    <WorkItem
                        icon={SklearnLogo}
                        label="Scikit-learn"
                        classStyle={classStyle}
                        description="Trained and evaluated classification models with validation techniques."
                    />

                </div>
            </BentoCard>
        </>
    );
}

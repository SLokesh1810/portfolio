import BentoCard from "./BentoCard";

export default function Projects() {
    return (
        <>
            <BentoCard className="col-span-1 sm:col-span-2">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">MindEase – Mental Health Management App (ML + Mobile App + Chatbot)</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Built a cross-platform Flutter application with a Flask (Python) backend to assess user mental well-being. Trained and deployed an ML model achieving 92% accuracy in real-time predictions and integrated an AI chatbot (Serene) to support interactive user engagement.
                </p>
            </BentoCard>
            <BentoCard className="col-span-1">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Stack</h3>
            </BentoCard>
            <BentoCard className="col-span-1">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Stack</h3>
            </BentoCard>
            <BentoCard className="col-span-1 sm:col-span-2">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">FloatChat – AI Ocean Data Pipeline (Smart India Hackathon 2025 Participant)</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Designed and implemented an end-to-end data pipeline to ingest, clean, and process 10,000+ real-time ARGO float records from .nc files into Parquet, PostgreSQL, and ChromaDB. Automated the complete workflow using Python and Pandas for scalable and reliable data ingestion.
                </p>
            </BentoCard>
            <BentoCard className="col-span-1 sm:col-span-2">
                <h3 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg">Data Science Internship - Corizo (Powered by Wipro) - July 2024 to Sep 2024</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Developed an ML classifier to predict manufacturing yield using 1,567 samples and 591 sensor features. Applied feature selection and evaluated Random Forest, SVM, and Naive Bayes models, with Random Forest achieving the best accuracy and reliability. Also built an independent model to classify BMI by gender.
                </p>
            </BentoCard>
            <BentoCard className="col-span-1">
                <h3 className="font-semibold text-center mb-3 sm:mb-4 lg:mb-5">Learned</h3>
            </BentoCard>
        </>
    );
}

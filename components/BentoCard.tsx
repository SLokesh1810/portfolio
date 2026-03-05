export default function BentoCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`rounded-xl sm:rounded-2xl p-4 sm:p-5 border-border bg-card card-shadow duration-300 hover:shadow-lg hover:scale-101 ${className}`}
        >
            {children}
        </div>
    );
}

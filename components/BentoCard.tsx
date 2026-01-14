export default function BentoCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-card shadow-md hover:shadow-xl transition-shadow ${className}`}
        >
            {children}
        </div>
    );
}

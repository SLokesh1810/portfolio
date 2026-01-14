import Image from "next/image";

export default function WorkItem({
    icon,
    label,
}: {
    icon: any;
    label: string;
}) {
    return (
        <div className="flex flex-col bg-blue-50 rounded-lg shadow-sm items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 hover:scale-105 transition-transform">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                <Image
                    src={icon}
                    alt={label}
                    fill
                    className="object-contain"
                />
            </div>
            <p className="text-xs sm:text-sm text-muted text-center leading-tight">{label}</p>
        </div>
    );
}

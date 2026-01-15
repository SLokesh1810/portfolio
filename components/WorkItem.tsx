import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import InfoModal from "./InfoModal";

interface WorkItemProps {
    icon: StaticImageData;
    label: string;
    description?: string;
}

export default function WorkItem({
    icon,
    label,
    description,
}: WorkItemProps,) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Work Item */}
            <button
                onClick={() => setOpen(true)}
                className="
                group
                flex flex-col items-center justify-center
                gap-1.5 sm:gap-2
                rounded-lg
                bg-blue-50
                p-2 sm:p-3
                shadow-sm
                hover:scale-105
                transition-transform
                text-center
                "
            >
                {/* Icon */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                    <Image
                        src={icon}
                        alt={label}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm text-muted leading-tight">
                    {label}
                </p>
            </button>

            {/* Info Modal */}
            <InfoModal
                isOpen={open}
                onClose={() => setOpen(false)}
                title={label}
            >
                <p className="leading-relaxed">
                    {description ??
                        "Detailed information about this role, tools used, and real-world work can go here."}
                </p>
            </InfoModal>
        </>

    );
}

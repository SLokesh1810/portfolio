import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import InfoModal from "./InfoModal";

interface WorkItemProps {
    icon: StaticImageData;
    label: string;
    classStyle?: string;
    description?: React.ReactNode;
}

export default function WorkItem({
    icon,
    label,
    classStyle,
    description,
}: WorkItemProps,) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Work Item */}
            <button
                onClick={() => setOpen(true)}
                className={classStyle}
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
                {description}
            </InfoModal>
        </>

    );
}

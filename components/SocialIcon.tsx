import Image from "next/image";

export default function SocialIcon({
    icon,
    label,
    href,
}: {
    icon: any;
    label: string;
    href: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
        relative
        w-12 h-12
        sm:w-14 sm:h-14
        lg:w-16 lg:h-16
        rounded-xl sm:rounded-2xl
        transition-transform
        hover:scale-105
      "
        >
            {/* INNER IMAGE CONTAINER */}
            <div className="relative w-full h-full">
                <Image
                    src={icon}
                    alt={label}
                    fill
                    className="object-contain"
                />
            </div>
        </a>
    );
}


export default function NavItem({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    return (
        <a
            href={href}
            className="
        relative
        group
        cursor-pointer
      "
        >
            {label}
            <span
                className="
          absolute
          left-0
          -bottom-1
          h-[2px]
          w-full
          bg-current
          scale-x-0
          origin-left
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
            />
        </a>
    );
}

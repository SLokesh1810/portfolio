import NavItem from "@/components/NavItem";

export default function Navbar() {
    return (
        <nav className="flex justify-center py-4 sm:py-5 lg:py-6 sticky top-0 z-50 bg-bg/80 backdrop-blur-sm">
            <div
                className="
          flex
          flex-wrap
          justify-center
          gap-3
          sm:gap-6
          md:gap-8
          lg:gap-12
          text-xs
          sm:text-sm
          md:text-base
          lg:text-lg
          font-medium
          text-muted
          max-w-7xl
          px-4
          sm:px-6
        "
            >
                <NavItem href="#home" label="Home" />
                <NavItem href="#about" label="About" />
                <NavItem href="#skills" label="Skills" />
                <NavItem href="#projects" label="Projects" />
                <NavItem href="#contact" label="Contact" />
                <NavItem href="#resume" label="Resume" />
            </div>
        </nav>
    );
}

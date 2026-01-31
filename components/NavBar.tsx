import NavItem from "@/components/NavItem";

export default function Navbar() {
    return (
        <nav className="flex justify-center mx-auto w-fit rounded-full shadow-md bg-gray-50 opacity-90 px-10 py-4 sm:py-5 lg:py-6 sticky top-2 z-50">
            <div
                className="
          flex
          justify-center
          text-muted
          gap-3
          w-auto
          sm:gap-10
          md:gap-14
          lg:gap-20
          text-xs
          sm:text-sm
          md:text-base
          lg:text-lg
          font-medium
          text-muted
        "
            >
                <NavItem href="#home" label="Home" />
                <NavItem href="#about" label="About" />
                <NavItem href="#skills" label="Skills" />
                <NavItem href="#projects" label="Projects" />
                <NavItem href="#contact" label="Contact" />
            </div>
        </nav>
    );
}

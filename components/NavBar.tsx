import NavItem from "@/components/NavItem";

export default function Navbar() {
    return (
        <nav className="flex justify-center mx-auto w-fit rounded-full card-shadow backdrop-blur-md px-10 py-2 sm:py-3 lg:py-4 sticky top-2 z-50">
            <div
                className="
          flex
          justify-center
          text-nav
          gap-3
          w-auto
          md:gap-10
          lg:gap-15
          text-xs
          sm:text-sm
          md:text-base
          lg:text-lg
          font-medium
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

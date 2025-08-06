import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrolled]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    const navItems = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12", 
                scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
            )}
        >

            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#hero" className="text-2xl font-bold gradient-text">
                    Portfolio
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} 
                                    className="relative text-foreground transition-colors duration-300 
                                    after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-blue-500 after:scale-x-0 after:origin-right after:transition-transform 
                                    hover:text-primary hover:after:scale-x-100 hover:after:origin-left"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <button className="p-2 text-foreground">
                            <Menu className="h-6 w-6 cursor-pointer" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[80%] sm:w-[300px] p-10">
                        <nav>
                            <ul className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <li key={item.id} className="border-b border-gray-100 pb-2">
                                        <a 
                                            href={`#${item.id}`}
                                            className="block px-2 py-2 text-foreground hover:text-primary transition-colors duration-300"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(item.id);
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Navbar;

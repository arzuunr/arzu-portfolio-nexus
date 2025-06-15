
import { Github } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center max-w-5xl mx-auto px-4">
        <a href="#" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Arzu Köroğlu</span>
        </a>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mr-auto">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4 ml-auto">
          <a href="https://github.com/arzuunrk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

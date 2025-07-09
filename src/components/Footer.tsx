
import { Github, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary border-t border-border/40 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8">
            <a href="mailto:arzunurkoroglu@hotmail.com" className="font-semibold text-primary hover:underline">
              arzunurkoroglu@hotmail.com
            </a>
        </div>
        <div className="flex justify-center items-center space-x-6 mb-8">
            <a href="tel:+905368343357" className="text-muted-foreground hover:text-primary flex items-center space-x-1">
              <Phone className="h-5 w-5" />
              <span>+90 536 834 3357</span>
            </a>
        </div>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a href="https://github.com/arzuunr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/arzuunr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-semibold">
            LinkedIn
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Arzu Köroğlu. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

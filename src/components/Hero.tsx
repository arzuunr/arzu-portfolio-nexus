
const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center text-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-background/70"></div>
      </div>
      <div className="relative z-10 p-4 container mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 animate-fade-in-down text-foreground">Arzu Nur Köroğlu</h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
          Physics Engineer Student | Aspiring Data Scientist & Quant
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in">
          <a href="#projects" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-semibold transition-colors w-full sm:w-auto">
            View My Work
          </a>
          <a href="#contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-md text-lg font-semibold transition-colors w-full sm:w-auto">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

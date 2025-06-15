
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Gravitational Wave Classification (LSTM)",
    description: "Classifies gravitational waves (BBH, BNS, and NSBH) using LSTM deep learning. Processes simulated time-series data from the L1 detector.",
    github: "https://github.com/arzuunrk/gw_classification_lstm",
    tags: ["Deep Learning", "LSTM", "Python", "Physics"]
  },
  {
    title: "İş Bankası Ludi Simulation",
    description: "Data and code for İş Bankası's next-gen banking simulation, including campaign generation and customer list creation.",
    github: "https://github.com/arzuunrk/ynbs_is_bankasi",
    tags: ["Jupyter Notebook", "Banking", "Data Science"]
  },
  {
    title: "Blockchain Projects",
    description: "A collection of my projects exploring blockchain technology and its various applications.",
    github: "https://github.com/arzuunrk/blockchain",
    tags: ["Blockchain", "Crypto"]
  },
  {
    title: "100 Days of Code",
    description: "Evaluating and advancing my Python skills to an advanced level through a focused coding challenge.",
    github: "https://github.com/arzuunrk/100_day_challenge",
    tags: ["Python", "Self-Learning"]
  },
  {
    title: "Denizbank Data Analysis Bootcamp",
    description: "Completed a data analysis bootcamp by Denizbank & ITÜ, covering various data analysis techniques and tools.",
    github: "https://github.com/arzuunrk/bootcamp_veri_analizi",
    tags: ["Data Analysis", "Python", "Pandas"]
  },
  {
    title: "Google Game & App Academy Project",
    description: "Graduation project for the Google Academy, developing an application as part of a team.",
    github: "https://github.com/hashaska/bootcamp_u33",
    tags: ["C#", "Unity", "Team Project"]
  },
  {
    title: "Social Games Project",
    description: "Received an honorary award for an innovative social impact gaming platform conceptualized in a Technology Entrepreneurship Program.",
    github: null,
    tags: ["Social Impact", "Gaming", "Innovation"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects & Ventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col bg-card hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-accent-foreground bg-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              {project.github && (
                <CardFooter>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </a>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

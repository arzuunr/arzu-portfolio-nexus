
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Github, Terminal, FileText } from "lucide-react";

const technicalSkills = [
  { name: "Python (Pandas, Numpy, Matplotlib)", icon: <Code className="h-5 w-5 text-primary" /> },
  { name: "Git & Github", icon: <Github className="h-5 w-5 text-primary" /> },
  { name: "C# (Unity)", icon: <Code className="h-5 w-5 text-primary" /> },
  { name: "Bash", icon: <Terminal className="h-5 w-5 text-primary" /> },
  { name: "Microsoft Office (Excel)", icon: <FileText className="h-5 w-5 text-primary" /> }
];

const languageSkills = [
  { lang: "English", level: "Advanced" },
  { lang: "German", level: "Intermediate" },
  { lang: "Turkish", level: "Native" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {technicalSkills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 text-muted-foreground">
                    {skill.icon}
                    <span className="text-foreground">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Language Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {languageSkills.map((skill) => (
                  <li key={skill.lang} className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{skill.lang}:</span> {skill.level}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

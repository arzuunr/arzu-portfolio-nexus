
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
    {
        school: "Potsdam University",
        degree: "Physics, Erasmus",
        date: "2023-2024",
        location: "Berlin/Germany"
    },
    {
        school: "Istanbul Technical University",
        degree: "Physics Engineer (4th grade)",
        date: "2022-present",
        gpa: "3.09 / 4.00",
        location: "Istanbul/Turkey"
    },
    {
        school: "Istanbul Technical University",
        degree: "Civil Engineer (1st grade)",
        date: "2019-2021",
        gpa: "3.53 / 4.00",
        location: "Istanbul/Turkey"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {education.map(edu => (
                        <Card key={edu.school + edu.degree} className="bg-card hover:border-primary/50 transition-all">
                            <CardHeader>
                                <CardTitle>{edu.school}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold">{edu.degree}</p>
                                <p className="text-sm text-muted-foreground">{edu.date}</p>
                                <p className="text-sm text-muted-foreground">{edu.location}</p>
                                {edu.gpa && <p className="text-sm text-muted-foreground mt-2">GPA: {edu.gpa}</p>}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;

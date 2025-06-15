
const experiences = [
    {
        role: "Project Management Intern",
        company: "SCA Social",
        date: "May 2024 - Present",
        description: "Gaining hands-on experience in project management in a professional environment."
    },
    {
        role: "Co-Founder",
        company: "Largus Games",
        date: "Jun 2022 - Dec 2022",
        description: "Co-founded a blockchain-based social impact NFT game hub, led a team of 9 peers, and secured a spot in the KÜGİM incubation program."
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-secondary">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
                    {experiences.map((exp, index) => (
                        <div key={exp.company} className="relative pl-8 sm:pl-0">
                           <div className="sm:flex items-center">
                                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:order-2'}`}>
                                    <div className="p-4 rounded">
                                        <div className="text-sm text-muted-foreground">{exp.date}</div>
                                        <h3 className="font-bold text-xl">{exp.role}</h3>
                                        <h4 className="font-semibold text-md text-muted-foreground">{exp.company}</h4>
                                        <p className="mt-2 text-muted-foreground">{exp.description}</p>
                                    </div>
                                </div>
                                <div className={`absolute -left-3 sm:left-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2 border-4 border-secondary`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

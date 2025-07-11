import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";


const projects = [
  {
    id: 1,
    title: "Hyundai - Smart Factory Innovation",
    description:
      "Developed predictive Machine Learning models for anomaly detection, contributing to preventive maintenance.",
    image: "/projects/project1.jpg", 
    tags: ["Python", "Machine Learning", "Scikit-learn", "AI"],
  },
  {
    id: 2,
    title: "Brazilian Championship Analytics",
    description:
      "Interactive dashboard visualizing ball possession, passes, and counterattacks from the Brazilian Championship.",
    image: "/projects/project2.png", 
    tags: ["Python", "Pandas", "Streamlit", "Data Viz"],
    githubUrl: "https://github.com/leorossi08/brazilian-championship-data-analysis",
  },
  {
    id: 3,
    title: "Cati Jr. - Commercial Member",
    description:
      "Experience in leading projects using agile methodologies, with direct involvement in client relations, requirements gathering and documentation.",
    image: "/projects/project3.png", 
    tags: ["Agile Method", "Management", "Product Owner"],
  },
  {
    id: 4,
    title: "BlockBuster CRUD Simulation",
    description:
      "A simulated CRUD application for a movie rental service, showcasing full-stack development skills.",
    image: "/projects/project4.png",
    tags: ["Java", "SpringBoot", "HTML", "CSS", "MySQL", "API"],
    githubUrl: "https://github.com/leorossi08/BlockbusterCRUD-SpringBoot"
  },
  {
    id: 5,
    title: "Rossi Prunning Technology",
    description:
      "Developed a web page for a family business, showecasing services and products. A update with react is coming soon.",
    image: "/projects/project5.jpg",
    tags: ["HTML", "CSS"],
  }
  
];

export const ProjectsSection = () => {
    const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('featuredProjects').split(' ')[0]} <span className="text-primary"> {t('featuredProjects').split(' ')[1]} </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('projectsDescription')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* --- Conditional Rendering Logic --- */}
                    {/* This link will only appear if project.demoUrl exists */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {/* This link will only appear if project.githubUrl exists */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {/* --- End of Conditional Rendering --- */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* Updated link to your GitHub profile */}
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/leorossi08"
            rel="noopener noreferrer"
          >
            {t('checkGithub')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
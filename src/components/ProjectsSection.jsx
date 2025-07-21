import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

// Dados estáticos dos projetos (que não mudam com o idioma)
const projectsData = [
  {
    id: 1,
    image: "/projects/project1.jpg",
    tags: ["Python", "Machine Learning", "Scikit-learn", "AI"],
  },
  {
    id: 2,
    image: "/projects/project2.png",
    tags: ["Python", "Pandas", "Streamlit", "Data Visualization"],
    githubUrl: "https://github.com/leorossi08/brazilian-championship-data-analysis",
  },
  {
    id: 3,
    image: "/projects/project3.png",
    tags: ["Agile Method", "Management", "Product Owner"],
  },
  {
    id: 4,
    image: "/projects/project4.png",
    tags: ["Java", "SpringBoot", "HTML", "CSS", "MySQL", "API"],
    githubUrl: "https://github.com/leorossi08/BlockbusterCRUD-SpringBoot",
  },
  {
    id: 5,
    image: "/projects/project5.jpg",
    tags: ["HTML", "CSS", "API", "JavaScript"],
    demoUrl: "https://rossipodas.com.br",
    githubUrl: "https://github.com/leorossi08/web-rossi-tecnologia-em-podas",
  },
  {
    id: 6,
    image: "/projects/project6.png",
    tags: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/leorossi08/web-portifolio",
  },
];


export const ProjectsSection = () => {
  const { t } = useTranslation();
  
  // Busca a lista de projetos traduzidos do arquivo JSON
  const translatedProjects = t('projectList', { returnObjects: true });

  // Combina os dados estáticos com os textos traduzidos
  const projects = projectsData.map((project, index) => {
    // Garante que existe uma tradução correspondente antes de combinar
    if (translatedProjects[index]) {
      return {
        ...project, // Dados estáticos: id, image, tags, githubUrl
        ...translatedProjects[index], // Dados traduzidos: title, description
      };
    }
    return project; // Retorna o projeto apenas com dados estáticos se não houver tradução
  });


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
          {projects.map((project) => (
            <div
              key={project.id}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
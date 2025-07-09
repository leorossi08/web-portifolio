import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const skills = [
  // Data Science & AI
  { name: "Python", category: "Data Science & AI" },
  { name: "Machine Learning / AI", category: "Data Science & AI" },
  { name: "Pandas", category: "Data Science & AI" },
  { name: "Scikit-learn", category: "Data Science & AI" },
  { name: "PyTorch", category: "Data Science & AI" },
  { name: "NLP / LLMs", category: "Data Science & AI" },
  { name: "ETL", category: "Data Science & AI" },

  // Backend Development
  { name: "Java", category: "Backend Development" },
  { name: "SpringBoot", category: "Backend Development" },
  { name: "Django", category: "Backend Development" },
  { name: "RESTful APIs", category: "Backend Development" },
  { name: "Node.js", category: "Backend Development" },

  // Databases
  { name: "SQL", category: "Data Science & AI" },
  { name: "PostgreSQL", category: "Data Science & AI" },
  { name: "MySQL", category: "Data Science & AI" },

  // Tools & Platforms
  { name: "Git/GitHub/GitLab", category: "Tools & Platforms" },
  { name: "Docker", category: "Tools & Platforms" },

  // Frontend Development
  { name: "HTML", category: "Frontend Development" },
  { name: "CSS", category: "Frontend Development" },
  { name: "JavaScript", category: "Frontend Development" },
  { name: "React", category: "Frontend Development" },
  { name: "Tailwind CSS", category: "Frontend Development" },

];

// Your categories
const categories = [
  "all",
  "Data Science & AI",
  "Backend Development",
  "Frontend Development",
  "Tools & Platforms",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
    const { t } = useTranslation();

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('mySkills').split(' ')[0]} <span className="text-primary"> {t('mySkills').split(' ')[1]}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
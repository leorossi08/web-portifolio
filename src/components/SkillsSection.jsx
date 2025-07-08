import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Science & AI
  { name: "Python", level: 95, category: "Data Science & AI" },
  { name: "Machine Learning / AI", level: 90, category: "Data Science & AI" },
  { name: "Pandas", level: 90, category: "Data Science & AI" },
  { name: "Scikit-learn", level: 85, category: "Data Science & AI" },
  { name: "PyTorch", level: 70, category: "Data Science & AI" },
  { name: "NLP / LLMs", level: 60, category: "Data Science & AI" },
  { name: "ETL", level: 33, category: "Data Science & AI" },

  // Backend Development
  { name: "Java", level: 90, category: "Backend Development" },
  { name: "SpringBoot", level: 85, category: "Backend Development" },
  { name: "Django", level: 85, category: "Backend Development" },
  { name: "RESTful APIs", level: 80, category: "Backend Development" },
  { name: "Node.js", level: 70, category: "Backend Development" },

  // Databases
  { name: "SQL", level: 90, category: "Databases" },
  { name: "PostgreSQL", level: 85, category: "Databases" },
  { name: "MySQL", level: 80, category: "Databases" },

  // Tools & Platforms
  { name: "Git/GitHub/GitLab", level: 95, category: "Tools & Platforms" },
  { name: "Docker", level: 75, category: "Tools & Platforms" },
];

// Your categories
const categories = [
  "all",
  "Data Science & AI",
  "Backend Development",
  "Databases",
  "Tools & Platforms",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // FIX: The typo is corrected here (active-category -> activeCategory)
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
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
                  // FIX: I also corrected the styling typos here
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
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
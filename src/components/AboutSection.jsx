import { Briefcase, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* --- Updated Main Bio Text --- */}
            <h3 className="text-2xl font-semibold">
              Driving Innovation with Automated Systems and Data Intelligence
            </h3>

            <p className="text-muted-foreground">
              I engineer forward-thinking, automated solutions designed for
              scalability and efficiency. As a Computer Engineering student, I
              bridge the gap between ambitious business goals and concrete
              technical execution, with a keen focus on creating technology
              that solves meaningful challenges.
            </p>

            <p className="text-muted-foreground">
              My approach covers the full product journey, from initial concept
              to final deployment. I have a strong ability to unlock the
              potential hidden within data to inform strategy and drive
              results. I thrive in agile environments, committed to delivering
              high-impact solutions that push boundaries.
            </p>
            {/* --- End of Main Bio Text --- */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/LeonardoRossi.pdf"
                download="LeonardoRossi_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* --- Updated Info Cards --- */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineering</h4>
                  <p className="text-muted-foreground">
                    Engineering scalable and efficient software solutions to
                    meet dynamic business needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Intelligence</h4>
                  <p className="text-muted-foreground">
                    Unlocking strategic insights by transforming complex data
                    into clear, actionable intelligence.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Product Leadership</h4>
                  <p className="text-muted-foreground">
                    Guiding projects from concept to completion with agile
                    methodologies to ensure high-impact results.
                  </p>
                </div>
              </div>
            </div>
            {/* --- End of Info Cards --- */}
          </div>
        </div>
      </div>
    </section>
  );
};
import { Briefcase, Code, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t, i18n } = useTranslation();

  const cvFile =
    i18n.language === "en"
      ? "/LeonardoRossi_english.pdf"
      : "/LeonardoRossi.pdf";
  const cvDownloadName =
    i18n.language === "en"
      ? "LeonardoRossi_English.pdf"
      : "LeonardoRossi.pdf";

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('aboutMe').split(' ')[0]} <span className="text-primary"> {t('aboutMe').split(' ')[1]}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* --- Updated Main Bio Text --- */}
            <h3 className="text-2xl font-semibold">
              {t('aboutTitle')}
            </h3>

            <p className="text-muted-foreground">
              {t('aboutBio1')}
            </p>

            <p className="text-muted-foreground">
              {t('aboutBio2')}
            </p>
            {/* --- End of Main Bio Text --- */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                {t('getInTouch')}
              </a>

              <a
                href={cvFile}
                download={cvDownloadName}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t('downloadCv')}
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
                  <h4 className="font-semibold text-lg">{t('softwareEngineering')}</h4>
                  <p className="text-muted-foreground">
                    {t('softwareEngineeringDesc')}
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
                  <h4 className="font-semibold text-lg">{t('dataIntelligence')}</h4>
                  <p className="text-muted-foreground">
                    {t('dataIntelligenceDesc')}
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
                  <h4 className="font-semibold text-lg">{t('productLeadership')}</h4>
                  <p className="text-muted-foreground">
                    {t('productLeadershipDesc')}
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
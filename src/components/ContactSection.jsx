import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <Mail className="h-7 w-7 text-primary" />,
      title: "Email",
      value: "leonardorossi@estudante.ufscar.br",
      href: "mailto:leonardorossi@estudante.ufscar.br",
    },
    {
      icon: <Linkedin className="h-7 w-7 text-primary" />,
      title: "LinkedIn",
      value: "in/leo-rossi-dourado",
      href: "https://www.linkedin.com/in/leo-rossi-dourado/",
    },
    {
      icon: <Github className="h-7 w-7 text-primary" />,
      title: "GitHub",
      value: "leorossi08",
      href: "https://github.com/leorossi08",
    },
    {
      icon: <Phone className="h-7 w-7 text-primary" />,
      title: "WhatsApp",
      value: "+55 (16) 99205-5788",
      // TODO: Replace with your actual WhatsApp number
      href: "https://wa.me/5516992055788",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('contactTitle').split(' ')[0]} <span className="text-primary"> {t('contactTitle').split(' ')[1]} {t('contactTitle').split(' ')[2]}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('contactDescription')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center text-center"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              {/* FIX: Added 'break-all' class to handle long text */}
              <p className="text-muted-foreground group-hover:text-primary transition-colors break-all">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
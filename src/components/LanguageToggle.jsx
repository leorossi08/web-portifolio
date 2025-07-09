import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

// Componente para a bandeira do Brasil (retangular)
const BrazilFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width="28" height="20">
        <rect width="24" height="16" fill="#009739"/>
        <polygon points="12,2 22,8 12,14 2,8" fill="#fedd00"/>
        <circle cx="12" cy="8" r="3" fill="#002776"/>
    </svg>
);

// Componente para a bandeira dos EUA (retangular)
const USFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 13" width="28" height="20">
        <rect width="24" height="13" fill="#fff" />
        <path fill="#bf0a30" d="M0,0 H24 V2 H0 Z M0,4 H24 V6 H0 Z M0,8 H24 V10 H0 Z M0,12 H24 V14 H0 Z"/>
        <path fill="#002868" d="M0,0 H12 V8 H0 Z"/>
        <g fill="#fff">
            <g transform="translate(1.2, 0.8) scale(0.8)">
                <polygon points="1,1 1.5,2.5 3,1 2,3 0,3" />
                <polygon points="4,1 4.5,2.5 6,1 5,3 3,3" />
                <polygon points="7,1 7.5,2.5 9,1 8,3 6,3" />
                <polygon points="10,1 10.5,2.5 12,1 11,3 9,3" />
            </g>
            <g transform="translate(1.2, 3.2) scale(0.8)">
                <polygon points="1,1 1.5,2.5 3,1 2,3 0,3" />
                <polygon points="4,1 4.5,2.5 6,1 5,3 3,3" />
                <polygon points="7,1 7.5,2.5 9,1 8,3 6,3" />
                <polygon points="10,1 10.5,2.5 12,1 11,3 9,3" />
            </g>
             <g transform="translate(1.2, 5.6) scale(0.8)">
                <polygon points="1,1 1.5,2.5 3,1 2,3 0,3" />
                <polygon points="4,1 4.5,2.5 6,1 5,3 3,3" />
                <polygon points="7,1 7.5,2.5 9,1 8,3 6,3" />
                <polygon points="10,1 10.5,2.5 12,1 11,3 9,3" />
            </g>
        </g>
    </svg>
);

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center justify-center p-2 rounded-md transition-colors duration-300 hover:bg-secondary",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      )}
      aria-label="Toggle language"
    >
      {i18n.language === "en" ? <BrazilFlag /> : <USFlag />}
    </button>
  );
};
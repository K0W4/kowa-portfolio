import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Language, translations } from '../locales/translations';

interface AppContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations['pt'];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined' && window.navigator) {
    const browserLang = window.navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) return 'pt';
  }
  return 'en';
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = () => setLanguage(prev => prev === 'pt' ? 'en' : 'pt');

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp deve ser usado dentro de um AppProvider');
  return context;
}

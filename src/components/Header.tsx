import { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppProvider';

export function Header() {
  const { language, toggleLanguage, t } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#050505] border-b border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="w-full px-8 md:px-12 grid grid-cols-3 items-center">
        
        <div className="flex justify-start">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center"
          >
            <img 
              src="/logo.svg" 
              alt="KOWA Logo" 
              className="h-6 md:h-8 w-auto object-contain" 
            />
          </button>
        </div>

        <div className="flex justify-center">
          <nav className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
            <a href="#projects" className="text-gray-400 hover:text-action transition-colors">{t.nav.projects}</a>
            <a href="#skill-tree" className="text-gray-400 hover:text-action transition-colors">{t.nav.skillTree}</a>
            <a href="#about" className="text-gray-400 hover:text-action transition-colors">{t.nav.about}</a>
          </nav>
        </div>

        <div className="flex justify-end items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-gray-400 hover:text-action transition-colors cursor-pointer uppercase whitespace-nowrap"
          >
            {language === 'en' ? 'PT-BR' : 'EN-US'}
          </button>
          
          <a 
            href="mailto:kowaleskigabriel@gmail.com?subject=Contato%20via%20Portfólio"
            className="px-6 py-2 bg-action text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-action/20 hover:shadow-action/40"
          >
            {t.nav.contact}
          </a>
        </div>

      </div>
    </header>
  );
}

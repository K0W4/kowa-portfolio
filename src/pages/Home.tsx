import { useState, useEffect } from "react";
import { useApp } from "../contexts/AppProvider";
import { motion, AnimatePresence } from "framer-motion";
import { StarsBackground } from "../components/StarsBackground";
import { Header } from "../components/Header";
import { AboutSection } from "../components/AboutSection";
import { SkillTreeSection } from "../components/SkillTreeSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";

export function Home() {
  const { t } = useApp();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Header />
      <main className="relative w-full bg-[#050505]">
        
        <StarsBackground />

        <div className="relative w-full h-screen overflow-hidden">
          <AnimatePresence>
            {isLoaded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
              >
                <div className="relative origin-center w-full flex justify-center px-4">
                  <img 
                    src="/logo.svg" 
                    alt="KOWA Logo" 
                    className="w-[85vw] md:w-[50vw] max-w-4xl object-contain"
                  />
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="mt-2 text-sm md:text-xl font-bold tracking-[0.3em] text-action"
                >
                  {t.hero.subtitle}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 2.2 }}
                  className="mt-12 flex flex-col sm:flex-row items-center gap-6 pointer-events-auto"
                >
                  <a 
                    href="mailto:kowaleskigabriel@gmail.com?subject=Contato%20via%20Portfólio" 
                    className="w-full sm:w-auto text-center px-8 py-3 border border-white/10 text-white hover:text-action hover:border-action transition-all duration-300 text-sm tracking-widest uppercase font-semibold"
                  >
                    {t.hero.contactBtn}
                  </a>
                  <a href="#projects" className="w-full sm:w-auto text-center px-8 py-3 bg-action text-white hover:scale-105 transition-all duration-300 text-sm tracking-widest uppercase font-semibold shadow-lg shadow-action/20 hover:shadow-action/40">
                    {t.hero.projectsBtn}
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ProjectsSection />
        
        <SkillTreeSection />

        <AboutSection />
        
        <Footer />
      </main>
    </>
  );
}

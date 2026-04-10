import { useApp } from "../contexts/AppProvider";
import { motion } from "framer-motion";

export function AboutSection() {
  const { t } = useApp();

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent z-10">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
          style={{ filter: "hue-rotate(-15deg) saturate(1.5)" }}
        >
          <source src="/fogueira.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-linear-to-b from-[#050505] via-transparent to-[#050505] opacity-80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 py-24 flex flex-col items-start text-left w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-white drop-shadow-2xl w-full text-center">
            {t.about.title1}<span className="text-action">{t.about.title2}</span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-200 font-light leading-relaxed">
            <p 
              className="drop-shadow-md text-left" 
              dangerouslySetInnerHTML={{ __html: t.about.paragraph1 }} 
            />
            <p 
              className="drop-shadow-md text-left" 
              dangerouslySetInnerHTML={{ __html: t.about.paragraph2 }} 
            />
            <p 
              className="text-white font-medium italic border-l-4 border-action pl-4 drop-shadow-lg text-left" 
              dangerouslySetInnerHTML={{ __html: t.about.paragraph3 }} 
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="mailto:kowaleskigabriel@gmail.com?subject=Contato%20via%20Portfólio"
              className="px-8 py-3 bg-action text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-action/20 hover:shadow-action/40"
            >
              {t.nav.contact}
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

import { useApp } from '../contexts/AppProvider';
import { motion } from 'framer-motion';

export function ProjectsSection() {
  const { t } = useApp();

  return (
    <section id="projects" className="relative w-full min-h-screen py-16 md:py-32 z-20 bg-black/70">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="relative z-10 max-w-400 mx-auto px-8 md:px-12 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl">
            {t.projects.title1}<span className="text-action">{t.projects.title2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pb-24">
          {t.projects.items.map((project: {id: string, title: string, category: string, description: string, tags: string[], image: string, link: string}, index: number) => {
            const isSecondColumn = index % 2 !== 0;
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative w-full group ${isSecondColumn ? 'md:translate-y-24' : ''}`}
              >
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 group-hover:border-action/50 transition-colors duration-500 shadow-2xl">
                  <img 
                    src={project.image}
                    alt={`Capa do projeto ${project.title}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-40"
                  />

                  <div 
                    className="absolute bottom-0 w-full h-[85%] md:h-full md:inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent z-10 opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-all duration-500 backdrop-blur-md md:backdrop-blur-none md:group-hover:backdrop-blur-md mask-[linear-gradient(to_top,black_40%,transparent_100%)] md:mask-none"
                  ></div>

                  <div className="absolute inset-0 z-20 p-5 md:p-10 flex flex-col justify-end pointer-events-none">
                    <div className="translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-auto">
                      
                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                        {project.tags.map((tag: string, tIdx: number) => (
                          <span 
                            key={tIdx} 
                            className={`px-3 py-1 bg-action/90 backdrop-blur-md border border-white/20 rounded-full text-[8px] md:text-[9px] font-bold text-white tracking-wide ${tIdx >= 3 ? 'hidden md:inline-flex' : 'inline-flex'}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
                        <h3 className="text-2xl md:text-4xl font-black text-white drop-shadow-md">
                          {project.title}
                        </h3>
                        
                        <div className="hidden md:block w-[2px] h-6 bg-action rounded-full opacity-80"></div>
                        
                        <span className="inline-block text-action text-[10px] md:text-xs font-bold tracking-[0.2em] opacity-90 mt-1 md:mt-0">
                          {project.category}
                        </span>
                      </div>

                      <div className="max-h-[100px] opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-[300px] md:group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                        <div className="pt-2 md:pt-3">
                          <p className="hidden md:block text-sm text-gray-300 font-light max-w-lg mb-6 line-clamp-2">
                            {project.description}
                          </p>
                          
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-1 md:mt-0 px-5 md:px-6 py-2 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-action hover:border-action hover:text-white transition-all duration-300 w-max"
                          >
                            {t.projects.viewProject}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect } from "react";
import { useApp } from "../contexts/AppProvider";
import { motion } from "framer-motion";
import { 
  SiSwift, SiFigma, SiGithub, SiAppstore, 
  SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiJavascript,
  SiNodedotjs, SiPython, SiDocker, SiMongodb, SiPostgresql,
  SiUnity, SiGodotengine, SiUnrealengine, SiGamemaker, SiVite, SiFramer
} from "react-icons/si";
import { FaBookOpen, FaGamepad, FaJava, FaDatabase, FaCube, FaBrain, FaLayerGroup } from "react-icons/fa";
import type { JSX } from "react";

type NodeLayout = { x: number, y: number };
type LinkLayout = { from: number, to: number };

const mapLayouts: Record<string, { nodes: NodeLayout[], links: LinkLayout[] }> = {
  games: {
    nodes: [
      { x: 20, y: 20 }, { x: 20, y: 70 }, { x: 80, y: 20 },
      { x: 85, y: 50 }, { x: 45, y: 85 }, { x: 80, y: 80 },
      { x: 50, y: 20 }
    ],
    links: [
      { from: -1, to: 0 }, { from: 0, to: 1 }, { from: -1, to: 2 },
      { from: -1, to: 3 }, { from: -1, to: 4 }, { from: -1, to: 5 },
      { from: 0, to: 6 }
    ]
  },
  ios: {
    nodes: [
      { x: 15, y: 20 }, { x: 15, y: 55 }, { x: 35, y: 15 },
      { x: 65, y: 15 }, { x: 85, y: 35 }, { x: 85, y: 80 },
      { x: 65, y: 85 }, { x: 15, y: 85 }, { x: 40, y: 85 }
    ],
    links: [
      { from: -1, to: 0 }, { from: 0, to: 1 }, { from: 0, to: 2 },
      { from: -1, to: 3 }, { from: 3, to: 4 }, { from: -1, to: 5 },
      { from: -1, to: 6 }, { from: -1, to: 7 }, { from: 7, to: 8 }
    ]
  },
  web: {
    nodes: [
      { x: 15, y: 20 }, { x: 15, y: 55 }, { x: 85, y: 55 },
      { x: 85, y: 20 }, { x: 40, y: 85 }, { x: 15, y: 85 },
      { x: 85, y: 85 }, { x: 50, y: 15 }, { x: 65, y: 85 }
    ],
    links: [
      { from: -1, to: 0 }, { from: 0, to: 1 }, { from: -1, to: 3 },
      { from: 3, to: 2 }, { from: -1, to: 4 }, { from: 4, to: 5 },
      { from: 4, to: 8 }, { from: -1, to: 6 }, { from: -1, to: 7 }
    ]
  },
  backend: {
    nodes: [
      { x: 20, y: 25 }, { x: 80, y: 25 }, { x: 15, y: 60 },
      { x: 85, y: 60 }, { x: 85, y: 85 }, { x: 15, y: 85 }, { x: 50, y: 85 }
    ],
    links: [
      { from: -1, to: 0 }, { from: -1, to: 1 }, { from: -1, to: 2 },
      { from: 2, to: 5 }, { from: -1, to: 3 }, { from: -1, to: 4 }, { from: -1, to: 6 }
    ]
  }
};

const techLogos: Record<string, JSX.Element> = {
  "Swift": <SiSwift />, "SwiftUI": <SiSwift />, "UIKit": <FaLayerGroup />, "ARKit": <FaCube />, 
  "RealityKit": <FaCube />, "App Store": <SiAppstore />, "CoreML": <FaBrain />, "SpriteKit": <FaGamepad />, 
  "GameKit": <FaGamepad />, "Figma": <SiFigma />, 
  "HTML": <SiHtml5 />, "CSS": <SiCss />, "TypeScript": <SiTypescript />, "JavaScript": <SiJavascript />, 
  "React": <SiReact />, "Tailwind": <SiTailwindcss />, "Node.js": <SiNodedotjs />, "Vite": <SiVite />, "Framer Motion": <SiFramer />,
  "Python": <SiPython />, "Java": <FaJava />, "SQL": <FaDatabase />, "MongoDB": <SiMongodb />, "Docker": <SiDocker />, "PostgreSQL": <SiPostgresql />, "GitHub": <SiGithub />,
  "Unity (C#)": <SiUnity />, "Godot": <SiGodotengine />, "Unreal (C++)": <SiUnrealengine />, "GameMaker": <SiGamemaker />, "Storytelling": <FaBookOpen />, "Game Design": <FaGamepad />
};

function MapIsland({ path, layout, t }: { path: any, layout: any, t: any }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const centerScroll = () => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
      }
    };
    
    const timeoutId = setTimeout(centerScroll, 150);
    return () => clearTimeout(timeoutId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    show: { pathLength: 1, transition: { duration: 1.2, ease: "easeOut" as const } }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-transparent border border-white/10 md:border-white/5 rounded-3xl group/map overflow-hidden">
      
      <div 
        ref={scrollRef}
        className="w-full h-full overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative min-w-[700px] lg:min-w-full h-full"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {layout.links.map((link: LinkLayout, lIdx: number) => {
              const startX = link.from === -1 ? 50 : layout.nodes[link.from].x;
              const startY = link.from === -1 ? 50 : layout.nodes[link.from].y;
              const endX = layout.nodes[link.to].x;
              const endY = layout.nodes[link.to].y;
              return (
                <motion.line 
                  key={lIdx}
                  variants={lineVariants}
                  x1={`${startX}%`} y1={`${startY}%`} 
                  x2={`${endX}%`} y2={`${endY}%`} 
                  stroke={path.colorHex}
                  strokeWidth="2"
                  className="opacity-30 group-hover/map:opacity-80 transition-opacity duration-500"
                />
              );
            })}
          </svg>

          <motion.div 
            variants={itemVariants} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center p-4 md:p-6 bg-[#0a0a0a] border-2 shadow-2xl rounded-xl cursor-crosshair text-center max-w-[80%]"
            style={{ borderColor: path.colorHex }}
          >
            <h3 className="text-sm md:text-xl font-black text-white whitespace-nowrap">{path.data.name}</h3>
            {path.data.desc && (
              <p className={`text-[9px] md:text-[10px] uppercase tracking-widest font-bold mt-1 ${path.color}`}>{path.data.desc}</p>
            )}
          </motion.div>

          {path.data.skills.map((skill: string, sIdx: number) => {
            const pos = layout.nodes[sIdx];
            return (
              <motion.div 
                variants={itemVariants} 
                key={sIdx} 
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 min-w-26 min-h-26 md:min-w-28 md:min-h-28 w-max h-max group cursor-pointer flex items-center justify-center`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                  style={{ backgroundColor: `${path.colorHex}20` }}
                ></div>
                
                <div className={`relative w-full h-full p-3 px-4 md:p-4 border border-white/10 bg-[#111] group-hover:border-current transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-xl ${path.color}`}>
                  <h4 className="text-[10px] md:text-[11px] font-bold tracking-wider text-gray-300 group-hover:text-white uppercase text-center leading-tight whitespace-nowrap">
                    {skill}
                  </h4>
                  <div className="text-2xl md:text-3xl opacity-60 group-hover:opacity-100 transition-all duration-300 text-current shrink-0">
                    {techLogos[skill] || <span className="text-xl font-bold">?</span>}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 bg-black/80 border border-white/10 px-4 py-2 rounded-full pointer-events-none animate-pulse z-30 shadow-lg shadow-black/50 whitespace-nowrap"
      >
        <span>{t.skillTree.swipeHint}</span>
      </motion.div>
    </div>
  );
}

export function SkillTreeSection() {
  const { t } = useApp();

  const paths = [
    { id: 'games', data: t.skillTree.paths.games, color: 'text-red-500', colorHex: '#ef4444' },
    { id: 'ios', data: t.skillTree.paths.ios, color: 'text-fuchsia-400', colorHex: '#e879f9' },
    { id: 'web', data: t.skillTree.paths.web, color: 'text-emerald-400', colorHex: '#34d399' },
    { id: 'backend', data: t.skillTree.paths.backend, color: 'text-sky-400', colorHex: '#38bdf8' },
  ];

  return (
    <section id="skill-tree" className="relative w-full min-h-screen py-16 md:py-32 flex items-center justify-center z-20 overflow-hidden bg-black/70">
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="relative z-10 w-full max-w-480 mx-auto px-4 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl">
            {t.skillTree.title1}<span className="text-action">{t.skillTree.title2}</span>
          </h2>
        </motion.div>

        <div className="w-full h-full relative">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start relative z-10">
            {paths.map((path, pIdx) => (
              <MapIsland key={pIdx} path={path} layout={mapLayouts[path.id]} t={t} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

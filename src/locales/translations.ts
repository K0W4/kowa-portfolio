export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      projects: "Meus Projetos",
      about: "Sobre Mim",
      skillTree: "Habilidades",
      contact: "Contato"
    },
    hero: {
      subtitle: "Desenvolvedor iOS e Web",
      contactBtn: "Contato",
      projectsBtn: "Meus Projetos",
    },
    about: {
      title1: "Sobre ",
      title2: "Mim",
      paragraph1: "Toda grande expedição rumo ao desconhecido começa ao redor de uma fogueira. Iniciei minha jornada acadêmica no curso de <span class=\"text-action font-semibold\">Engenharia de Software</span> pela <span class=\"text-action font-semibold\">PUCRS</span>, onde transformei minha curiosidade em fundamento. Ali, aprendi que a teoria e a lógica estruturada são o oxigênio essencial para sustentar qualquer missão de longo alcance no universo da tecnologia.",
      paragraph2: "Atualmente, como desenvolvedor na <span class=\"text-action font-semibold\">Apple Developer Academy</span>, vivo uma verdadeira jornada de descoberta. Em um ambiente onde expandi meus horizontes muito além do código puro, mergulhando no <span class=\"text-action font-semibold\">ecossistema iOS</span>, no design de interfaces e o mais importante, na <span class=\"text-action font-semibold\">experiência do usuário</span>. Mais do que dominar ferramentas, absorvi a importância da colaboração, transformando cada desafio em uma oportunidade para criar experiências fluidas e inovadoras.",
      paragraph3: "Olhando para o futuro, meu grande sonho é fundir o poder da tecnologia com a magia do storytelling através do <span class=\"text-action font-semibold\">desenvolvimento de jogos</span>. Acredito que mecânicas bem arquitetadas têm o poder de transportar pessoas para novas realidades. Minha busca agora é dominar essa intersecção, construindo universos onde cada linha de código contribui para uma experiência inesquecível.",
    },
    skillTree: {
      title1: "",
      title2: "Habilidades",
      swipeHint: "Deslize para explorar",
      paths: {
        games: {
          name: "Desenvolvimento de Jogos",
          desc: "",
          skills: ["Storytelling", "Game Design", "Unity (C#)", "Godot", "GameMaker", "Unreal (C++)"]
        },
        ios: {
          name: "Ecossistema Apple e Design",
          desc: "",
          skills: ["Swift", "SwiftUI", "UIKit", "ARKit", "RealityKit", "App Store", "CoreML", "SpriteKit", "GameKit", "Figma"]
        },
        web: {
          name: "Desenvolvimento Web",
          desc: "",
          skills: ["HTML", "CSS", "TypeScript", "JavaScript", "React", "Tailwind", "Node.js", "Vite", "Framer Motion"]
        },
        backend: {
          name: "Back-end & Dados",
          desc: "",
          skills: ["Python", "Java", "SQL", "MongoDB", "Docker", "PostgreSQL", "GitHub"]
        }
      }
    },
    projects: {
      title1: "Meus ",
      title2: "Projetos",
      viewProject: "Explorar Projeto",
      items: [
        {
          id: "lich-king",
          title: "Rise of the Lich King",
          category: "iOS Game",
          description: "Defenda seu castelo unindo estratégia profunda de Tower Defense com mecânicas viciantes de Merge.",
          tags: ["Swift", "SpriteKit", "GameplayKit", "Game Design", "App Store"],
          image: "/lich-king.jpeg",
          link: "https://apps.apple.com/br/app/rise-of-the-lich-king/id6760662821"
        },
        {
          id: "cerne",
          title: "Cerne",
          category: "iOS App",
          description: "Mapeamento coletivo do potencial de captura de carbono de árvores urbanas usando Realidade Aumentada.",
          tags: ["Swift", "SwiftUI", "ARKit", "RealityKit", "App Store"],
          image: "/cerne.jpeg",
          link: "https://apps.apple.com/br/app/cerne-captura-de-co/id6751984534"
        },
        {
          id: "dopamine-news",
          title: "DopamineNews",
          category: "iOS App",
          description: "Um ritual diário que reúne notícias, jogos de palavras e reflexões para estimular sua mente em poucos minutos.",
          tags: ["Swift", "SwiftUI", "UIKit", "Storytelling", "App Store"],
          image: "/dopamine.jpeg",
          link: "https://apps.apple.com/br/app/dopamine-news/id6755773697"
        },
        {
          id: "carezza",
          title: "Carezza",
          category: "Plataforma Web",
          description: "Landing page premium de alta conversão para perfumaria de luxo, com foco em micro-interações e design sofisticado.",
          tags: ["TypeScript", "React", "Tailwind", "Vite", "Node.js"],
          image: "/carezza.png",
          link: "https://carezza.vercel.app/#"
        }
      ]
    },
    footer: {
      rights: "Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      projects: "My Projects",
      about: "About Me",
      skillTree: "Skill Tree",
      contact: "Contact"
    },
    hero: {
      subtitle: "iOS and Web Developer",
      contactBtn: "Contact",
      projectsBtn: "My Projects",
    },
    about: {
      title1: "About ",
      title2: "Me",
      paragraph1: "Every great expedition into the unknown begins around a campfire. I started my academic journey in <span class=\"text-action font-semibold\">Software Engineering</span> at <span class=\"text-action font-semibold\">PUCRS</span>, where I turned my curiosity into foundation. There, I learned that theory and structured logic are the essential oxygen needed to sustain any long-range mission in the tech universe.",
      paragraph2: "Currently, as a developer at the <span class=\"text-action font-semibold\">Apple Developer Academy</span>, I am living a true journey of discovery. In an environment where I expanded my horizons far beyond raw code, diving deep into the <span class=\"text-action font-semibold\">iOS ecosystem</span>, interface design, and most importantly, <span class=\"text-action font-semibold\">user experience</span>. More than mastering tools, I've absorbed the importance of collaboration, turning every challenge into an opportunity to craft fluid and innovative experiences.",
      paragraph3: "Looking to the future, my ultimate dream is to merge the power of technology with the magic of storytelling through <span class=\"text-action font-semibold\">game development</span>. I believe that well-architected mechanics have the power to transport people to new realities. My quest now is to master this intersection, building universes where every line of code contributes to an unforgettable experience.",
    },
    skillTree: {
      title1: "Skill ",
      title2: "Tree",
      swipeHint: "Swipe to explore",
      paths: {
        games: {
          name: "Game Development",
          desc: "",
          skills: ["Storytelling", "Game Design", "Unity (C#)", "Godot", "GameMaker", "Unreal (C++)"]
        },
        ios: {
          name: "Apple Ecosystem & Design",
          desc: "",
          skills: ["Swift", "SwiftUI", "UIKit", "ARKit", "RealityKit", "App Store", "CoreML", "SpriteKit", "GameKit", "Figma"]
        },
        web: {
          name: "Web Development",
          desc: "",
          skills: ["HTML", "CSS", "TypeScript", "JavaScript", "React", "Tailwind", "Node.js", "Vite", "Framer Motion"]
        },
        backend: {
          name: "Back-end & Data",
          desc: "",
          skills: ["Python", "Java", "SQL", "MongoDB", "Docker", "PostgreSQL", "GitHub"]
        }
      }
    },
    projects: {
      title1: "My ",
      title2: "Projects",
      viewProject: "Explore Project",
      items: [
        {
          id: "lich-king",
          title: "Rise of the Lich King",
          category: "iOS Game",
          description: "Defend your castle by combining deep Tower Defense strategy with highly addictive Merge mechanics.",
          tags: ["Swift", "SpriteKit", "GameplayKit", "Game Design", "App Store"],
          image: "/lich-king.jpeg",
          link: "https://apps.apple.com/br/app/rise-of-the-lich-king/id6760662821"
        },
        {
          id: "cerne",
          title: "Cerne",
          category: "iOS App",
          description: "Collective mapping of the carbon capture potential of urban trees using Augmented Reality.",
          tags: ["Swift", "SwiftUI", "ARKit", "RealityKit", "App Store"],
          image: "/cerne.jpeg",
          link: "https://apps.apple.com/br/app/cerne-captura-de-co/id6751984534"
        },
        {
          id: "dopamine-news",
          title: "DopamineNews",
          category: "iOS App",
          description: "A daily ritual combining news, word games, and reflections to stimulate your mind in just a few minutes.",
          tags: ["Swift", "SwiftUI", "UIKit", "Storytelling", "App Store"],
          image: "/dopamine.jpeg",
          link: "https://apps.apple.com/br/app/dopamine-news/id6755773697"
        },
        {
          id: "carezza",
          title: "Carezza",
          category: "Web Platform",
          description: "Premium, high-conversion landing page for luxury perfumery, featuring micro-interactions and sophisticated design.",
          tags: ["TypeScript", "React", "Tailwind", "Vite", "Node.js"],
          image: "/carezza.png",
          link: "https://carezza.vercel.app/#"
        }
      ]
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};
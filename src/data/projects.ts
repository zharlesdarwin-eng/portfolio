export interface LocalizedProject {
  id: string;
  category: string;
  year: string;
  color: string;
  liveUrl: string;
  nextProjectId?: string;
  image: string;
  gallery: string[];
  nl: {
    title: string;
    role: string;
    client: string;
    description: string;
    fullOverview: string;
    challenges: string;
    solution: string;
    technologies: string[];
  };
  en: {
    title: string;
    role: string;
    client: string;
    description: string;
    fullOverview: string;
    challenges: string;
    solution: string;
    technologies: string[];
  };
}

export const projectsData: LocalizedProject[] = [
  {
    id: "decimal",
    category: "Design & Development",
    year: "2024",
    color: "#1C1D20",
    liveUrl: "https://decimal.io",
    nextProjectId: "fabric",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    nl: {
      title: "Decimal",
      role: "Lead Ontwerp & Front-End Architectuur",
      client: "Decimal Studio Inc.",
      description: "Portfolio- en merkbeleving voor digitale studio Decimal met vloeiende micro-interacties en WebGL canvas.",
      fullOverview: "Decimal is een internationale digitale ontwerpstudio gericht op vooruitstrevende branding en maatwerksoftware. Het doel was een compromisloos digitaal thuis te bouwen dat hun precisie-engineering en radicale minimalisme weerspiegelt. De ervaring biedt een uiterst responsieve lay-out met vloeibare typografie.",
      challenges: "Het integreren van krachtige WebGL shaders met de Next.js App Router zonder trillingen of overbelasting op mobiele apparaten.",
      solution: "Een aangepaste canvas scheduler ontwikkeld die berekeningen buiten het zichtveld pauzeert en zware wiskunde overlaat aan de GPU fragment shaders, waardoor de framerate altijd 60fps+ blijft.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "GSAP ScrollTrigger", "Lenis"]
    },
    en: {
      title: "Decimal",
      role: "Lead Design & Front-End Architecture",
      client: "Decimal Studio Inc.",
      description: "Portfolio and brand experience for digital studio Decimal with fluid micro-interactions and smooth WebGL canvas.",
      fullOverview: "Decimal is an international digital design studio focused on progressive branding and bespoke software. The objective was to construct an uncompromising digital home that reflects their precision engineering and radical minimalism. The experience features an ultra-responsive layout with bespoke fluid typography that scales with viewport precision.",
      challenges: "Integrating high-performance WebGL shaders with Next.js App Router without causing paint jitter or CPU overload on mobile battery-saver modes.",
      solution: "Developed a custom canvas scheduler that throttles rendering outside visible viewports and offloads heavy math transformations to GPU fragment shaders, keeping frame rates locked at 60fps+.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "GSAP ScrollTrigger", "Lenis"]
    }
  },
  {
    id: "fabric",
    category: "Development",
    year: "2024",
    color: "#28292c",
    liveUrl: "https://fabric.co",
    nextProjectId: "twok",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    nl: {
      title: "Fabric Agency",
      role: "Creatief Front-End Ontwikkelaar",
      client: "Fabric Agency London",
      description: "Interactieve, typografische showcase website met geavanceerde GSAP scroll-triggers en soepele traagheidsovergangen.",
      fullOverview: "Fabric Agency is een creatief collectief uit Londen gespecialiseerd in culturele campagnes en high-fashion digitale kunst. Zij wilden een website die aanvoelt als een redactioneel kunsttijdschrift in plaats van een doorsnee bedrijfswebsite.",
      challenges: "Het synchroon laten lopen van asynchrone parallaxe kolommen waarbij typografie en beelden in verschillende snelheden bewegen zonder de DOM scroll-grenzen te breken.",
      solution: "Maatwerk GSAP ScrollTrigger tijdlijnen gekoppeld aan een centrale virtuele Lenis scroll-instantie voor wiskundige precisie op elk beeldschermformaat.",
      technologies: ["Next.js", "React 19", "GSAP Flip & ScrollTrigger", "Tailwind CSS", "Framer Motion"]
    },
    en: {
      title: "Fabric Agency",
      role: "Creative Front-End Developer",
      client: "Fabric Agency London",
      description: "Interactive, typography-first showcase site featuring advanced GSAP scroll triggers and smooth inertia transitions.",
      fullOverview: "Fabric Agency is a London-based creative collective specializing in cultural campaigns and high-fashion digital art. They required a website that felt more like an editorial art magazine than a conventional corporate page. Every headline interacts with mouse velocity and scroll inertia.",
      challenges: "Creating multi-column asynchronous parallax columns where typography and images glide at differing ratios without breaking DOM scroll boundaries.",
      solution: "Implemented custom GSAP ScrollTrigger timelines synced to a global Lenis virtual scroll instance, maintaining mathematical sync across dual-monitor and ultrawide viewports.",
      technologies: ["Next.js", "React 19", "GSAP Flip & ScrollTrigger", "Tailwind CSS", "Framer Motion"]
    }
  },
  {
    id: "twok",
    category: "Design & Interaction",
    year: "2023",
    color: "#141517",
    liveUrl: "https://twok.studio",
    nextProjectId: "alva",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    ],
    nl: {
      title: "TWOK Studio",
      role: "UI/UX & Creative Technologist",
      client: "TWOK Global",
      description: "Innovatieve digitale ervaring voor strategische consultancy met tactiele cursor feedback en geluidseffecten.",
      fullOverview: "TWOK Studio biedt strategisch designadvies voor toonaangevende techbedrijven. De website combineert een uitgesproken typografische hiërarchie met tactiele micro-interacties en magnetische oppervlakken.",
      challenges: "Het ontwerpen van vloeiende magnetische elementen die natuurlijk en levendig aanvoelen zonder vertraging op mobiel.",
      solution: "Elastische veerkrachtformules toegepast in combinatie met geoptimaliseerde event listeners voor onmiddellijke reactie bij aanraking.",
      technologies: ["TypeScript", "Next.js", "Web Audio API", "Tailwind CSS", "GSAP InertiaPlugin"]
    },
    en: {
      title: "TWOK Studio",
      role: "UI/UX & Creative Technologist",
      client: "TWOK Global",
      description: "Next-generation digital experience built for creative consultancy with custom cursor feedback loops and audio elements.",
      fullOverview: "TWOK Studio provides strategic design direction for emerging tech companies and venture funds. The website merges brutalist typographic hierarchy with tactile micro-interactions, magnetic drag surfaces, and subtle synthesized audio feedback when switching portfolio states.",
      challenges: "Building tactile physics-based magnetic controls that feel organic rather than scripted, ensuring zero touch latency on iOS Safari.",
      solution: "Utilized spring inertia formulas (`elastic.out`) alongside Web Audio API synthesis triggers that preload instantaneously upon hover intent.",
      technologies: ["TypeScript", "Next.js", "Web Audio API", "Tailwind CSS", "GSAP InertiaPlugin"]
    }
  },
  {
    id: "alva",
    category: "Full Experience",
    year: "2023",
    color: "#232427",
    liveUrl: "https://alva-yachts.com",
    nextProjectId: "carrara",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    nl: {
      title: "Alva Yachts",
      role: "Lead Digital Architect",
      client: "Alva Yachts Monaco",
      description: "Luxe maritieme merkpresentatie voor duurzame catamarans met horizontale parallax en video-scrubbing.",
      fullOverview: "Alva Yachts ontwerpt en bouwt luxe elektrische catamarans en zeiljachten op zonne-energie. Deze presentatie brengt de rust van emissieloos varen over met panoramische scènes en technische details.",
      challenges: "Het vloeiend laden van zware videofragmenten zonder de eerste laadtijd van de pagina te belemmeren.",
      solution: "Een intelligente pre-fetcher gebouwd die automatisch schakelt tussen geoptimaliseerde beeldenreeksen en high-res videostreams.",
      technologies: ["Next.js", "Tailwind CSS", "Video Scrubbing", "GSAP", "Lenis Smooth Scroll"]
    },
    en: {
      title: "Alva Yachts",
      role: "Lead Digital Architect",
      client: "Alva Yachts Monaco",
      description: "Luxury marine brand presentation highlighting sustainable catamarans with custom horizontal parallax and high-res video triggers.",
      fullOverview: "Alva Yachts designs and manufactures luxury electric solar catamarans and sailing yachts. The digital showcase captures the serene experience of zero-emission ocean travel with sweeping horizontal scroll scenes, seamless 4K video scrubbing, and technical specification comparisons.",
      challenges: "Streaming heavy 4K video segments without blocking the initial critical rendering path or causing layout cumulative shifts.",
      solution: "Built an intelligent media pre-fetcher that dynamically switches from low-bitrate WebP image sequences on slower connections to high-definition MP4 streams on desktop broadband.",
      technologies: ["Next.js", "Tailwind CSS", "Video Scrubbing", "GSAP", "Lenis Smooth Scroll"]
    }
  },
  {
    id: "carrara",
    category: "Concept & Design",
    year: "2023",
    color: "#1e1f23",
    liveUrl: "https://carrara.design",
    nextProjectId: "decimal",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    ],
    nl: {
      title: "Carrara Studio",
      role: "Art Director & Frontend Engineer",
      client: "Carrara Architecture Milan",
      description: "Minimalistisch architectuur- en interieurportfolio met nadruk op harmonieuze verhoudingen en witruimte.",
      fullOverview: "Carrara Studio is een architectenbureau uit Milaan bekend om marmerrestauraties en moderne woonsculpturen. Het platform viert rust en harmonie, waarbij de architectuurfotografie volledig tot haar recht komt.",
      challenges: "Het ontwerpen van een naadloze overgang tussen het projectenoverzicht en de diepgaande casestudy zonder merkbare wachttijd.",
      solution: "Curve-transities geïmplementeerd die berekend worden op het schermcoördinaat van de bezoeker voor een intuïtieve navigatie.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"]
    },
    en: {
      title: "Carrara Studio",
      role: "Art Director & Frontend Engineer",
      client: "Carrara Architecture Milan",
      description: "Minimalist architectural and interior portfolio emphasizing clean negative space and magnetic dynamic navigation.",
      fullOverview: "Carrara Studio is a Milanese architectural firm renowned for marble restoration and modern residential monolithic structures. The platform celebrates negative space and proportional harmony, letting high-contrast photography of physical spaces take center stage.",
      challenges: "Creating a seamless page transition that preserves scroll position and smoothly morphs project card bounding boxes into fullscreen hero sections.",
      solution: "Designed SVG bezier curve curtain transitions that calculate container coordinates on click, producing zero perceived latency when navigating between index and case studies.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"]
    }
  }
];

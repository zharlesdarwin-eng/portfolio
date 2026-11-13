# Implementatieplan: 1-op-1 Kloon Dennis Snellenberg Portfolio

Dit document beschrijft het stappenplan voor het ontwikkelen van de Dennis Snellenberg portfolio kloon met Next.js (App Router), Tailwind CSS, GSAP (ScrollTrigger), Lenis smooth scrolling, en verfijnde interacties (magnetisme, custom cursor, SVG curve transities).

---

## Overzicht van de Fases

- [x] **Fase 1: Project Setup & Basis Architectuur**
  - [x] Next.js (App Router) geïnitialiseerd met TypeScript & Tailwind CSS
  - [x] Essentiële dependencies geïnstalleerd: `gsap`, `lenis`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`
  - [x] Tailwind configuratie & globale CSS ingericht (custom styles, selection, marquee animation, lenis styles)
  - [x] Lokale JSON datastructuur aangemaakt voor projecten en biografie (`src/data/site.json`)
  - [x] Strict TypeScript types gedefinieerd voor projecten en site metadata (`src/types/index.ts`)

- [x] **Fase 2: Basis Lay-out & Routing & Pagina Transities**
  - [x] Root Layout opgezette met semantische tags (`header`, `main`, `footer`)
  - [x] Lenis Smooth Scrolling provider geïmplementeerd met GSAP ticker integratie (`src/components/providers/SmoothScroll.tsx`)
  - [x] Dennis Snellenberg SVG Curve Curtain animatie gerealiseerd in Preloader
  - [x] Header / Navigatiebalk geïmplementeerd met live tijdzone (Europe/Amsterdam), locatie en interactieve links
  - [x] Volledige fullscreen sliding navigatie-overlay gebouwd met gestaggerde links en socials

- [x] **Fase 3: Core Interactieve Componenten**
  - [x] **Custom Cursor:**
    - Subtiele ronde cursor volgt muispositie via 60fps GSAP `quickTo` lerp
    - Hover detectie met context-switch (uitvergroten op klikbare elementen, "View" badge op projecten)
    - Automatische uitschakeling op touch-apparaten / mobiel
  - [x] **Magnetic Button & Element:**
    - Herbruikbare `Magnetic` component met veerkracht en inertia
    - Zowel container als binnentekst onafhankelijk laten meebewegen voor subtiele 3D parallax

- [x] **Fase 4: Pagina Ontwikkeling & Secties**
  - [x] **Pre-loader:** Meertalige begroetingen cyclus ("Hello", "Bonjour", "Ciao", "Olà", etc.) met curved SVG curtain release
  - [x] **Hero Sectie:** Kolossale naam met infinite looping marquee, dynamische tijd/locatie pills en Dennis silhouette portrait
  - [x] **About / Intro Sectie:** Typografische bio met woord-voor-woord scroll reveal via GSAP ScrollTrigger + ronde CTA
  - [x] **Work (Cases) Sectie:** Lijstweergave van projecten met interactieve zwevende afbeelding die de cursor volgt op desktop en responsive inline cards op mobiel
  - [x] **Footer Sectie:** Grote "Let's work together" banner, ronde magnetische CTA knop, live Amsterdam klok en social links

- [x] **Fase 5: Geavanceerde Animaties & Interacties**
  - [x] GSAP ScrollTrigger context en cleanup correct ingericht zonder geheugenlekken
  - [x] Snellenberg cubic-bezier curves toegepast
  - [x] Volledig responsive ontworpen met touch-safe guards

- [x] **Fase 6: Optimalisatie, Toegankelijkheid & Beveiliging**
  - [x] **SEO & Metadata:** Complete Open Graph tags, Twitter card, robots, dynamische viewport en metadata
  - [x] **Security:** Beveiligde HTTP headers in `next.config.ts` (CSP, X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy)
  - [x] **Build & Performance:** Foutloze productie-build geverifieerd via Next.js Turbopack compiler

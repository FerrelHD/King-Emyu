# The Fergie Era — Manchester United (1986–2013)
### *An Interactive Editorial Retrospective on Football's Greatest Dynasty*

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock)](https://greensock.com/)
[![Lenis](https://img.shields.io/badge/Lenis-1.1-orange)](https://lenis.darkroom.engineering/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> *"26 Years. 38 Trophies. One Manager."*
> From inheriting a 19th-place First Division team crippled by drinking culture in November 1986 to thirty-eight major honors — Sir Alex Ferguson forged modern sport's most relentless dynasty.

---

## 📖 About The Project

**The Fergie Era** is an AWWWARDS-inspired interactive, scroll-driven editorial experience commemorating the 26-year managerial reign of Sir Alex Ferguson at Manchester United Football Club.

Built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4, the project fuses deep sports storytelling with high-end editorial typography, authentic archival photography, and silky smooth kinetic animations.

---

## 🏆 Key Features

- **Smooth Kinetic Virtual Scroll**: Powered by Lenis, manually driven via the GSAP master ticker (`gsap.ticker.add`) for stutter-free, 60fps synchronization with `ScrollTrigger`.
- **Authentic Archival Squad Photography**: Real historic squad team photos from Old Trafford and Carrington across Ferguson's major eras:
  - *1986/87 Original Squad* (Bryan Robson, Whiteside, McGrath)
  - *1993/94 Double Winners* (Cantona, Hughes, Bruce, Pallister)
  - *1998/99 Treble Immortals* (Class of '92, Keane, Yorke, Cole)
  - *2007/08 European Double Champions* (Ronaldo, Rooney, Ferdinand, Vidić)
- **Camp Nou 90+3' Tactical Blueprint**: Authentic SVG line animation depicting the coordinate pass trajectory of Ole Gunnar Solskjær's 92:17 Champions League winner (Beckham outswing corner &rarr; Sheringham flick &rarr; Solskjær volley).
- **The Ferguson Signature**: Interactive animated SVG rendering of Sir Alex Ferguson's cursive signature in the Farewell epilogue.
- **The Three Dynasties (Vertical Tabs Gallery)**: Auto-playing vertical tabbed gallery with duration progress indicators, hover-to-inspect pause, and smooth vertical slide transitions.
- **The Relentless Ledger (1993–1999)**: Minimalist Swiss-style chronological season-by-season table replacing generic graphs with data-driven historical records.
- **The Carrington Registry (Class of '92)**: Pinned horizontal archival dossier of David Beckham, Ryan Giggs, Paul Scholes, Gary Neville, Phil Neville, and Nicky Butt, featuring authentic Ferguson scouting quotes.
- **Strict 2-Line Editorial Typography**: Carefully tuned responsive scaling using `Syne` (display) and `Inter` (body) guaranteeing headlines stay clean and balanced across all screen sizes.

---

## 🏛️ Narrative Structure (3 Acts &middot; 11 Chapters)

1. **Preloader**: 1986 &rarr; 2013 year-counter intro with upward curtain wipe.
2. **Act I &middot; Hero**: Sir Alex Ferguson tunnel portrait, 2-line kinetic headline, and career core metrics.
3. **Act I &middot; The Appointment (1986)**: Scroll-converging typography (`THE INHERITED SQUAD`) and 1986 authentic team dossier.
4. **Act I &middot; The Rebuild & Class of '92**: Horizontal archival card scrub highlighting the 6 homegrown academy icons.
5. **Act II &middot; First Title (1993)**: Ending the 26-year drought with the Eric Cantona catalyst.
6. **Act II &middot; The Relentless Ledger (1993–1999)**: Chronological season-by-season march to European hegemony.
7. **Act II &middot; The Treble 1999 (Centerpiece)**: Pinned 3-stage reveal of the 10 Days in May + Camp Nou 90+3' Tactical Blueprint.
8. **Act III &middot; Three Dynasties**: Interactive Vertical Tabs Gallery featuring authentic 1994, 1999, and 2008 squad photos.
9. **Act III &middot; The Colossal Scale**: Asymmetric data spread with scrubbed counters for 894 wins, 38 trophies, and 9,694 days.
10. **Act III &middot; Legacy Timeline**: Horizontal milestone journey through Ronaldo, Rooney, Moscow 2008, and Title 20.
11. **Epilogue &middot; The Farewell**: Word-by-word reveal of the 2013 Old Trafford address + animated Ferguson signature.
12. **Colophon & Closing**: Archival colophon with "Return to Summit" smooth scroll trigger.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.3.4 (Turbopack, App Router)](https://nextjs.org/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Core Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@theme` tokens) |
| **Animations** | [GSAP 3.12](https://greensock.com/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) |
| **Motion Physics** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis 1.1](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | `Syne` (Display) & `Inter` (Body) via `next/font` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FerrelHD/King-Emyu.git
   cd King-Emyu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

To test and create the production bundle:
```bash
npm run build
npm run start
```

---

## 📜 License

This project is created for educational, portfolio, and retrospective tribute purposes.
Content, quotes, and photographic archives are the intellectual property of Manchester United F.C. and their respective rights holders.
Code is released under the [MIT License](LICENSE).

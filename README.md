# Userlify

A modern design agency website built with Next.js 15, Tailwind CSS, and GSAP animations.

## 🚀 Features

- **Next.js 15** with App Router
- **React 19** with latest features
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **GSAP** for smooth animations
- **Responsive Design** mobile-first approach
- **SEO Optimized** with meta tags and Open Graph
- **Performance Focused** with optimized images and fonts

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── features/           # Features page
│   ├── case-study/         # Case studies page
│   ├── pricing/            # Pricing page
│   └── get-quote/          # Get a quote page
├── components/
│   ├── layout/             # Layout components (Header, Footer)
│   ├── sections/           # Page sections
│   ├── ui/                 # Reusable UI components
│   └── icons/              # SVG icon components
├── lib/                    # Utility functions and helpers
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── constants/              # App-wide constants
├── styles/                 # Global styles
└── assets/                 # Static assets (images, fonts)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 24+
- pnpm 9+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SparkStudio-Ltd/userlify.git
   cd userlify
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm clean` | Clean build artifacts |

## 🎨 Design System

### Colors

- **Primary**: Purple (#3D1D5C) - Used for headings and primary text
- **Accent**: Orange (#E85A3C) - Used for CTAs and highlights
- **Background**: Soft cream (#FDF8F6) - Used for backgrounds

### Typography

- **Sans**: Inter - Used for body text
- **Heading**: Playfair Display - Used for headings

## 📦 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/)
- [pnpm](https://pnpm.io/)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with ❤️ by [SparkStudio-Ltd](https://github.com/SparkStudio-Ltd)

# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Three.js.

## Features

- 🎨 Modern UI/UX with DaisyUI and Tailwind CSS
- 🌓 Light/Dark theme with persistence
- 🎬 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Interactive 3D elements with Three.js
- ⚡ Optimized performance
- 🔍 SEO friendly
- 🌐 Cross-browser compatibility
- ♿ Accessibility features

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- DaisyUI
- Three.js
- Framer Motion
- React Type Animation
- Iconify

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.0.0 or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Create a production build:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   │   ├── providers/      # Context providers
│   │   ├── sections/       # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Static data and content
│   ├── lib/               # Utilities and hooks
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # Helper functions
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
└── tailwind.config.ts    # Tailwind CSS configuration
```

## Customization

### Theme

The theme can be customized in `tailwind.config.ts`. The default theme uses the following colors:

```js
{
  "modern": {
    "primary": "#6366f1",
    "secondary": "#4f46e5",
    "accent": "#818cf8",
    "neutral": "#1f2937",
    "base-100": "#0f172a",
    ...
  }
}
```

### Content

Update the content in `src/data/portfolio.ts` with your own information:

- Experiences
- Projects
- Technologies
- Social links

## Deployment

The project is configured for deployment on Vercel. Simply push to your repository and connect it to Vercel for automatic deployments.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

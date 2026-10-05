# Rafał Curzydło | Portfolio

Personal portfolio website for Rafał Curzydło, focused on frontend engineering, backend development, infrastructure, automation, monitoring, networking and homelab projects.

The project is being rebuilt as a more focused and visual portfolio experience. It combines a dark, warm-toned design system with responsive layouts, subtle motion and a clear technical narrative.

## Project Status

This project is actively developed. The current implementation includes the hero experience, responsive navigation, animated calls to action and a responsive skills bar. Additional portfolio sections will be added as the project evolves.

## Highlights

- Responsive hero section for desktop and mobile viewports.
- Full-height visual composition with preserved image proportions.
- Responsive navbar with desktop links and a mobile menu.
- Animated `Poznaj mnie` call to action with hover feedback.
- Animated `Scrolluj dalej` indicator with reduced-motion support.
- Skills bar with Lucide icons and an infinite Motion marquee when the content overflows the viewport.
- Centralized design tokens defined as CSS custom properties.
- Tailwind CSS v4 utility-based styling.

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for animation and interaction
- [Lucide React](https://lucide.dev/) for interface icons
- [ESLint](https://eslint.org/) with Next.js rules

## Design Direction

The interface uses a dark infrastructure-inspired visual language with warm gold accents. Shared colors are defined in `app/globals.css` and consumed through CSS variables, for example:

```css
:root {
  --bg-950: #070706;
  --gold-primary: #e0ad56;
  --text-primary: #f4efe7;
}
```

The current design favors:

- strong contrast and restrained surfaces,
- warm gold accents for interaction and hierarchy,
- compact technical metadata,
- responsive composition instead of fixed desktop-only layouts,
- motion that supports attention without overwhelming the content.

## Project Structure

```text
app/
  globals.css       # Global styles and design tokens
  layout.tsx        # Root layout and navbar
  page.tsx          # Homepage entry point

components/
  hero/
    Hero.tsx        # Main hero composition
    HeroButton.tsx  # Animated primary CTA
    HeroScroll.tsx  # Scroll indicator animation
    HeroSkill.tsx   # Responsive skills bar and marquee
  navbar/
    Navbar.tsx      # Responsive desktop/mobile navigation

images/
  hero.png          # Hero artwork
```

## Getting Started

### Requirements

- Node.js 20 or newer
- npm 10 or newer

### Installation

```bash
git clone https://github.com/Szadolowski/rc-portfolio.git
cd rc-portfolio
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

If port `3000` is already in use, run the project on another port:

```bash
npm run dev -- --port 3001
```

### Available Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Starts the Next.js development server.       |
| `npm run build` | Creates a production build.                  |
| `npm start`     | Starts the production server after building. |
| `npm run lint`  | Runs ESLint across the project.              |

## Accessibility and Responsive Behavior

- The navigation switches to a mobile menu below the `md` breakpoint.
- The skills bar becomes horizontally scrollable when its items no longer fit.
- Motion-based effects respect the user's `prefers-reduced-motion` setting.
- Interactive elements include visible keyboard focus states.
- Text sizes and spacing adapt between mobile and desktop layouts.

## Previous Portfolio

The previous version of the portfolio is available here:

- [Its-me on GitHub](https://github.com/Szadolowski/Its-me)
- [Previous live portfolio](https://itsmerafal.netlify.app/)

## Contact

- GitHub: [Szadolowski](https://github.com/Szadolowski)
- LinkedIn: [Rafał Curzydło](https://www.linkedin.com/in/rafalcurzydlo/)

## License

This project is a personal portfolio. The source code is shared for reference and educational purposes; reuse of personal branding, copy and visual assets is not implied.

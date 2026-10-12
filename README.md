# SanharSGT Website

Marketing website for **SanharSGT** — enterprise healthcare IT, Hospital Information Management Systems (HIMS), business intelligence, and digital healthcare platforms for hospitals and medical institutions.

Live site: [www.sanharsgt.com](https://www.sanharsgt.com/)

## Tech Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Framer Motion](https://motion.dev/) and [GSAP](https://gsap.com/) for animation
- [OGL](https://github.com/oframe/ogl) for WebGL effects (circular gallery)
- [Firebase Hosting](https://firebase.google.com/docs/hosting) for deployment

## Getting Started

**Prerequisites:** Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (exposed on your LAN via --host)
```

The dev server runs at <http://localhost:5173> by default.

## Scripts

| Command           | Description                                  |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload    |
| `npm run build`   | Build the production site into `dist/`       |
| `npm run preview` | Serve the production build locally           |
| `npm run lint`    | Run ESLint across the project                |

## Project Structure

```
├── public/              # Static files served as-is (favicon, manifest, robots.txt, sitemap.xml, certifications)
├── src/
│   ├── components/      # One component per page section (Hero, Solutions, Platforms, Contact, …)
│   ├── data/            # All editable site content, one file per section
│   ├── utils/           # Shared helpers (image handling)
│   ├── App.jsx          # Page layout — the order sections appear in
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles and Tailwind setup
├── index.html           # HTML shell with SEO / Open Graph meta tags
├── firebase.json        # Firebase Hosting config (serves dist/)
└── CLIENT_HANDOFF.md    # Non-technical guide to editing content
```

## Editing Content

All copy, stats, images, and lists live in [`src/data/`](src/data/), separate from the component code. To change what the site says, edit the matching data file — for example, [`heroContent.js`](src/data/heroContent.js) controls the homepage banner and headline stats.

See [CLIENT_HANDOFF.md](CLIENT_HANDOFF.md) for a step-by-step guide aimed at non-developers.

To add, remove, or reorder page sections, edit [`src/App.jsx`](src/App.jsx).

## Deployment

The site is hosted on Firebase (project `sanhar-sgt`) and served from the `dist/` folder.

```bash
npm run build
firebase deploy --only hosting
```

Deploying requires the [Firebase CLI](https://firebase.google.com/docs/cli) (`npm install -g firebase-tools`) and access to the Firebase project (`firebase login`).

## Repositories

This project is mirrored to two remotes:

- `origin` — <https://github.com/Eshwar-ui/sanharSGT>
- `org` — <https://github.com/Velvo-media/sanhar-website>

Push changes to both with:

```bash
git push origin <branch>
git push org <branch>
```

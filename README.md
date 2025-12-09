# Mohammad Alselek - Academic Portfolio

This is the source code for the personal academic portfolio website of Mohammad Alselek, Assistant Professor in Computer Science at the University of the West of Scotland.

## Overview

The website showcases:
- Academic Profile & Biography
- Research Projects & Grants (Edge AI, TinyML, IoT)
- Professional Experience Timeline
- Teaching & Curriculum Development
- Publication List
- Technical Skills

## Built With

- **React**: UI Component library
- **TypeScript**: Type safety and logic
- **Tailwind CSS**: Styling and responsive design
- **Vite**: Build tool and development server

## Local Development

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## Deployment (GitHub Pages)

This repo ships with a GitHub Actions workflow that builds to `dist` and publishes to the `gh-pages` branch.

1. Go to **Settings → Pages** in your GitHub repo and set the source to `Deploy from a branch` → `gh-pages`.
2. Push to `main` (or `master`). The workflow at `.github/workflows/deploy.yml` will build and publish automatically.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## Adding Photos & Videos

Static assets belong in the Vite `public` folder:
- Profile photo: place the file at `public/profile.jpg` (update the filename in `components/Hero.tsx` if you use a different name).
- Project media: drop images/videos in `public/media/` and keep the relative paths in `constants.ts` (e.g., `media/my-demo.mp4`).
- Use `.mp4` for videos to match the existing `<video>` tags.

After adding or updating assets, commit them and push; the next deployment will include them.

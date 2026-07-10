# Portfolio

My personal portfolio site, built to showcase my projects and background as a CS student.

**Live site:** portfolio-omega-ten-dua3vid4c3.vercel.app

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, shadcn/ui
- **Database:** Turso (SQLite)
- **Image hosting:** Cloudinary
- **Email:** Resend
- **Deployment:** Vercel

## Features

- Fully responsive, single-page layout: Hero, About, Projects, Contact
- Projects fetched server-side from a Turso database
- Contact form writes to the database and sends an email notification
- Custom 404 page
- Scroll-triggered animations

## Running locally

```bash
git clone https://github.com/Sifen-W/portfolio.git
cd portfolio
npm install
```

Create a `.env.local` file based on `.env.example` and fill in your own values for Turso, Cloudinary, and Resend.

```bash
npm run dev
```

## Project structure

```
src/
├── app/              # pages, layout, server actions
├── components/       # sections + shadcn/ui components
├── lib/              # Turso client, Cloudinary helpers
└── types/            # shared TypeScript types
```
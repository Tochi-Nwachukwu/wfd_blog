# iDecide Blog

**Project Author:** Tochi Nwachukwu

---

## Infrastructure Diagram

![Infrastructure Diagram](https://res.cloudinary.com/dbpoqqa9i/image/upload/fl_preserve_transparency/v1755725208/Screenshot_2025-08-20_at_10.26.28_PM_zcgxzi.jpg?_s=public-apps)

---

## Project Description

iDecide Blog is a modern platform built with **Next.js**, **Drizzle ORM**, and **Postgres**.  
It demonstrates full-stack development with server-side rendering, database integration, and a responsive UI.

**Live Preview:** [wfd-blog.vercel.app](https://wfd-blog.vercel.app)

---

## Tools & Technologies

| Tool/Tech         | Purpose/Usage                          |
|-------------------|----------------------------------------|
| Next.js           | React framework for SSR & SSG          |
| Drizzle ORM       | Type-safe database ORM                 |
| Neon Database     | Serverless Postgres hosting            |
| TypeScript        | Static typing for JavaScript           |
| Notebook LLM      | AI-powered notebook integration        |
| Tailwind CSS      | Utility-first CSS framework            |

---

## ⚠️ Caution

The database is a cloud database, so you can view the project without much setup via the live link above.  
There is **no need to reseed the database**.  
If you want to use a local DB connection, update your environment variables accordingly.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Tochi-Nwachukwu/wfd_blog.git
cd wfd_blog
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## Features

- Responsive blog cards and article pages
- Newsletter signup with sticky positioning on desktop
- Social sharing (Facebook, X, LinkedIn, WhatsApp)
- Author attribution and publish date
- Markdown and HTML content rendering
- Optimized font loading with Google Fonts
- Type-safe database queries with Drizzle ORM

---

## Font

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Merriweather](https://fonts.google.com/specimen/Merriweather) for body text and [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) for headings.

---

## Learn More

To learn more about Next.js and related technologies:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs)
- [Neon Database](https://neon.tech/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
## SkillRise Full-Stack Course Platform

Tech stack: Next.js App Router, Prisma + MongoDB Atlas, NextAuth, Tailwind, shadcn/ui, React Hook Form + Zod, pnpm. Includes Playwright smoke tests.

### Getting Started

1. Copy `.env.example` to `.env` and fill values.

2. Install deps:

```bash
pnpm install
```

3. Push schema and seed data:

```bash
pnpm prisma:push
pnpm prisma:seed
```

4. Run dev server:

```bash
pnpm dev
```

### Environment Variables

- `DATABASE_URL` MongoDB Atlas connection string
- `NEXTAUTH_URL` e.g. http://localhost:3000
- `NEXTAUTH_SECRET` random string
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`

### Seed Accounts

- Admin: admin@skillrise.me / Admin123!
- Coach: izzet@skillrise.me / Password123!
- Learner: learner@skillrise.me / Password123!

### App Structure

- `/` Landing with CTA. If authed → Go to Courses
- `/auth/signin`, `/auth/signup` NextAuth credentials + Google
- `/courses` Published courses list with search/filter
- `/courses/[slug]` Course detail with Enroll
- `/dashboard` My Courses (enrollments)
- `/admin/courses` CRUD (ADMIN only)

### Scripts

```bash
pnpm prisma:push   # prisma db push
pnpm prisma:seed   # prisma db seed (tsx)
pnpm test:e2e      # Playwright tests
```

# <img src="public/images/logo2.png" alt="SkillRise.me Logo" width="64" height="64" style="vertical-align:middle; margin-right:8px;"/> SkillRise.me

SkillRise.me is a modern digital learning platform offering AI-powered courses, guides, and tools focused on health, productivity, and personal growth. All products are digital-only and delivered instantly online—no shipping required.

## Features

- Self-paced, actionable mini-courses and guides
- Productivity and personal growth tools
- Instant online access to all digital products
- Modern, responsive UI built with Next.js and Tailwind CSS
- Professional legal and policy pages (Terms, Privacy, Refund, Contact)
- Simple, secure contact form (powered by FormSubmit)
- Consistent brand design and user experience

## Getting Started

This is a [Next.js](https://nextjs.org/) project using the App Router and Tailwind CSS.

### Development

```bash
npm install
npm run dev
# or
yarn install && yarn dev
# or
pnpm install && pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Editing Content

- Main landing page: `app/(default)/page.tsx`
- Hero section: `components/hero-home.tsx`
- Footer: `components/ui/footer.tsx`
- Header: `components/ui/header.tsx`
- Policy pages: `app/resources/`
- Company pages: `app/company/`

### Contact & Support

For questions, support, or feedback, email: [support@skillrise.me](mailto:support@skillrise.me)

Contact form submissions are handled via [FormSubmit.co](https://formsubmit.co/).

## Deployment

Deploy easily to [Vercel](https://vercel.com/) or your preferred Next.js hosting provider.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/).

**Summary:**

- You may copy and redistribute this software for non-commercial purposes only.
- You must give appropriate credit and may not modify or create derivative works.
- Commercial use and modification are not permitted.
- The software is provided "as is" without warranty—use at your own risk.

## About

SkillRise.me is developed and operated by [New Chapter Technology LLC](https://newchapter.tech), a web and mobile development company based in Pinedale, Wyoming, USA.

---

**Rise with New Skills.**

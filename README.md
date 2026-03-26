# The Sovereignty Collective

> Psychological clarity. Emotional power. Spiritual sovereignty.

Platform website for **The Sovereignty Collective**, led by **Angie Martin — Sovereignty Architect**.

## Overview

A bilingual (EN/PT) identity recalibration platform offering:
- **Foundational Integration Track** — 6-week nervous system regulation program
- **Identity Recalibration Lab** — 8-week elite immersive container (application & invitation only)

## Project Structure

```
sovereignty-collective/
├── index.html                  # Landing page (bilingual EN/PT)
├── pages/
│   └── application.html        # Application form (connects to Supabase)
├── assets/
│   └── images/
│       ├── logo.png            # Horizontal logo (1800×900, 300dpi)
│       └── logo-square.png     # Square logo for social (1080×1080, 300dpi)
├── css/                        # Future shared stylesheets
├── js/
│   └── supabase.js             # Supabase client module
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Pages auto-deploy
```

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JS |
| Database | Supabase (PostgreSQL) |
| Hosting | GitHub Pages |
| Fonts | Google Fonts (Cormorant, Jost) |
| i18n | Custom bilingual EN/PT system |

## Database Schema (Supabase)

### `applications`
Stores all candidate applications with full form data and review workflow status.

| Column | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `tier` | TEXT | `foundational` or `lab` |
| `first_name`, `last_name`, `email` | TEXT | Contact info |
| `context` | TEXT | `personal`, `professional`, or `both` |
| `q1`–`q8` | TEXT | Assessment question answers |
| `status` | TEXT | `pending → reviewing → invited/declined/waitlisted/foundational_offered` |
| `reviewer_notes` | TEXT | Internal notes by Angie |
| `reviewed_at` | TIMESTAMPTZ | When reviewed |

### `waitlist`
Email capture from masterclass and landing page.

### `page_views`
Anonymous analytics — page, language, referrer.

## Security

- Row Level Security (RLS) enabled on all tables
- Public can **INSERT** only (form submissions)
- Only authenticated users can **READ/UPDATE** (admin dashboard)
- Anon key is publishable — safe for frontend use

## Local Development

Open `index.html` directly in a browser. No build step required.

```bash
# Or use a local server
npx serve .
# then visit http://localhost:3000
```

## Deployment

Automatically deployed to GitHub Pages on every push to `main` via GitHub Actions.

Live URL: `https://<your-username>.github.io/sovereignty-collective/`

## Environment

No `.env` file needed. The Supabase anon key is a publishable key, safe to commit.
For the service role key (admin operations), use GitHub Secrets → never commit.

---

*The Sovereignty Collective — Where identity is recalibrated, not just inspired.*

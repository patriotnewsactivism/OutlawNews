# Outlaw.News

Independent publication front end for **Outlaw.News**.

## Editorial model

The homepage is fed from `src/data/articles.ts` through the canonical `Article` model in `src/types/article.ts`. Homepage sections do not own their stories; they query the shared article feed by category, flags, and status.

Supported article types:

- report
- investigation
- analysis
- guide
- field-note
- document

Supported workflow statuses:

- draft
- demo
- fact-check
- legal-review
- scheduled
- published
- updated
- retracted

Seeded stories are deliberately marked `demo` and the UI labels them **Editorial demo** so concepts cannot be confused with reported or published journalism.

## Homepage desks

- Rights & Power
- Off Grid
- Self-Reliance
- Legal Exile
- Surveillance Watch
- The Docket
- Field Notes
- From the Records
- The Toolbox
- Under the Radar
- The Paper Trail
- Know Your Rights
- Outlaw Guides
- Most Read
- Latest Dispatches

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Deployment

The app is a Vite SPA. `vercel.json` includes rewrites for article paths such as `/article/public-records-are-public`.

## Publishing a real story

1. Add or replace an `Article` object in `src/data/articles.ts`.
2. Change `status` from `demo` to the correct editorial workflow state.
3. Add full `body`, `sources`, `keyPoints`, primary-document links, related stories, and corrections where applicable.
4. Only move to `published` after sourcing/fact-check/legal review appropriate to the story.

General-information rights explainers should distinguish legal information from legal advice and identify jurisdictional limits and primary authority.

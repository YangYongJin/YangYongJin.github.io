# Yongjin Yang — personal website

Yongjin Yang's academic website, built with Astro. The restrained visual
design includes a bouldering-route illustration connecting the research themes
of data, learning signals, memory, and exploration.

## Pages

- **Home** (`/`) — biography, research overview, news, selected publications,
  current interests, and forthcoming writing
- **Research** (`/research/`) — current research interests
- **Publications** (`/publications/`) — full publication list
- **Blog** (`/blog/`) — published and forthcoming writing
- **CV** (`/cv/`) — education, experience, awards, service, and teaching

## Run locally

```bash
cd astro-site
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Where to edit content

- `src/data/profile.js` — bio, news, interests, education, experience, and service
- `src/data/publications.js` — publication list (flags: `flash`, `selected`)
- `src/pages/blog/*.md` — blog posts. New post = new `.md` file with the same
  frontmatter shape (layout, title, date, description, tags)

## Deployment

The GitHub Actions workflow in `../.github/workflows/deploy.yml` builds this
directory and deploys it to GitHub Pages on pushes to `master`.

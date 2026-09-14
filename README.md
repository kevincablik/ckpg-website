# CK Property Group

Marketing site for [ckpgdevelopment.com](https://ckpgdevelopment.com) — a static four-page site for CK Property Group, LLC (CKPG).

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Hosted on **GitHub Pages** from this repository (`kevincablik/ckpg-website`). No Cloudflare account is required.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projects` | Projects |
| `/about` | About |
| `/contact` | Contact |

## Local development

Requires Node.js 20 or later (22 is used in CI).

```bash
npm install
npm run dev
```

The site runs at [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Static files are written to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Contact form and email

The public contact address on the site is a **placeholder**: `info@ckpgdevelopment.com`.

**Kevin must confirm the live inbox** before launch. Update:

- `src/data/site.ts` (`email`)
- `PUBLIC_CONTACT_EMAIL` in GitHub Actions / repository variables, if used
- Any DNS/mail records for the domain

The contact form currently opens a `mailto:` draft so the site works with no backend. To switch to Formspree:

1. Confirm the inbox.
2. Create a form at [formspree.io](https://formspree.io).
3. Set `PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx` in `.env` and as a GitHub Actions variable (see `.env.example`).

## Deploy (GitHub Pages)

The site is configured for the **custom domain as primary**:

- `site`: `https://ckpgdevelopment.com`
- `base`: `/`
- `public/CNAME`: `ckpgdevelopment.com`

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): Node 22 → `npm ci` → `npm run build` → upload `dist/` → GitHub Pages.

Until the custom domain is attached, GitHub’s default project URL is `https://kevincablik.github.io/ckpg-website/`. That path is **not** the public origin this build targets (`base` is `/` for the custom domain). After the custom domain is set, GitHub redirects the `github.io` URL to `ckpgdevelopment.com`.

### One-time: enable Pages (Kevin)

1. Open the repo **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions** (if it is not already selected). Save if GitHub asks.
3. Merge this change to `main` (or wait for the workflow on `main`). Open the **Actions** tab and confirm **Deploy GitHub Pages** is green.
4. If GitHub asks to approve the `github-pages` environment on the first run, approve it.

You can also run the workflow manually: **Actions → Deploy GitHub Pages → Run workflow**.

### One-time: custom domain `ckpgdevelopment.com`

Do this **in GitHub first**, then at the DNS host (GitHub’s order, to avoid someone else claiming the domain).

1. **Settings → Pages → Custom domain**: type `ckpgdevelopment.com` and click **Save**.
2. Check **Enforce HTTPS** once GitHub finishes issuing the certificate (it can take a while after DNS verifies).
3. At the registrar / DNS host, point the apex and `www` at GitHub Pages.

**Apex (`ckpgdevelopment.com`)** — `A` records to GitHub Pages:

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |

Optional IPv6 (`AAAA`): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

If the DNS host supports `ALIAS` / `ANAME` at the apex, you may use `kevincablik.github.io` instead of the A records.

**`www`** — `CNAME` to the user Pages host (no repo name in the target):

| Type | Name | Value |
| --- | --- | --- |
| `CNAME` | `www` | `kevincablik.github.io` |

GitHub will then redirect `www` ↔ apex so the canonical host stays `https://ckpgdevelopment.com`.

DNS can take up to 24 hours. Confirm with:

```bash
dig ckpgdevelopment.com +noall +answer -t A
dig www.ckpgdevelopment.com +nostats +nocomments +nocmd
```

After the live mailbox is confirmed, add MX (and SPF/DKIM) records for that inbox. Do not assume `info@ckpgdevelopment.com` is a working mailbox until Kevin confirms it.

## Brand assets

Official project imagery (not stock photography), also copied under `src/assets/images/` for Astro `<Image>`:

- `public/images/ckpg-logo.png` — CK Property Group wordmark (header/footer)
- `public/images/ckpg-mark.png` — CK slash mark used in the header lockup
- `public/images/seventh-franklin-*.jpg` — seventh&franklin exterior, interiors, roof deck, terrace
- `public/images/midrvr-*.jpg` — MID RVR exteriors, roof deck, interiors

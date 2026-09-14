# CK Property Group

Marketing site for [ckpgdevelopment.com](https://ckpgdevelopment.com) — a static four-page site for CK Property Group, LLC (CKPG).

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Output is fully static and ready for Cloudflare Pages or Netlify.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projects` | Projects |
| `/about` | About |
| `/contact` | Contact |

## Local development

Requires Node.js 20 or later.

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
- `PUBLIC_CONTACT_EMAIL` in the host environment, if used
- Any DNS/mail records for the domain

The contact form currently opens a `mailto:` draft so the site works with no backend. To switch to Formspree:

1. Confirm the inbox.
2. Create a form at [formspree.io](https://formspree.io).
3. Set `PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx` in `.env` and in the host’s environment variables.

See `.env.example`.

## Deploy

### Cloudflare Pages

1. Connect this GitHub repository in the Cloudflare dashboard → Workers & Pages.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22` (or `20`)
3. Add a custom domain: `ckpgdevelopment.com` and `www.ckpgdevelopment.com`.

### Netlify

`netlify.toml` is included.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `22`

Connect the repo in Netlify and add the custom domain.

## DNS for ckpgdevelopment.com

After the host issues domain instructions:

1. At the registrar (or DNS host), point the apex and `www` to Cloudflare Pages or Netlify using the records they provide.
   - Cloudflare Pages typically uses a CNAME for `www` and CNAME flattening / ALIAS for the apex.
   - Netlify typically uses a CNAME for `www` and ALIAS/ANAME or their load-balancer IPs for the apex.
2. Request HTTPS certificates in the host dashboard (usually automatic).
3. Optionally redirect `www` → apex (or the reverse) so there is a single canonical host. The site canonicals use `https://ckpgdevelopment.com`.
4. After the live mailbox is confirmed, add MX (and SPF/DKIM) records for that inbox. Do not assume `info@ckpgdevelopment.com` is a working mailbox until Kevin confirms it.

## Brand assets

Official project imagery (not stock photography), also copied under `src/assets/images/` for Astro `<Image>`:

- `public/images/ckpg-logo.png` — CK Property Group wordmark (header/footer)
- `public/images/ckpg-mark.png` — CK slash mark used in the header lockup
- `public/images/seventh-franklin-*.jpg` — seventh&franklin exterior, interiors, roof deck, terrace
- `public/images/midrvr-*.jpg` — MID RVR exteriors, roof deck, interiors

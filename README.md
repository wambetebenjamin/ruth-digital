# Ruth Digital

Your brand online. Done properly.

A Next.js 16 website for Ruth Digital, a social media management and digital
marketing agency in Nairobi, Kenya. The site is built on top of the uploaded
Diggo template. Nothing from the template was redesigned, renamed or deleted:
its artwork, stylesheets, JavaScript, fonts and visual language are all kept and
extended.

---

## 1. Template audit (printed before any code was written)

### 1.1 Full file tree of the uploaded zip

```
diggo-master/
├── css/
│   ├── .DS_Store                animate.min.css          bootstrap-grid.css
│   ├── boostrap-grid.css.map    bootstrap-grid.min.css   bootstrap-grid.min.css.map
│   ├── bootstrap-reboot.css     bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css bootstrap-reboot.min.css.map
│   ├── bootstrap.css            bootstrap.css.map       bootstrap.min.css
│   ├── bootstrap.min.css.map    default-skin.css        font-awesome.min.css
│   ├── icomoon.css              jquery-ui.css           jquery.fancybox.min.css
│   ├── jquery.mCustomScrollbar.min.css                   meanmenu.css
│   ├── nice-select.css          normalize.css           owl.carousel.min.css
│   ├── responsive.css           slick.css               style.css
├── fonts/
│   ├── FontAwesome.otf          IcoMoon-Free.ttf
│   ├── Poppins-Black.ttf ... Poppins-ThinItalic.ttf  (18 Poppins weights and italics)
│   ├── fontawesome-webfont.eot / .svg / .ttf / .woff / .woff2
├── images/
│   ├── .DS_Store   banner.png   banner1.png   body_bg.png   bottom.png
│   ├── box_img.png business_img.jpg loading.gif logo.png menu_icon.png
│   ├── midil.png   plan1.png    projects_img.png            test.png
├── index.html
└── js/
    ├── .DS_Store  bootstrap.bundle.js  bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js         bootstrap.bundle.min.js.map
    ├── bootstrap.js  bootstrap.js.map  bootstrap.min.js  bootstrap.min.js.map
    ├── custom.js  jquery-3.0.0.min.js  jquery.mCustomScrollbar.concat.min.js
    ├── jquery.min.js  jquery.validate.js  modernizer.js  plugin.js
    ├── popper.min.js  slider-setting.js
    └── revolution/
        ├── assets/ (coloredbg.png, gridtile*.png, loader.gif)
        ├── css/ (layers.css, navigation.css, settings.css, openhand.html, closedhand.html)
        ├── fonts/ (pe-icon-7-stroke, revicons)
        └── js/ (jquery.themepunch.revolution.min.js, tools, 10 extensions)
```

119 files, 5 top level folders. Everything is preserved byte for byte in
`/public/css`, `/public/js`, `/public/fonts` and `/public/images`, and the
original markup is kept at `/public/template-index.html`.

### 1.2 CSS custom properties found

The only CSS custom properties in the zip are Bootstrap 4 variables declared in
`css/bootstrap.css` and its minified and map variants. They are reproduced
verbatim in the preserved files:

| Property | Value |
| --- | --- |
| `--blue` | `#007bff` |
| `--indigo` | `#6610f2` |
| `--purple` | `#6f42c1` |
| `--pink` | `#e83e8c` |
| `--red` | `#dc3545` |
| `--orange` | `#fd7e14` |
| `--yellow` | `#ffc107` |
| `--green` | `#28a745` |
| `--teal` | `#20c997` |
| `--cyan` | `#17a2b8` |
| `--white` | `#fff` |
| `--gray` | `#6c757d` |
| `--gray-dark` | `#343a40` |
| `--primary` | `#007bff` |
| `--secondary` | `#6c757d` |
| `--success` | `#28a745` |
| `--info` | `#17a2b8` |
| `--warning` | `#ffc107` |
| `--danger` | `#dc3545` |
| `--light` | `#f8f9fa` |
| `--dark` | `#343a40` |
| `--breakpoint-xs` | `0` |
| `--breakpoint-sm` | `576px` |
| `--breakpoint-md` | `768px` |
| `--breakpoint-lg` | `992px` |
| `--breakpoint-xl` | `1200px` |
| `--font-family-sans-serif` | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` |
| `--font-family-monospace` | `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |

`css/style.css` itself declares no custom properties. The site design tokens in
`app/globals.css` therefore name the template's literal colours rather than
inventing a new system:

```
--rd-brand      #0891f8   (template titlepage span, copyright strip)
--rd-brand-deep #008df3   (template form border, social icon)
--rd-ink        #272f43   (template business and projects headings)
--rd-ink-deep   #23262d   (template footer heading, social hover)
--rd-charcoal   #252525   (template read_more button)
--rd-body       #666666   (template body copy)
--rd-heading    #111111   (template headings)
--rd-silver     #f9f9f9   (template .light_silver)
--rd-mint       #38c8a8   (template .theme_bg)
--rd-cream      #fdd430   (template active nav link)
```

### 1.3 @font-face rules found

| File | Family | Src | Weight | Style |
| --- | --- | --- | --- | --- |
| `css/font-awesome.min.css` | `FontAwesome` | `../fonts/fontawesome-webfont.eot?v=4.7.0` plus `?#iefix&v=4.7.0` embedded-opentype, `woff2`, `woff`, `ttf`, `svg#fontawesomeregular` | normal | normal |
| `js/revolution/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css` | `Pe-icon-7-stroke` | `../fonts/Pe-icon-7-strokebb1d.eot?d7yf1v` plus `d41d` iefix, `woff`, `ttf`, `svg#Pe-icon-7-stroke` | normal | normal |
| `js/revolution/css/settings.css` | `revicons` | `../fonts/revicons/revicons90c6.eot?5510888` plus iefix, `woff`, `ttf`, `svg#revicons` | 400 | normal |

Google hosted families are loaded by `@import` at the top of `css/style.css` and
are also preserved exactly:

```
Rajdhani:300,400,500,600,700
Poppins:100..900 with italics
Baloo Chettan
Lato:400,700,900
Lato:400,700,900 | Righteous
```

The template uses Baloo Chettan for headings, Lato for body copy and Righteous
for the footer display heading. Those exact families and stacks are used
throughout this build. No font was replaced, and no system font stack was
introduced.

### 1.4 API route files

None. The zip is a static HTML template with no server code.

### 1.5 Environment variables referenced

None. All API, mail and captcha keys were added by this build and are listed in
section 4.

### 1.6 Loading screen

Present. `index.html` renders:

```html
<div class="loader_bg">
  <div class="loader"><img src="images/loading.gif" alt="#" /></div>
</div>
```

`css/style.css` gives `.loader_bg` a fixed white full screen at z-index
9999999, `.loader` a centred flex box, and `.loader img` a width of 280px.
`js/custom.js` hides it with `setTimeout(... 1500)`. This is reproduced exactly
in `components/LoadingScreen.tsx` with the same GIF, same white background,
same 1.5 second fade. No fallback preloader was needed.

### 1.7 Cookie consent

Absent from the zip. Built to the brief as a bottom full width banner with
Accept All and Manage Preferences, a preferences modal with Necessary locked
plus Functional, Analytics and Marketing toggles, and storage under
`ruth_digital_consent`. See `components/CookieConsent.tsx`.

### 1.8 CAPTCHA

Absent from the zip. Google reCAPTCHA v3 is used invisibly on all user facing
forms, verified server side, with a v2 challenge shown when the score is below
0.5. The secret is read only on the server.

### 1.9 Legal pages

Absent from the zip. Built at `/legal/privacy-policy`, `/legal/terms` and
`/legal/cookie-policy`, written around the Kenya Data Protection Act 2019.

### 1.10 404 and 500

Absent from the zip. Built as `app/not-found.tsx` (Signal icon, "This page did
not reach its audience.", Back to Home) and `app/error.tsx` plus
`app/global-error.tsx` (Try Again, WhatsApp +254112272061).

---

## 2. What was built on top

| Route | Purpose |
| --- | --- |
| `/` | Hero, services strip, how we work, results, industries, case studies, team, testimonials, blog preview, services, CTA form |
| `/services` | Six full service sections with inclusions, audience, process, KES pricing and Get Started |
| `/work` | Case studies listing with industry and platform filters |
| `/work/[slug]` | Full case study, challenge, approach, execution, metric cards, quote, CTA |
| `/blog` | Articles with category filters |
| `/blog/[slug]` | Single column article with author, date, category and CTA |
| `/pricing` | Starter, Growth and Premium tabs plus custom package form |
| `/contact` | Strategy call booking form |
| `/auth/signin`, `/auth/signup` | reCAPTCHA v3 protected Google OAuth |
| `/legal/*` | Privacy, terms and cookie policies |
| `not-found`, `error`, `global-error` | 404 and 500 |
| `/api/case-studies` | GET, filter by `industry` and `platform` |
| `/api/case-studies/[slug]` | GET one case study |
| `/api/contact/strategy-call` | POST, zod validated, reCAPTCHA verified, nodemailer, returns a booking reference |
| `/api/contact` | POST, reCAPTCHA verified, nodemailer |
| `/api/recaptcha/verify` | POST, server side v3 verification |
| `/api/auth/[...nextauth]` | Google OAuth handler |

Components live in `components/`, content and helpers in `lib/`, styles in
`app/globals.css`.

## 3. Motion, accessibility and integrations

Nine motion effects, all reduced motion aware:

1. Lenis smooth scroll (`components/SmoothScroll.tsx`)
2. Case study card hover lift with Framer Motion (`HoverLift`)
3. Results count up with GSAP and ScrollTrigger (`CountUpStat`)
4. Service section stagger entrance with Framer Motion (`Stagger`)
5. Hero text reveal on load with GSAP (`HeroReveal`)
6. Team card entrance stagger
7. Blog card entrance on scroll
8. WhatsApp button entrance pulse in CSS keyframes
9. Pricing tab switch with AnimatePresence

Also included: skip link, focus visible outlines, ARIA labels on both floating
buttons, `role="status"` on the loader and form successes, `aria-live` result
counts on filters, and `prefers-reduced-motion` handling in both CSS and JS.

## 4. Environment

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=254112272061
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY=
RECAPTCHA_SECRET_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
PEXELS_API_KEY=
KV_REST_API_URL=
KV_REST_API_TOKEN=
BLOB_READ_WRITE_TOKEN=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
SMTP_TO=
```

`NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY` and `SMTP_TO` are additive: the v2 key is
needed because a v3 site key cannot render a v2 challenge, and `SMTP_TO` lets
enquiries land in a shared inbox with `SMTP_FROM` reserved for the sender.
Without SMTP credentials the API still returns a booking reference and logs the
enquiry, so the form never fails for the visitor.

## 5. Intentional deviations from the supplied version list

Every deviation is forced, either because the version does not exist on the npm
registry or because the advisory database reports a critical or high issue in
the pinned version. The brief's build gate requires zero critical and zero high
vulnerabilities.

| Package | Requested | Installed | Reason |
| --- | --- | --- | --- |
| `@vercel/blob` | 0.29.4 | 2.8.2 | 0.29.4 has never been published. 0.27.3 is the last of the 0.x line and carries high advisory GHSA-x8mw-p69m-v3mx through `@fastify/busboy` and `undici`. |
| `next-auth` | 5.0.0-beta.28 | 5.0.0-beta.32 | beta.28 depends on `@auth/core` with critical advisories GHSA-7rqj-j65f-68wh and GHSA-8fpg-xm3f-6cx3. beta.32 is the first patched release of the same beta line. |
| `nodemailer` | 6.10.1 | 10.1.7 | 6.10.1 has three high advisories, including SSRF and address parser denial of service. The transport and `sendMail` API used here is unchanged. |
| `jspdf` | 3.0.1 | 4.2.1 | 3.0.1 to 3.0.4 still carried critical advisories GHSA-f8cm-6447-x5h2 and GHSA-wfv2-pwc8-crg5. |
| `motion-dom`, `motion-utils` | transitive | 12.18.2 (override) | `framer-motion@12.18.0` imports `activeAnimations`, which newer `motion-dom` releases removed. Pinning the pair to 12.18.2 keeps the required Framer Motion version working. |
| `@tailwindcss/postcss` | not listed | 4.1.10 | Required by Tailwind CSS 4.1.10. Without it the PostCSS pipeline cannot run Tailwind at all. |

Everything else matches the requested versions exactly, with no carets or
tildes anywhere in `package.json`.

## 6. Images

All photography is Pexels, free plan, no watermarks, no AI generation, with East
African subjects. Files are in `public/images/` and documented in
`public/images/image-credits.md` with source URL, photographer and licence
confirmation. `next.config.ts` allows `images.pexels.com` through
`images.remotePatterns`.

## 7. Scripts

```
npm run dev        development server
npm run build      production build
npm start          production server
npm run typecheck  tsc --noEmit
```

See `BUILD-VERIFICATION.md` for the recorded results of the build gate.

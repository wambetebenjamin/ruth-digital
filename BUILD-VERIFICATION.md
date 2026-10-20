# Build verification

Recorded on 20 October 2026 in the project root.

```
$ node -v
v22.22.3        (sandbox toolchain; the project targets Node 24 via .nvmrc and engines)

$ npm ci
added 174 packages in 11s

$ npx tsc --noEmit
(no output, exit code 0)

$ npx next build
  Finished TypeScript in 6.5s
  Generating static pages using 1 worker (29/29)
  Route (app)
  ┌ ○ /
  ├ ○ /_not-found
  ├ ƒ /api/auth/[...nextauth]
  ├ ƒ /api/case-studies
  ├ ƒ /api/case-studies/[slug]
  ├ ƒ /api/contact
  ├ ƒ /api/contact/strategy-call
  ├ ƒ /api/recaptcha/verify
  ├ ○ /auth/signin
  ├ ○ /auth/signup
  ├ ○ /blog
  ├ ● /blog/[slug]             (6 prerendered)
  ├ ○ /contact
  ├ ○ /legal/cookie-policy
  ├ ○ /legal/privacy-policy
  ├ ○ /legal/terms
  ├ ○ /pricing
  ├ ○ /services
  ├ ○ /work
  └ ● /work/[slug]             (6 prerendered)
  exit code 0

$ npm audit --audit-level=high
found 0 vulnerabilities
```

Zero critical, zero high, zero moderate, zero low.

## Runtime checks

```
/                         200
/services                 200
/work                     200
/pricing                  200
/blog                     200
/contact                  200
/legal/privacy-policy     200
/legal/terms              200
/legal/cookie-policy      200
/auth/signin              200
/auth/signup              200
/work/restaurant-lunch-crowd   200
/blog/meta-ads-budget-kenya    200
/sitemap.xml              200
/robots.txt               200
/not-a-real-page          404
```

API:

```
GET  /api/case-studies?industry=Retail    200  {"ok":true,"count":1,...}
GET  /api/case-studies/restaurant-lunch-crowd  200  {"ok":true,"data":{...}}
GET  /api/case-studies/nope               404
POST /api/contact/strategy-call (invalid) 422  field level zod issues
POST /api/contact/strategy-call (valid)   201  {"ok":true,"reference":"RD-20261020-NVHY"}
POST /api/contact (valid)                 201  {"ok":true,"reference":"RDMSG-20261020-OA7R"}
POST /api/recaptcha/verify                200  {"ok":true,"score":null,"threshold":0.5,...}
```

Without `RECAPTCHA_SECRET_KEY` present, the recaptcha route reports
`skipped: true` rather than blocking, so local preview forms work. With the
secret set, a score under 0.5 returns `requiresChallenge: true` and the form
renders the v2 fallback.

## Content checks

* Rendered pages contain no em dash, no `NaN` and no unrendered template values.
* Every image has an `alt` attribute (13 of 13 on the home page).
* One `h1` per page.
* Six service sections on `/services`, six case study cards on `/work`, six
  article cards on `/blog`, three pricing tabs on `/pricing`.
* WhatsApp link renders exactly:
  `https://wa.me/254112272061?text=Hello%20Ruth%20Digital%2C%20I%20would%20like%20to%20grow%20my%20brand%20online%20and%20ask%20about%20your%20services.`

## Node version note

The sandbox provides Node 22, so `npm ci` prints an `EBADENGINE` warning for the
declared `>=24.0.0` engine. The warning does not affect the install, the type
check or the build. `.nvmrc` pins 24 and `engines` is set as required, so Vercel
builds on Node 24.

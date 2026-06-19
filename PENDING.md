# Aquleo Technologies — Website Pending Works

## Must-do before going live

- [x] **Deploy to Vercel** — done
- [ ] **Domain setup** — connect `aquleo.in` to Vercel (or buy the domain if not yet purchased)
- [x] **Contact form backend** — API route created (`app/api/contact/route.ts`) using Resend
- [ ] **Add RESEND_API_KEY to Vercel** — Settings → Environment Variables in your Vercel project dashboard
- [ ] **WhatsApp number** — replace `XXXXXXXXXX` in `components/ContactForm.tsx` and `wa.me` link with real number
- [ ] **Set up email addresses** — `hello@aquleo.in` and `business@aquleo.in` (Google Workspace, Zoho Mail, or Cloudflare Email Routing)

---

## Content to fill in

- [ ] **About page** — GST number and MSME certificate number (TODO comments already added in code)
- [x] **Lekka waitlist** — "Join waitlist" links to `/contact?subject=Lekka+Waitlist` and pre-fills form
- [x] **PaisaaLens early access** — "Get early access" links to `/contact?subject=PaisaaLens+Early+Access`

---

## Nice to have

- [x] **Favicon** — `public/favicon.svg` added (hex shield logo)
- [ ] **OG image** — open `public/og-image.html` in Chrome at 1200×630, screenshot, save as `public/og-image.png` and push
- [ ] **Revoke the GitHub PAT** shared in chat and generate a fresh one at github.com/settings/tokens

---

## Completed

- [x] All 5 pages built — Home, Products, Services, About, Contact
- [x] Privacy Policy page (`/privacy`)
- [x] Terms of Service page (`/terms`)
- [x] Contact form with loading / success / error states and client-side validation
- [x] Contact form API route via Resend (`app/api/contact/route.ts`)
- [x] Navbar with mobile hamburger menu
- [x] Footer with dynamic year
- [x] All page metadata titles and descriptions
- [x] OpenGraph + Twitter card metadata in `layout.tsx`
- [x] Montserrat font via `next/font/google`
- [x] Brand color system in `tailwind.config.ts`
- [x] Logo component — 4 sizes (sm / md / lg / xl), default and white variants
- [x] Phone mockups for Lekka and PaisaaLens
- [x] Stats bar (2, 48h, 2026, Global)
- [x] "Work with us" → `/services`, all nav links verified
- [x] Vercel Speed Insights added

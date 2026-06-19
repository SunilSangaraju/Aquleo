# Aquleo Technologies — Website Pending Works

## Must-do before going live

- [x] **Deploy to Vercel** — done
- [ ] **Domain setup** — connect `aquleo.in` to Vercel (or buy the domain if not yet purchased)
- [x] **Contact form backend** — API route created (`app/api/contact/route.ts`), add `RESEND_API_KEY` to Vercel environment variables
- [ ] **WhatsApp number** — replace `XXXXXXXXXX` in `app/contact/page.tsx` and `wa.me` link with real number
- [ ] **Set up email addresses** — `hello@aquleo.in` and `business@aquleo.in` need to be created (Google Workspace, Zoho Mail, or Cloudflare Email Routing)
- [ ] **Add RESEND_API_KEY to Vercel** — Settings → Environment Variables in your Vercel project dashboard

---

## Missing pages

- [x] **Privacy Policy page** (`/privacy`) — created
- [x] **Terms page** (`/terms`) — created

---

## Content to fill in

- [ ] **About page** — GST number and MSME certificate number (currently says "registered" but no details)
- [ ] **Lekka waitlist** — decide if "Join waitlist" should go to Contact form or a separate waitlist signup (e.g. Google Form or email capture)
- [ ] **PaisaaLens early access** — same decision needed

---

## Nice to have

- [ ] **Favicon** — currently using Next.js default favicon; replace with the Aquleo hex logo
- [ ] **OG image** — social preview image when the link is shared on WhatsApp / LinkedIn
- [ ] **Revoke the GitHub PAT** shared in chat and generate a fresh one at github.com/settings/tokens

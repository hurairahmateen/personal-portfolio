This is a Next.js portfolio site built with the App Router, TypeScript, and Tailwind CSS.

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Update the portfolio content in `src/constants/index.ts`.

## Contact form (Resend)

### 1) Create a Resend account + API key

1. Sign up at https://resend.com and create an API key.
2. (Optional but recommended) Verify your domain in Resend so you can send from a custom address.

### 2) Configure env vars locally

Create a `.env` file with:

```
RESEND_API_KEY=your_api_key_here
CONTACT_TO_EMAIL=your_email_here
```

For local development, copy it to `.env.local` (already created for you) and update values there.

### 3) Update the “from” address (optional)

In `src/app/api/contact/route.ts`, update the `from:` address once your domain is verified.

### 4) Test

Run the app and submit the contact form. You should receive an email at `CONTACT_TO_EMAIL`.

## Deployment (Vercel)

1. Go to https://vercel.com/new and import your GitHub repo.
2. Add environment variables `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Vercel → Project Settings → Environment Variables.
3. Deploy.
4. (Optional) Add a custom domain in Vercel → Domains and update DNS records at your registrar.

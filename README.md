# Next.js Client Template

Starter template for Matt2Build client projects. Next.js 14 + Tailwind + shadcn/ui base + Supabase client setup.

## Features

- Next.js 14 App Router
- TypeScript
- Tailwind CSS + shadcn/ui components
- Supabase client pre-configured
- Environment variable template
- API route structure
- Static + Server output modes

## Quick Start

```bash
# Create from template
gh repo create Matt2Build/<client-project> --template=Matt2Build/nextjs-client-template --private

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run dev server
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
RESEND_API_KEY=
```

## Project Structure

```
app/
├── api/              # API routes
├── layout.tsx        # Root layout
├── page.tsx          # Home page
globals.css           # Tailwind imports
components/ui/        # shadcn components
lib/
├── supabase.ts       # Supabase client
└── utils.ts          # Utilities
public/               # Static assets
```

## Deploy

```bash
# Link to Vercel
vercel --scope=<client-team>

# Or use Vercel CLI to deploy
vercel --prod
```

## License

Private — Matt2Build internal template

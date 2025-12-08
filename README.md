# GrowInfluencer

Landing page for GrowInfluencer platform.

**Production URL:** [https://growinfluencer.com](https://growinfluencer.com)

## Local Development

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Run production build locally
- `npm run lint` - Run ESLint

## Production Deployment

This project is deployed on Vercel with automatic deployments:

- **Main branch** → Automatically deploys to production at [https://growinfluencer.com](https://growinfluencer.com)
- Push to `main` branch triggers auto-deployment via Vercel

### Manual Deployment

If needed, you can deploy manually:

```bash
npm run build
```

Then push to the `main` branch or deploy via Vercel CLI.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- Vercel Analytics

## Project Structure

Created with v0 by Vercel and optimized for Vercel deployment.

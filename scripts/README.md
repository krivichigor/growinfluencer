# Build Scripts

This directory contains scripts that run during the build process.

## update-content-stats.ts

Automatically updates the homepage content stats by counting actual content from data files.

### What it does

- Counts influencer types, tools, guides, calculators, and news from `lib/data/*` files
- Updates `lib/homepage-content.json` with accurate counts
- Runs automatically before every build via the `prebuild` script

### Usage

The script runs automatically before builds, but you can also run it manually:

```bash
npm run update-stats
```

### How it works

1. Imports data from all content sources in `lib/data/`
2. Counts the number of items in each category
3. Updates the counts in `homepage-content.json`
4. Ensures stats displayed on the homepage are always accurate

### Adding new content

When you add new content to any data file:
- Influencer types: Edit `lib/data/influencer-types.ts`
- Tools: Edit `lib/data/tools.ts`
- Guides: Edit `lib/data/guides.ts`
- Calculators: Edit `lib/data/calculators.ts`
- News: Edit `lib/data/news.ts`

The stats will automatically update on the next build or when you run `npm run update-stats`.

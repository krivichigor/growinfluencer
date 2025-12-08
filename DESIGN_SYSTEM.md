# Design System - GrowInfluencer

## Overview
This document defines the front-end design logic and color schemes used throughout the GrowInfluencer platform. This design system should be applied consistently across all pages, components, and features.

---

## Color Scheme by Section

### 🎨 Core Color Palette

#### 1. **Influencer Types** - Rose/Pink Gradient
- **Primary Gradient**: `from-rose-500 to-pink-500`
- **Text Gradient**: `from-rose-600 to-pink-600` (light) / `from-rose-400 to-pink-400` (dark)
- **Background Gradient**: `from-rose-50/50 to-pink-50/50` (light) / `from-rose-950/10 to-pink-950/10` (dark)
- **Icon Background**: `from-rose-500 to-pink-500`
- **Hover Border**: `rose-200` (light) / `rose-800` (dark)

**Usage**: All influencer type pages, influencer cards, and related UI elements
**Note**: This unique rose/pink gradient distinguishes influencer content from other sections

#### 2. **Creator Tools** - Orange/Pink Gradient
- **Primary Gradient**: `from-orange-500 to-pink-500`
- **Text Gradient**: `from-orange-600 to-pink-600` (light) / `from-orange-400 to-pink-400` (dark)
- **Background Gradient**: `from-orange-50/50 to-pink-50/50` (light) / `from-orange-950/10 to-pink-950/10` (dark)
- **Icon Background**: `from-orange-100 to-pink-100` (light) / `from-orange-900/50 to-pink-900/50` (dark)
- **Hover Border**: `orange-200` (light) / `orange-800` (dark)

**Usage**: All creator tools, tool cards, tool sections, and tool-related UI elements

#### 3. **Calculators** - Blue Gradient
- **Primary Gradient**: `from-cyan-500 to-blue-500` (for buttons/CTAs)
- **Text Gradient**: `from-cyan-600 to-blue-600` (light) / `from-cyan-400 to-blue-400` (dark)
- **Background Gradient**: `from-cyan-50/50 to-blue-50/50` (light) / `from-cyan-950/10 to-blue-950/10` (dark)
- **Icon Background**: `from-cyan-400 to-blue-400` (softer blue for all calculator icons)
- **Hover Border**: `cyan-200` (light) / `cyan-800` (dark)

**Usage**: All calculators, calculator cards, calculator sections, and calculator-related UI elements
**Important**: ALL calculator icons should use the same softer blue gradient (`from-cyan-400 to-blue-400`) - no variations

#### 4. **In-Depth Guides** - Purple/Violet Gradient
- **Primary Gradient**: `from-purple-500 to-violet-500`
- **Text Gradient**: `from-purple-600 to-violet-600` (light) / `from-purple-400 to-violet-400` (dark)
- **Background Gradient**: `from-purple-50/50 to-violet-50/50` (light) / `from-purple-950/10 to-violet-950/10` (dark)
- **Icon Background**: `from-purple-100 to-violet-100` (light) / `from-purple-900/50 to-violet-900/50` (dark)
- **Hover Border**: `purple-200` (light) / `purple-800` (dark)

**Usage**: All guides, guide cards, guide sections, and guide-related UI elements

#### 5. **News** - Emerald/Teal Gradient (Almost Green)
- **Primary Gradient**: `from-emerald-500 to-teal-500`
- **Text Gradient**: `from-emerald-600 to-teal-600` (light) / `from-emerald-400 to-teal-400` (dark)
- **Background Gradient**: `from-emerald-50/50 to-teal-50/50` (light) / `from-emerald-950/10 to-teal-950/10` (dark)
- **Icon Background**: `from-emerald-500 to-teal-500`
- **Hover Border**: `emerald-200` (light) / `emerald-800` (dark)

**Usage**: All news articles, news cards, blog posts, and news-related UI elements
**Note**: The fresh green color scheme represents updates, growth, and new information

---

## Component Patterns

### Card Hover Effects
All interactive cards should follow this pattern:
```jsx
<Card className="transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-background to-[section-color]-50/30 dark:to-[section-color]-950/10 border-2 hover:border-[section-color]-200 dark:hover:border-[section-color]-800">
```

### Icon Containers
Icons should be wrapped in gradient containers:
```jsx
<div className="p-3 rounded-xl bg-gradient-to-br from-[section-color]-100 to-[section-color2]-100 dark:from-[section-color]-900/50 dark:to-[section-color2]-900/50">
  {/* Icon or emoji */}
</div>
```

### Call-to-Action Buttons
Section-specific CTA buttons:
```jsx
<Link href="..." className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[section-color]-500 to-[section-color2]-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all">
  {text}
  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
</Link>
```

### Section Headers
```jsx
<h2 className="text-3xl font-bold bg-gradient-to-r from-[section-color]-600 to-[section-color2]-600 dark:from-[section-color]-400 dark:to-[section-color2]-400 bg-clip-text text-transparent flex items-center gap-2">
  {emoji} {title}
</h2>
```

---

## Quick Navigation Cards

The quick navigation section uses content-type specific gradients matching the design system:
1. `from-rose-500 to-pink-500` - Influencer Types (unique rose/pink)
2. `from-orange-500 to-pink-500` - Creator Tools
3. `from-purple-500 to-violet-500` - In-Depth Guides
4. `from-cyan-400 to-blue-400` - Free Calculators
5. `from-emerald-500 to-teal-500` - News/Blog (almost green)

Each card's icon and hover state matches its respective section color scheme for consistency.

---

## Platform Badges

Platform-specific gradients for social media platforms:
1. `from-pink-500 to-rose-500` - Instagram/TikTok
2. `from-red-500 to-orange-500` - YouTube
3. `from-violet-500 to-purple-500` - Twitch
4. `from-cyan-500 to-blue-500` - Twitter/X
5. `from-emerald-500 to-teal-500` - LinkedIn/Others

---

## Stats Section

The stats section near the footer uses content-type specific gradients:
1. `from-rose-500 to-pink-500` - Creator Types (unique rose/pink)
2. `from-orange-500 to-pink-500` - Tools Reviewed
3. `from-purple-500 to-violet-500` - Guides
4. `from-cyan-400 to-blue-400` - Calculators

Each stat uses its corresponding section color to maintain visual consistency throughout the page.

---

## Background Layers

### Global Background
```jsx
<div className="fixed inset-0 -z-10 bg-gradient-to-br from-violet-50 via-background to-cyan-50 dark:from-violet-950/20 dark:via-background dark:to-cyan-950/20" />
<div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-200/30 via-transparent to-transparent dark:from-pink-900/20" />
<div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent dark:from-blue-900/20" />
```

### Section-Specific Backgrounds
Each section should have a subtle background overlay matching its color scheme:
```jsx
<div className="absolute inset-0 bg-gradient-to-br from-[section-color]-50/50 via-transparent to-[section-color2]-50/50 dark:from-[section-color]-950/10 dark:via-transparent dark:to-[section-color2]-950/10" />
```

---

## Animation & Transitions

### Standard Transitions
- **Duration**: `300ms` for most interactions
- **Hover Scale**: `scale-105` for cards, `scale-110` for stats
- **Shadow**: `shadow-lg` on hover for elevated elements, `shadow-2xl` for cards

### Micro-interactions
- Arrow icons: `group-hover:translate-x-1`
- Text gradients: Apply on hover with `group-hover:bg-gradient-to-r`
- Border transitions: `border-dashed` to `border-solid` on hover (for calculators)

---

## Typography

### Gradient Text
Use `bg-clip-text text-transparent` for gradient text effects:
```jsx
<h1 className="bg-gradient-to-r from-[color1] to-[color2] bg-clip-text text-transparent">
  {text}
</h1>
```

### Font Weights
- Headers: `font-bold` (700)
- Subheaders: `font-semibold` (600)
- Body: Default (400)
- Emphasis: `font-semibold` (600)

---

## Consistency Rules

1. **Always use the section-specific color scheme** - Don't mix colors between sections
2. **Maintain gradient direction** - Use `to-r` for horizontal, `to-br` for diagonal backgrounds
3. **Dark mode support** - Always provide dark mode variants with reduced opacity
4. **Icon consistency** - Calculator icons must ALL use the same blue gradient
5. **Hover states** - All interactive elements should have clear hover states
6. **Spacing** - Use consistent padding: `p-3` for small icons, `p-6` for cards
7. **Border radius** - Use `rounded-xl` for containers, `rounded-2xl` for icons, `rounded-full` for buttons

---

## File Structure

When implementing new features:
- Place reusable components in `/components`
- Use JSON content files in `/lib` for data
- Follow the existing pattern in `homepage-v1.tsx` as the reference implementation
- Maintain the same hover effects, transitions, and gradient patterns

---

## Implementation

### HeroSection Component
The `HeroSection` component (`/components/hero-section.tsx`) accepts a `section` prop that automatically applies the correct color scheme:

```tsx
<HeroSection
  section="tools" // Options: "influencers" | "tools" | "calculators" | "guides" | "news"
  breadcrumbItems={[{ label: "Creator Tools", href: "/tools" }]}
  title="Page Title"
  description="Page description"
/>
```

This will:
- Apply section-specific gradient background
- Add gradient text effect to the title
- Maintain consistency across all pages

### Navigation Colors
The header navigation (`/components/header.tsx`) uses section-specific colors for active states:
- **Home**: Primary color
- **Influencers**: Rose (`text-rose-500`)
- **Tools**: Orange (`text-orange-500`)
- **Guides**: Purple (`text-purple-500`)
- **News**: Emerald (`text-emerald-500`)
- **Calculators**: Cyan (`text-cyan-500`)

### Card Hover States
All listing pages use section-specific hover colors:

**Tools Page** (`/app/tools/page.tsx`):
- Border: `hover:border-orange-200 dark:hover:border-orange-800/50`
- Text: `group-hover:text-orange-600 dark:group-hover:text-orange-400`

**Calculators Page** (`/app/calculators/page.tsx`):
- Border: `hover:border-cyan-200 dark:hover:border-cyan-800/50`
- Icon: `bg-gradient-to-br from-cyan-400 to-blue-400`
- Text: `group-hover:text-cyan-600 dark:group-hover:text-cyan-400`

**Guides Page** (`/app/guides/page.tsx`):
- Border: `hover:border-purple-200 dark:hover:border-purple-800/50`
- Text: `group-hover:text-purple-600 dark:group-hover:text-purple-400`

**Influencers Page** (`/app/influencers/page.tsx`):
- Border: `hover:border-rose-200 dark:hover:border-rose-800/50`
- Text: `group-hover:text-rose-600 dark:group-hover:text-rose-400`
- CTA: `bg-gradient-to-r from-rose-500 to-pink-500`

**News Page** (`/app/news/page.tsx`):
- Border: `hover:border-emerald-200 dark:hover:border-emerald-800/50`
- Text: `group-hover:text-emerald-600 dark:group-hover:text-emerald-400`

---

## References

- Main implementation: `/components/homepage-v2.tsx`
- Hero component: `/components/hero-section.tsx`
- Header/Navigation: `/components/header.tsx`
- Content data: `/lib/homepage-content.json`
- Color tokens: Tailwind CSS configuration

---

**Last Updated**: 2025-12-08
**Version**: 2.0

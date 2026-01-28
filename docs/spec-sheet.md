# Fireweed Writing School Landing Page Specification

**Project:** Fireweed Writing School Landing Page  
**URL:** https://fireweed.school  
**Framework:** Hugo Static Site Generator  
**Purpose:** Pre-launch landing page to collect interested students' emails

## Tech Stack

- **Static Site Generator:** Hugo (Extended)
- **CSS Framework:** Tailwind CSS 3.x
- **Icons:** FontAwesome 6.x (Free)
- **Typography:** EB Garamond (Google Fonts)
- **Email Collection:** Buttondown (or ConvertKit/Mailchimp)
- **Hosting:** Netlify/Vercel/Cloudflare Pages

**Why This Stack:**
- **Hugo:** Fast, simple, great for single-page sites
- **Tailwind:** Rapid development, consistent design, no custom CSS needed
- **FontAwesome:** 6000+ icons, no need for custom SVGs
- **Google Fonts:** Free, optimized, easy to implement
- **Third-party Email:** No backend needed, GDPR-compliant, reliable

---

## Table of Contents
1. [Quick Start Guide](#quick-start-guide)
2. [Design Philosophy](#design-philosophy)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Page Structure & Sections](#page-structure--sections)
6. [Technical Implementation](#technical-implementation)
7. [Performance & Accessibility](#performance--accessibility)
8. [Forms & Email Collection](#forms--email-collection)
9. [Assets & Graphics](#assets--graphics)

---

## Quick Start Guide

### Getting Started with Hugo + Tailwind + FontAwesome

**Prerequisites:**
- Node.js (v16+)
- Hugo Extended (v0.112+)
- Git

**Step 1: Initialize Project**
```bash
# Create new Hugo site
hugo new site fireweed-school
cd fireweed-school

# Initialize git
git init

# Initialize npm
npm init -y

# Install dependencies
npm install -D tailwindcss @tailwindcss/typography postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p
```

**Step 2: Configure Tailwind**

Create `tailwind.config.js` (see Technical Implementation section for full config)

**Step 3: Create CSS File**

Create `assets/css/main.css`:
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,500;1,600&display=swap');
```

**Step 4: Add FontAwesome**

In `layouts/partials/head.html`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

**Step 5: Setup Email Service**

1. Sign up for Buttondown at https://buttondown.email
2. Get your embed code from Settings → Embedding
3. Add to `layouts/partials/signup.html`

**Step 6: Development Workflow**

Option A (Hugo Pipes - Recommended):
```bash
hugo server -D
```

Option B (Separate Tailwind build):
```bash
# Terminal 1: Tailwind watch
npm run tailwind:watch

# Terminal 2: Hugo server
hugo server -D
```

**Step 7: Production Build**
```bash
npm run build
```

**Key Files to Create:**
- `config.toml` - Hugo configuration
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `assets/css/main.css` - Tailwind imports
- `layouts/_default/baseof.html` - Base template
- `layouts/index.html` - Landing page template
- `content/_index.md` - Landing page content

---

## Design Philosophy

The Fireweed Writing School landing page embodies the symbolism of the fireweed flower: **renewal, persistence, and growth from devastation**. The design should feel:

- **Literary and cozy** - Like a well-loved library or favorite writing space
- **Warm and inviting** - Not corporate or sterile
- **Rooted in nature** - Organic shapes, natural imagery
- **Professional yet accessible** - Serious about craft without gatekeeping
- **Typography-first** - Words are the star; design supports them
- **Visually striking** - Memorable, distinctive, not generic

---

## Color Palette

Inspired by the fireweed flower (Chamerion angustifolium) which features magenta-purple blooms, reddish stems, and grows from ash-covered earth after forest fires.

### Primary Colors

**Fireweed Magenta** - `#C13584`  
- Use: Primary accent, CTAs, headings highlights, links
- Represents: The vibrant blooms, passion, creativity

**Rose Purple** - `#B8336A`  
- Use: Secondary accent, hover states, borders
- Represents: The purple-pink petals

**Deep Pink** - `#E75480`  
- Use: Tertiary accent, subtle highlights
- Represents: The lighter pink tones in the flower

### Neutral Colors

**Ash Gray** - `#2D2D2D`  
- Use: Primary text, dark backgrounds
- Represents: The burned earth from which fireweed grows

**Charcoal** - `#3A3A3A`  
- Use: Secondary text, card backgrounds

**Warm Cream** - `#F5F1E8`  
- Use: Primary background, light sections
- Represents: Paper, journals, the blank page

**Soft Ivory** - `#FFFDF7`  
- Use: Alternate background sections

### Supporting Colors

**Reddish Stem** - `#8B4049`  
- Use: Dividers, subtle accents
- Represents: The reddish stems of fireweed

**Forest Green** - `#4A7C59`  
- Use: Success states, growth metaphors
- Represents: The leaves, new growth

---

## Typography

### Primary Typeface: EB Garamond (Google Fonts)

**Why EB Garamond:**
- Classic literary typeface
- Beautiful italics (perfect for emphasis)
- Open source and web-optimized
- Professional yet warm
- Excellent readability

### Type Scale & Usage

**Display Headers (H1)**
- Font: EB Garamond
- Style: Italic
- Size: 72px (desktop) / 48px (mobile)
- Weight: 600
- Line Height: 1.1
- Color: Fireweed Magenta or Ash Gray
- Usage: Hero title, main headline

**Section Headers (H2)**
- Font: EB Garamond
- Style: Italic
- Size: 48px (desktop) / 36px (mobile)
- Weight: 600
- Line Height: 1.2
- Color: Rose Purple or Ash Gray
- Usage: Section titles

**Subheaders (H3)**
- Font: EB Garamond
- Style: Regular or Italic
- Size: 32px (desktop) / 28px (mobile)
- Weight: 600
- Line Height: 1.3
- Color: Ash Gray

**Body Text**
- Font: EB Garamond
- Style: Regular
- Size: 20px (desktop) / 18px (mobile)
- Weight: 400
- Line Height: 1.6
- Color: Ash Gray
- Max Width: 65-70 characters for readability

**Emphasis Text**
- Font: EB Garamond
- Style: Italic
- Weight: 500
- Usage: Pull quotes, key phrases

**Button/CTA Text**
- Font: EB Garamond
- Style: Regular
- Size: 20px
- Weight: 700
- Letter Spacing: 0.5px
- Text Transform: None (preserve sentence case)

### Decorative Elements

**Fleurons** (❦, ✿, ❧)
- Use sparingly as section dividers
- Color: Rose Purple with 40% opacity
- Size: 24px

**Drop Caps**
- First letter of key sections
- Font: EB Garamond
- Size: 3x body text
- Float left with margin
- Color: Fireweed Magenta

---

## Page Structure & Sections

### Layout Overview

Single-page scrolling design with the following sections:
1. Hero Section
2. The Symbol Section
3. What You'll Learn
4. Why Mr. Brown
5. What Makes This Different
6. The Promise
7. Email Signup CTA
8. Footer

**Navigation:** None (eliminates distraction)  
**Fixed Elements:** Sticky email CTA button (appears after scroll)

---

### Section 1: Hero Section

**Layout:** Full viewport height, centered content

**Visual Elements:**
- Large stylized fireweed illustration (abstract/artistic, not photorealistic)
- Gradient background: Warm Cream fading to Soft Ivory
- Subtle texture overlay (paper texture, 5% opacity)

**Content:**

**Main Headline:**
```
The Fireweed Writing Club
```
*(H1, Italic, Fireweed Magenta, centered)*

**Subheadline:**
```
Write from ash. Bloom in devastation.
An online writing class for those ready to persist.
```
*(H3, Regular, Ash Gray, centered, max-width: 800px)*

**CTA Button:**
```
[Join the Waitlist]
```
*(Large button, Rose Purple background, Warm Cream text, smooth scroll to email form)*

**Supporting Text:**
```
Classes begin Summer 2026
```
*(Small text, Charcoal, centered)*

**Example HTML with Tailwind:**
```html
<section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-cream to-soft-ivory relative overflow-hidden">
  
  <!-- Optional: Paper texture overlay -->
  <div class="absolute inset-0 bg-paper-texture opacity-5 pointer-events-none"></div>
  
  <div class="container mx-auto px-4 text-center relative z-10">
    
    <!-- Fireweed Illustration -->
    <div class="mb-8 flex justify-center animate-fade-in">
      <img src="/images/fireweed-hero.svg" 
           alt="Fireweed flower illustration" 
           class="w-64 h-80 md:w-80 md:h-96 object-contain"
           loading="eager">
    </div>
    
    <!-- Main Headline -->
    <h1 class="text-display-mobile md:text-display font-garamond italic font-semibold text-fireweed-magenta mb-6 animate-fade-in">
      The Fireweed Writing Club
    </h1>
    
    <!-- Subheadline -->
    <p class="text-2xl md:text-3xl font-garamond text-ash-gray max-w-3xl mx-auto mb-8 animate-fade-in">
      Write from ash. Bloom in devastation.<br class="hidden md:block">
      An online writing class for those ready to persist.
    </p>
    
    <!-- CTA Button -->
    <a href="#signup" class="btn-primary inline-flex items-center gap-2 animate-fade-in">
      Join the Waitlist
      <i class="fas fa-arrow-down"></i>
    </a>
    
    <!-- Supporting Text -->
    <p class="mt-6 text-lg text-charcoal font-garamond animate-fade-in">
      Classes begin Summer 2026
    </p>
    
  </div>
</section>
```

**Design Notes:**
- Fireweed illustration should be elegant, stylized line art
- Consider animated SVG: flower slowly blooming on page load
- Generous whitespace around all elements
- Add `animate-fade-in` class to elements for scroll animations
- Mobile: Stack vertically, reduce illustration size

---

### Section 2: The Symbol

**Layout:** Two-column (desktop) / Single column (mobile)

**Visual Elements:**
- Left column: Large photo of fireweed in nature (or artistic rendering)
- Right column: Text content
- Background: Soft Ivory
- Ornamental fleuron divider at top

**Content:**

**Headline:**
```
Renewal from devastation
```
*(H2, Italic, Rose Purple)*

**Body:**
```
The fireweed is one of the first flowers to grow after a forest fire. Before anything else dares to push through the scorched earth, before the soil has cooled, the fireweed arrives—brilliant purple-pink stalks rising from nothing but ash.

This is the spirit we're building: the ability to create when everything feels burned down. To write when you don't feel like it. To bloom from your own devastation.

Every aspiring writer carries wounds—imposter syndrome, perfectionism, fear of judgment. The Fireweed Writing Club offers radical liberation: permission to write badly, to write every day, to stop pressing backspace.
```
*(Body text with key phrases italicized)*

**Design Notes:**
- Photo should be high-quality, evocative
- Consider subtle parallax effect on scroll
- Pull quote treatment for "permission to write badly"

---

### Section 3: What You'll Learn

**Layout:** Three-column grid (desktop) / Single column (mobile)

**Visual Elements:**
- Background: Warm Cream
- Each column has FontAwesome icon
- Ornamental fleuron divider at top

**Content:**

**Headline:**
```
What you'll learn
```
*(H2, Italic, centered, Ash Gray)*

**Subheadline:**
```
No shortcuts. Just craft.
```
*(H3, centered, Rose Purple)*

**Three Columns:**

**Column 1: The Craft**
- Icon: `<i class="fas fa-feather-alt"></i>` (feather pen)
- **Heading:** Imagist-first writing
- **Body:** Learn to avoid abstraction, kill clichés, and create something genuinely your own. No idea but in things. Focus on concrete images, specific nouns, particular verbs that create real connection.

**Column 2: The Practice**
- Icon: `<i class="fas fa-book"></i>` (journal/book)
- **Heading:** Daily discipline
- **Body:** Write without editing. Write without stopping. There is no writer's block—just dogshit drafts that compost into something rich. Build the habit that survives inspiration.

**Column 3: The Publication**
- Icon: `<i class="fas fa-paper-plane"></i>` (sending work out)
- **Heading:** From draft to world
- **Body:** From idea to first draft to revision to query to submission to publication. We'll take you through the entire process. Finish work. Send it into the world. Claim your territory as a writer.

**Example HTML with Tailwind:**
```html
<section class="section-container bg-warm-cream">
  
  <!-- Ornamental Divider -->
  <div class="text-center mb-12">
    <i class="fas fa-leaf text-2xl text-rose-purple opacity-40"></i>
  </div>
  
  <!-- Headline -->
  <h2 class="text-section-mobile md:text-section font-garamond italic font-semibold text-ash-gray text-center mb-4 animate-fade-in">
    What you'll learn
  </h2>
  
  <!-- Subheadline -->
  <p class="text-subheader font-garamond text-rose-purple text-center mb-16 animate-fade-in">
    No shortcuts. Just craft.
  </p>
  
  <!-- Three Column Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
    
    <!-- Column 1: The Craft -->
    <div class="bg-soft-ivory p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <!-- Icon -->
      <div class="text-center mb-6">
        <i class="fas fa-feather-alt text-6xl text-forest-green"></i>
      </div>
      <!-- Heading -->
      <h3 class="text-2xl font-garamond font-semibold text-ash-gray text-center mb-4">
        Imagist-first writing
      </h3>
      <!-- Body -->
      <p class="text-body font-garamond text-ash-gray leading-relaxed">
        Learn to avoid abstraction, kill clichés, and create something genuinely your own. 
        <em class="italic">No idea but in things.</em> Focus on concrete images, specific nouns, 
        particular verbs that create real connection.
      </p>
    </div>
    
    <!-- Column 2: The Practice -->
    <div class="bg-soft-ivory p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div class="text-center mb-6">
        <i class="fas fa-book text-6xl text-forest-green"></i>
      </div>
      <h3 class="text-2xl font-garamond font-semibold text-ash-gray text-center mb-4">
        Daily discipline
      </h3>
      <p class="text-body font-garamond text-ash-gray leading-relaxed">
        Write without editing. Write without stopping. There is no writer's block—just 
        dogshit drafts that compost into something rich. Build the habit that survives inspiration.
      </p>
    </div>
    
    <!-- Column 3: The Publication -->
    <div class="bg-soft-ivory p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div class="text-center mb-6">
        <i class="fas fa-paper-plane text-6xl text-forest-green"></i>
      </div>
      <h3 class="text-2xl font-garamond font-semibold text-ash-gray text-center mb-4">
        From draft to world
      </h3>
      <p class="text-body font-garamond text-ash-gray leading-relaxed">
        From idea to first draft to revision to query to submission to publication. 
        We'll take you through the entire process. Finish work. Send it into the world. 
        Claim your territory as a writer.
      </p>
    </div>
    
  </div>
</section>
```

**Design Notes:**
- FontAwesome icons are simple and clean
- Cards with subtle shadow on hover
- Equal height columns on desktop with `md:grid-cols-3`
- Generous padding within cards
- All cards use `animate-fade-in` for scroll animations

---

### Section 4: Why Mr. Brown

**Layout:** Centered content column with visual elements

**Visual Elements:**
- Background: Ash Gray (dark section for contrast)
- Text: Warm Cream
- Subtle geometric patterns in background (very low opacity)
- Professional photo of Brennan (circular crop, Rose Purple border)

**Content:**

**Headline:**
```
Call me Mr. Brown
```
*(H2, Italic, Fireweed Magenta, centered)*

**Subheadline:**
```
Three years running Write Club. Eight creative writing classes. 
Over 1,000,000 words journaled. Nine books published. 
Hundreds of poems. Hundreds of stories.
```
*(H3, Warm Cream with 80% opacity, centered, italicized)*

**Body:**
```
I've been teaching writing longer than I realized. Three years running Write Club at Mount Royal University, facilitating workshops for over a hundred members. English Honours degree (3.8 GPA). Every morning for over a decade, I've written 750 words in my private journal—no editing, no planning, just whatever moves through my mind.

I didn't plan to become a teacher. But here I am, with something I desperately want to share.

When I teach, I want to be addressed as Mr. Brown. Not because I need formality, but because I'm taking this seriously. The teacher-student relationship means something. It carries responsibility. It demands that I show up prepared, that I honor the time you're giving me, that I treat your work with the attention it deserves.

I'm not your peer in this context. I'm your guide. I have walked certain paths before you, and I can point out the pitfalls, the shortcuts that aren't shortcuts, the places where the ground looks solid but isn't.
```
*(Body text, Warm Cream)*

**Credentials Box:**
- English Honours Degree (3.8 GPA), Mount Royal University
- Founder, Write Club (3+ years)
- 9 published books
- 200+ Medium articles
- 1M+ words journaled
- 100+ workshop participants

**Design Notes:**
- Photo should be professional but approachable
- Credentials presented as elegant list with check marks or fleurons
- This section establishes authority while maintaining warmth
- Pull quote treatment for "I'm your guide" section

---

### Section 5: What Makes This Different

**Layout:** Alternating content blocks (zigzag pattern)

**Visual Elements:**
- Background: Alternating Soft Ivory and Warm Cream
- Each block has icon + text
- Generous whitespace between blocks

**Content:**

**Headline:**
```
This is not your typical writing class
```
*(H2, Italic, centered, Rose Purple)*

**Blocks (5 total):**

**Block 1: Community Over Competition**
- Icon: Connected circles/network
- **Body:** Monthly or weekly workshops where you bring whatever you're working on to an engaged audience. The purpose is simple: to be witnessed. To have readers who actually pay attention. We build together.

**Block 2: Real World Practice**
- Icon: Compass or map
- **Body:** Assignments make you go out, interact with the world, find things, be curious and observe. Prioritize analog writing. Keep a commonplace book—a physical notebook where you collect quotes, observations, fragments. This practice is centuries old. It works.

**Block 3: Genre Flexibility**
- Icon: Branching tree
- **Body:** Poetry if you write prose. Flash fiction if you write poetry. Creative nonfiction if you've never tried it. Experiment and branch out into different mediums and formats. Growth happens at the edges of comfort.

**Block 4: Digital Sovereignty**
- Icon: Flag or castle
- **Body:** Learn enough tech to get your own website and own your digital land. The platforms will fail you. The only thing you truly own is your domain, your site, your email list. Claim that territory.

**Block 5: Dogfooding**
- Icon: Chef's hat or rolling pin
- **Body:** I will do every assignment I ask you to do. If I'm not willing to do the work myself, I have no business asking you to do it. We're in this together.

**Design Notes:**
- Zigzag: Image left/text right, then image right/text left, alternating
- Use photos, illustrations, or abstract graphics for each block
- Smooth scroll animations (elements fade in as they enter viewport)
- Icons should be larger (48-64px)

---

### Section 6: The Promise

**Layout:** Centered content with bordered callout box

**Visual Elements:**
- Background: Deep Pink gradient fading to Rose Purple
- Text: Warm Cream
- Ornamental border around central content box
- Subtle texture overlay

**Content:**

**Headline:**
```
What I can promise
```
*(H2, Italic, Warm Cream, centered)*

**Body:**
```
Do not come to my class expecting to make it big or make a lot of money.

You must want to elevate the craft of your writing. You must want to learn how to write every day even when you don't feel like it.

I will not teach you to be a famous, wealthy author—I can't promise that, and anyone who does is lying.

But I will teach you how to be a writer.

By the end of your experience with me and this project, you will have a body of work. Actual pages. Actual publications. Actual evidence that you showed up and did the thing.

The fireweed doesn't wait for perfect conditions. It grows from ash. It blooms in devastation. It insists on life even when everything around it has burned.

That's what I want for you.
```
*(Body text, Warm Cream, centered, max-width: 900px)*

**Design Notes:**
- Central content in elegant bordered box
- Box has subtle drop shadow
- Consider animated gradient background (very subtle movement)
- Pull quotes for "I will teach you how to be a writer" and "That's what I want for you"
- Strong typographic hierarchy

---

### Section 7: Email Signup CTA

**Layout:** Full-width section, centered form

**Visual Elements:**
- Background: Warm Cream
- Fireweed illustration element (smaller, decorative)
- Form in elegant card with shadow

**Content:**

**Headline:**
```
Write from ash. Bloom in devastation.
```
*(H2, Italic, centered, Rose Purple)*

**Subheadline:**
```
Join the waitlist to be notified when enrollment opens
```
*(H3, centered, Ash Gray)*

**Form Fields:**
- Name (First & Last)
- Email Address
- Optional: What are you currently working on? (textarea)

**Button:**
```
[Join the Fireweed Writing Club]
```
*(Rose Purple background, Warm Cream text, full width)*

**Supporting Text:**
```
I won't send you promotional emails or marketing. 
Just one message when we're ready to begin.
```
*(Small text, Charcoal, centered, italic)*

**Success Message:**
```
Welcome to the club. You'll hear from me soon.
Keep writing.
```
*(Displayed after form submission, Fireweed Magenta)*

**Design Notes:**
- Form should feel elegant, not "tech-y"
- Input fields with soft borders (Rose Purple on focus)
- Smooth animations on submit
- Clear error states (Deep Pink)
- Consider honeypot field for spam prevention

---

### Section 8: Footer

**Layout:** Simple, minimal

**Visual Elements:**
- Background: Ash Gray
- Text: Warm Cream
- Fleuron divider at top

**Content:**

**Main Text:**
```
The Fireweed Writing Club
Classes begin Summer 2026
```
*(Centered, EB Garamond)*

**Links:**
- Email: mail@brennanbrown.ca
- Patreon: patreon.com/brennankbrown
- Website: brennan.day

**Legal:**
```
© 2026 Brennan Kenneth Brown
Treaty 7 Territory, Mohkínstsis (Calgary, Alberta)
```

**Design Notes:**
- Minimal and tasteful
- Links underlined on hover (Fireweed Magenta)
- Small social icons optional
- No cluttered footer widgets

---

## Technical Implementation

### Hugo Structure

```
fireweed-school/
├── archetypes/
├── assets/
│   ├── css/
│   │   └── main.css (Tailwind imports)
│   └── js/
│       └── main.js (minimal JavaScript)
├── content/
│   └── _index.md
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   └── single.html
│   ├── index.html
│   └── partials/
│       ├── head.html
│       ├── hero.html
│       ├── symbol.html
│       ├── learn.html
│       ├── instructor.html
│       ├── different.html
│       ├── promise.html
│       ├── signup.html
│       └── footer.html
├── static/
│   ├── images/
│   │   ├── fireweed-hero.svg
│   │   ├── fireweed-nature.jpg
│   │   └── brennan.jpg
│   └── favicon.ico
├── config.toml
├── tailwind.config.js
└── package.json
```

### package.json

```json
{
  "name": "fireweed-school",
  "version": "1.0.0",
  "scripts": {
    "dev": "hugo server -D",
    "build": "NODE_ENV=production hugo --gc --minify",
    "tailwind:watch": "npx tailwindcss -i ./assets/css/main.css -o ./static/css/styles.css --watch",
    "tailwind:build": "NODE_ENV=production npx tailwindcss -i ./assets/css/main.css -o ./static/css/styles.css --minify"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "@tailwindcss/typography": "^0.5.10"
  }
}
```

### Hugo + Tailwind Integration

**Option 1: Hugo Pipes (Recommended)**

In `layouts/partials/head.html`:
```html
{{ $css := resources.Get "css/main.css" }}
{{ $css = $css | resources.PostCSS }}
{{ if hugo.IsProduction }}
  {{ $css = $css | minify | fingerprint }}
{{ end }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
```

Create `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? { cssnano: {} } : {})
  }
}
```

**Option 2: Separate Build Process (Simpler)**

Run Tailwind separately:
```bash
npm run tailwind:build
hugo
```

In `layouts/partials/head.html`:
```html
<link rel="stylesheet" href="/css/styles.css">
```

### config.toml

```toml
baseURL = 'https://fireweed.school'
languageCode = 'en-us'
title = 'Fireweed Writing Club'
description = 'An online writing class built on renewal, persistence, and the radical liberation of putting words on paper.'

[params]
  author = 'Brennan Kenneth Brown'
  email = 'mail@brennanbrown.ca'
  patreon = 'patreon.com/brennankbrown'
  website = 'brennan.day'
  launchDate = 'Summer 2026'

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true

[outputFormats]
  [outputFormats.CSS]
    mediaType = "text/css"
    baseName = "styles"
```

### CSS Architecture with Tailwind

**Tailwind CSS Setup:**

Install Tailwind via Hugo Pipes or npm:

```bash
npm install -D tailwindcss @tailwindcss/typography
npx tailwindcss init
```

**tailwind.config.js:**
```javascript
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'fireweed-magenta': '#C13584',
        'rose-purple': '#B8336A',
        'deep-pink': '#E75480',
        'ash-gray': '#2D2D2D',
        'charcoal': '#3A3A3A',
        'warm-cream': '#F5F1E8',
        'soft-ivory': '#FFFDF7',
        'reddish-stem': '#8B4049',
        'forest-green': '#4A7C59',
      },
      fontFamily: {
        'garamond': ['"EB Garamond"', 'serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1' }],
        'display-mobile': ['48px', { lineHeight: '1.1' }],
        'section': ['48px', { lineHeight: '1.2' }],
        'section-mobile': ['36px', { lineHeight: '1.2' }],
        'subheader': ['32px', { lineHeight: '1.3' }],
        'body': ['20px', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'readable': '70ch',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

**assets/css/main.css:**
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Custom font import */
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,500;1,600&display=swap');

@layer base {
  body {
    @apply font-garamond text-ash-gray bg-warm-cream;
  }
  
  h1 {
    @apply font-garamond italic font-semibold;
  }
  
  h2 {
    @apply font-garamond italic font-semibold;
  }
  
  h3 {
    @apply font-garamond font-semibold;
  }
}

@layer components {
  .btn-primary {
    @apply bg-rose-purple text-warm-cream px-8 py-4 text-xl font-bold rounded-lg 
           hover:bg-rose-purple/90 hover:scale-105 active:scale-95 
           transition-all duration-200 ease-in-out;
  }
  
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24;
  }
  
  .prose-fireweed {
    @apply prose prose-lg prose-ash-gray max-w-readable;
  }
}

@layer utilities {
  .text-gradient-fireweed {
    @apply bg-gradient-to-r from-deep-pink to-rose-purple bg-clip-text text-transparent;
  }
  
  .animate-fade-in {
    @apply opacity-0 translate-y-4 transition-all duration-600 ease-out;
  }
  
  .animate-fade-in.visible {
    @apply opacity-100 translate-y-0;
  }
}
```

### Helpful Tailwind Utilities for This Project

**Common Component Classes:**

```html
<!-- Section container -->
<section class="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <!-- Content -->
  </div>
</section>

<!-- Card -->
<div class="bg-soft-ivory p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <!-- Card content -->
</div>

<!-- Button variations -->
<button class="btn-primary">Primary CTA</button>
<button class="bg-forest-green text-warm-cream px-6 py-3 rounded-lg hover:bg-forest-green/90">
  Secondary Button
</button>

<!-- Link with underline on hover -->
<a href="#" class="text-fireweed-magenta hover:underline transition-all">
  Link Text
</a>

<!-- Divider with icon -->
<div class="flex items-center justify-center my-8">
  <i class="fas fa-leaf text-rose-purple opacity-40"></i>
</div>

<!-- Gradient text -->
<span class="text-gradient-fireweed font-bold">Highlighted Text</span>

<!-- Pull quote -->
<blockquote class="text-2xl font-garamond italic text-rose-purple border-l-4 border-fireweed-magenta pl-6 my-8">
  "Write from ash. Bloom in devastation."
</blockquote>

<!-- Image with caption -->
<figure class="my-8">
  <img src="/images/photo.jpg" alt="Description" class="w-full rounded-lg shadow-lg">
  <figcaption class="text-sm text-charcoal/70 italic mt-2 text-center">
    Caption text
  </figcaption>
</figure>
```

**Responsive Grid Patterns:**

```html
<!-- Two column (tablet+) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <!-- Content -->
</div>

<!-- Three column (desktop+) -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Content -->
</div>

<!-- Alternating layout (zigzag) -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div class="order-2 lg:order-1">Image</div>
  <div class="order-1 lg:order-2">Text</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div class="order-1">Text</div>
  <div class="order-2">Image</div>
</div>
```

**Typography Scale:**

```html
<!-- Display (Hero) -->
<h1 class="text-5xl md:text-7xl font-garamond italic font-semibold">
  Display Heading
</h1>

<!-- Section Heading -->
<h2 class="text-4xl md:text-5xl font-garamond italic font-semibold">
  Section Heading
</h2>

<!-- Subheading -->
<h3 class="text-2xl md:text-3xl font-garamond font-semibold">
  Subheading
</h3>

<!-- Body Text -->
<p class="text-lg md:text-xl font-garamond leading-relaxed">
  Body paragraph text with good readability.
</p>

<!-- Small Text -->
<p class="text-sm md:text-base font-garamond text-charcoal/70">
  Small supporting text
</p>
```

### JavaScript Components

**main.js features:**
- Smooth scrolling for anchor links
- Scroll animations (Intersection Observer API)
- Sticky CTA button (appears after hero section)
- FontAwesome icons initialization (if needed)

**Minimal JavaScript approach** - Most functionality handled by:
- Tailwind CSS for styling
- Third-party email service for forms
- Native HTML/CSS for interactions

**Example main.js:**
```javascript
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-fade-in').forEach(el => {
  observer.observe(el);
});

// Sticky CTA button after hero
const hero = document.querySelector('#hero');
const stickyCTA = document.querySelector('#sticky-cta');

if (hero && stickyCTA) {
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      stickyCTA.classList.toggle('hidden', entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  heroObserver.observe(hero);
}
```

### Content File (_index.md)

```yaml
---
title: "Fireweed Writing Club"
description: "An online writing class built on renewal, persistence, and the radical liberation of putting words on paper."
layout: "landing"
hero:
  title: "The Fireweed Writing Club"
  subtitle: "Write from ash. Bloom in devastation. An online writing class for those ready to persist."
  cta: "Join the Waitlist"
  launchText: "Classes begin Summer 2026"
instructor:
  name: "Brennan Kenneth Brown"
  title: "Mr. Brown"
  credentials:
    - "English Honours Degree (3.8 GPA)"
    - "Founder, Write Club (3+ years)"
    - "9 published books"
    - "200+ Medium articles"
    - "1M+ words journaled"
form:
  title: "Join the waitlist"
  subtitle: "Be notified when enrollment opens"
  disclaimer: "I won't send you promotional emails or marketing. Just one message when we're ready to begin."
  successMessage: "Welcome to the club. You'll hear from me soon. Keep writing."
---
```

---

## Performance & Accessibility

### Performance Goals

**Target Metrics:**
- Lighthouse Performance Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total Page Size: < 500KB (excluding images)

**Optimization Strategies:**

1. **Images:**
   - WebP format with JPEG fallback
   - Responsive images with srcset
   - Lazy loading for below-fold images
   - SVG for icons and illustrations
   - Image dimensions explicitly defined

2. **CSS:**
   - Critical CSS inlined in `<head>`
   - Non-critical CSS loaded asynchronously
   - Minified and concatenated
   - Remove unused CSS

3. **Fonts:**
   - Only load required weights (400, 600, 700)
   - Only load italic variant where needed
   - Font-display: swap for FOUT prevention
   - Self-host fonts for better performance

4. **JavaScript:**
   - Minimal JS (< 50KB total)
   - Defer non-critical scripts
   - No jQuery or large frameworks
   - Vanilla JS for simple interactions

5. **Hugo Build:**
   - Minify HTML output
   - Enable asset fingerprinting for cache busting
   - Generate compressed versions (gzip, brotli)

### Accessibility Requirements

**WCAG 2.1 Level AA Compliance:**

1. **Color Contrast:**
   - Body text on background: minimum 4.5:1
   - Large text on background: minimum 3:1
   - Test all color combinations

2. **Keyboard Navigation:**
   - All interactive elements focusable
   - Logical tab order
   - Visible focus indicators (Rose Purple outline)
   - Skip to main content link

3. **Screen Readers:**
   - Semantic HTML5 elements
   - ARIA labels where needed
   - Alt text for all images
   - Form labels properly associated

4. **Responsive Design:**
   - Mobile-first approach
   - Works at 320px viewport width
   - Readable at 200% zoom
   - No horizontal scrolling

5. **Forms:**
   - Clear error messages
   - Field validation feedback
   - Associated labels
   - Required fields indicated

6. **Typography:**
   - Minimum font size: 16px
   - Sufficient line height (1.5+)
   - Avoid justified text
   - Max line length: 80 characters

### SEO Optimization

**Meta Tags:**
```html
<title>Fireweed Writing Club | Online Writing Class by Brennan Brown</title>
<meta name="description" content="Learn to write with discipline and craft. An online writing class focused on daily practice, imagist techniques, and getting published.">
<meta name="keywords" content="writing class, online writing course, creative writing, poetry, fiction, Brennan Brown">
<link rel="canonical" href="https://fireweed.school">

<!-- Open Graph -->
<meta property="og:title" content="Fireweed Writing Club">
<meta property="og:description" content="Write from ash. Bloom in devastation.">
<meta property="og:image" content="https://fireweed.school/images/og-image.jpg">
<meta property="og:url" content="https://fireweed.school">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Fireweed Writing Club">
<meta name="twitter:description" content="Write from ash. Bloom in devastation.">
<meta name="twitter:image" content="https://fireweed.school/images/twitter-card.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Fireweed Writing Club",
  "description": "An online writing class focused on craft, discipline, and publication",
  "url": "https://fireweed.school",
  "founder": {
    "@type": "Person",
    "name": "Brennan Kenneth Brown",
    "sameAs": [
      "https://brennan.day",
      "https://patreon.com/brennankbrown"
    ]
  }
}
```

---

## Forms & Email Collection

### Third-Party Email Service Integration

**Recommended Services:**

1. **Buttondown** (RECOMMENDED - you already use this)
   - Simple, elegant embeds
   - Privacy-focused
   - No tracking
   - Markdown support for emails
   - API available if needed
   - Free tier: 1,000 subscribers

2. **ConvertKit** 
   - Creator-focused
   - Beautiful forms
   - Tagging and segmentation
   - Landing page builder
   - Free tier: 1,000 subscribers

3. **Mailchimp**
   - Most widely used
   - Robust features
   - Easy embeds
   - Free tier: 500 subscribers

### Buttondown Implementation (RECOMMENDED)

**Embed Code from Buttondown:**

Buttondown provides embeddable forms at `https://buttondown.email/`. After logging in:
1. Go to Settings → Embedding
2. Copy the embed code
3. Customize styles to match your site

**Example Buttondown embed (styled with Tailwind):**

```html
<div class="max-w-2xl mx-auto">
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/brennankbrown"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/brennankbrown', 'popupwindow')"
    class="space-y-6"
  >
    <div class="space-y-4">
      <!-- Name Field -->
      <div>
        <label for="bd-name" class="block text-lg font-garamond text-ash-gray mb-2">
          Name
        </label>
        <input
          type="text"
          name="metadata__name"
          id="bd-name"
          required
          class="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg 
                 focus:border-rose-purple focus:ring-2 focus:ring-rose-purple/20 
                 font-garamond text-lg transition-colors"
        />
      </div>
      
      <!-- Email Field -->
      <div>
        <label for="bd-email" class="block text-lg font-garamond text-ash-gray mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="bd-email"
          required
          class="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg 
                 focus:border-rose-purple focus:ring-2 focus:ring-rose-purple/20 
                 font-garamond text-lg transition-colors"
        />
      </div>
      
      <!-- Optional: Current Work -->
      <div>
        <label for="bd-work" class="block text-lg font-garamond text-ash-gray mb-2">
          What are you currently working on? <span class="text-charcoal/60">(optional)</span>
        </label>
        <textarea
          name="metadata__current_work"
          id="bd-work"
          rows="4"
          class="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg 
                 focus:border-rose-purple focus:ring-2 focus:ring-rose-purple/20 
                 font-garamond text-lg transition-colors resize-none"
        ></textarea>
      </div>
    </div>
    
    <!-- Submit Button -->
    <button type="submit" class="btn-primary w-full">
      Join the Fireweed Writing Club
    </button>
    
    <!-- Disclaimer -->
    <p class="text-center text-base text-charcoal/70 italic font-garamond">
      I won't send you promotional emails or marketing.<br />
      Just one message when we're ready to begin.
    </p>
  </form>
</div>
```

### Alternative: ConvertKit Implementation

**ConvertKit embed:**

1. Create a form in ConvertKit dashboard
2. Choose "Inline" embed type
3. Copy the JavaScript embed code
4. Style with Tailwind classes

**Example ConvertKit structure:**
```html
<div id="convertkit-form" class="max-w-2xl mx-auto"></div>
<script src="https://f.convertkit.com/YOUR_FORM_ID/YOUR_FORM_KEY.js"></script>

<!-- Custom CSS to override ConvertKit styles -->
<style>
  #convertkit-form input,
  #convertkit-form textarea {
    @apply font-garamond text-lg px-4 py-3 border-2 border-charcoal/20 
           rounded-lg focus:border-rose-purple;
  }
  
  #convertkit-form button[type="submit"] {
    @apply btn-primary w-full;
  }
</style>
```

### Alternative: Mailchimp Implementation

**Mailchimp embed:**

1. Create audience in Mailchimp
2. Design signup form
3. Generate embedded form code
4. Customize with Tailwind

**Example Mailchimp structure:**
```html
<!-- Mailchimp provides a full HTML form -->
<div id="mc_embed_signup" class="max-w-2xl mx-auto">
  <form action="https://YOURSITE.us1.list-manage.com/subscribe/post?u=XXX&amp;id=XXX" 
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        class="space-y-6"
        target="_blank">
    <!-- Form fields here with Tailwind styling -->
  </form>
</div>
```

### Success/Confirmation Page

Most services handle success states automatically, but you can customize:

**Buttondown:** Redirects to confirmation page  
**ConvertKit:** In-form success message  
**Mailchimp:** Customizable success message or redirect  

**Custom success message (if needed):**
```html
<div id="success-message" class="hidden max-w-2xl mx-auto text-center py-12">
  <i class="fas fa-check-circle text-6xl text-forest-green mb-6"></i>
  <h3 class="text-4xl font-garamond italic text-fireweed-magenta mb-4">
    Welcome to the club
  </h3>
  <p class="text-xl font-garamond text-ash-gray">
    You'll hear from me soon. Keep writing.
  </p>
</div>
```

### Email Service Setup Steps

**For Buttondown:**
1. Log in to buttondown.email
2. Go to Settings → Subscribers
3. Create custom fields: "name" and "current_work" (as metadata)
4. Customize confirmation email
5. Set up welcome email sequence

**For any service:**
- Create a tag/segment: "Fireweed Waitlist"
- Set up automated welcome email
- Add unsubscribe link (legally required)
- Test form submission thoroughly

### Privacy & Data Handling

**GDPR Compliance (handled by services):**
- Buttondown, ConvertKit, and Mailchimp are all GDPR-compliant
- Include privacy policy link near form
- Services handle unsubscribe automatically
- All use secure HTTPS transmission

**Required Legal Text:**
```html
<p class="text-sm text-charcoal/60 font-garamond max-w-2xl mx-auto text-center mt-4">
  By subscribing, you agree to receive email updates from Fireweed Writing Club. 
  Unsubscribe at any time. 
  <a href="/privacy" class="underline hover:text-fireweed-magenta">Privacy Policy</a>
</p>
```

---

## Assets & Graphics

### FontAwesome Icons

**Setup FontAwesome:**

Use FontAwesome CDN (Free version) or Pro if you have access:

```html
<!-- In your <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Or use Kit for better customization -->
<script src="https://kit.fontawesome.com/YOUR_KIT_CODE.js" crossorigin="anonymous"></script>
```

**Icon Mapping for Sections:**

**What You'll Learn Section:**
- **The Craft:** `<i class="fas fa-feather-alt"></i>` (feather pen)
- **The Practice:** `<i class="fas fa-book"></i>` (journal/book)
- **The Publication:** `<i class="fas fa-paper-plane"></i>` (sending work out)

**What Makes This Different Section:**
- **Community Over Competition:** `<i class="fas fa-users"></i>` (connected people)
- **Real World Practice:** `<i class="fas fa-compass"></i>` (exploration)
- **Genre Flexibility:** `<i class="fas fa-code-branch"></i>` (branching paths)
- **Digital Sovereignty:** `<i class="fas fa-flag"></i>` (claim territory)
- **Dogfooding:** `<i class="fas fa-utensils"></i>` (eating own cooking)

**Additional Icons:**
- **Success checkmark:** `<i class="fas fa-check-circle"></i>`
- **Fireweed flower:** `<i class="fas fa-seedling"></i>` or `<i class="fas fa-spa"></i>`
- **Writing/pen:** `<i class="fas fa-pen-fancy"></i>`
- **Email:** `<i class="fas fa-envelope"></i>`
- **Arrow down:** `<i class="fas fa-arrow-down"></i>`
- **Quote:** `<i class="fas fa-quote-left"></i>`

**Styling Icons with Tailwind:**

```html
<!-- Large decorative icon -->
<i class="fas fa-feather-alt text-6xl text-forest-green mb-4"></i>

<!-- Icon in button -->
<button class="btn-primary">
  Join Waitlist <i class="fas fa-arrow-right ml-2"></i>
</button>

<!-- Icon with gradient -->
<i class="fas fa-seedling text-5xl text-gradient-fireweed"></i>

<!-- Spinning icon (loading) -->
<i class="fas fa-spinner fa-spin text-rose-purple"></i>
```

**Icon Animation Classes:**
```css
/* In your main.css */
@layer components {
  .icon-bounce {
    @apply animate-bounce;
  }
  
  .icon-pulse {
    @apply animate-pulse;
  }
  
  .icon-float {
    animation: float 3s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Required Visual Assets

**Illustrations:**

1. **Hero Fireweed Illustration**
   - Style: Elegant line art, artistic/stylized
   - Format: SVG (for best quality at any size) or high-res PNG
   - Size: 800x1000px minimum
   - Recommended sources:
     - Commission from Fiverr/Upwork
     - Create with Inkscape (free vector editor)
     - Use AI generation (Midjourney, DALL-E) then vectorize
   - Consider: Animated SVG of flower blooming (optional enhancement)

2. **Section Dividers (Fleurons)**
   - Use FontAwesome: `<i class="fas fa-leaf"></i>` or `<i class="fas fa-asterisk"></i>`
   - Or Unicode: ❦ ✿ ❧ ✤ ❖
   - Color: Rose Purple with 40% opacity
   - Size: text-2xl

3. **Photography:**
   - **Fireweed in nature** (high quality)
     - Stock photos: Unsplash, Pexels (free)
     - Search: "fireweed wildflower" "Chamerion angustifolium"
     - Recommended: https://unsplash.com/s/photos/fireweed
   - **Professional photo of Brennan**
     - Style: Approachable but professional
     - Background: Natural or blurred
     - Format: WebP with JPEG fallback
   - **Optional: Writing environment photos**
     - Desk with journal, typewriter, books
     - Adds warmth and personality

4. **Decorative Elements:**
   - **Texture overlays:** Paper texture (subtle, 3-5% opacity)
     - Download from: Subtle Patterns, Transparent Textures
   - **Gradient backgrounds:** Use Tailwind gradient utilities
   - **Geometric patterns:** CSS-generated or SVG patterns

### Asset Optimization

**Images:**
- Compress all images (TinyPNG, ImageOptim)
- Generate responsive sizes (480w, 768w, 1024w, 1920w)
- Provide 1x and 2x versions for retina displays
- Use progressive JPEG format

**SVGs:**
- Minify SVG code
- Remove unnecessary metadata
- Inline critical SVGs
- Use SVG sprites for repeated icons

### OG Images & Social Cards

**Open Graph Image:**
- Size: 1200x630px
- Format: JPEG
- Content: Logo, tagline, fireweed illustration
- File size: < 300KB

**Twitter Card:**
- Size: 1200x600px (2:1 ratio)
- Format: JPEG
- Similar content to OG image
- File size: < 300KB

---

## Responsive Design Breakpoints

### Mobile First Approach

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1440px+

### Section-Specific Responsive Notes

**Hero:**
- Mobile: Stack vertically, reduce illustration size
- Tablet: Maintain stack, increase illustration
- Desktop: Side-by-side if illustration warrants

**The Symbol:**
- Mobile: Stack text then image
- Tablet: Side-by-side
- Desktop: Larger image, more whitespace

**What You'll Learn:**
- Mobile: Single column
- Tablet: Two columns
- Desktop: Three columns

**Why Mr. Brown:**
- Mobile: Photo above text
- Tablet: Photo floated to side
- Desktop: Centered layout

**What Makes Different:**
- Mobile: Stack all blocks
- Tablet: Maintain stack but wider
- Desktop: Zigzag layout

**Email Signup:**
- Mobile: Full width, stack fields
- Tablet: Narrower form, center
- Desktop: Maximum 600px width

---

## Animation & Interaction

### Scroll Animations

**Fade In on Scroll:**
- Elements: Section headlines, cards, images
- Trigger: Element enters viewport
- Animation: Fade in + slight upward movement
- Duration: 0.6s
- Easing: ease-out

**Implementation:**
```javascript
// Using Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### Hover States

**Buttons:**
- Default: Rose Purple background
- Hover: Darken by 10%, slight scale (1.02)
- Active: Darken by 15%, scale (0.98)
- Transition: 0.2s ease

**Links:**
- Default: Underline on hover
- Color: Fireweed Magenta
- Transition: 0.2s ease

**Cards:**
- Default: Subtle shadow
- Hover: Increase shadow, slight lift
- Transition: 0.3s ease

### Loading States

**Form Submission:**
- Button shows spinner
- Disable form inputs
- Smooth transition to success message

**Page Load:**
- Optional: Simple fade-in on body
- No heavy loading animations
- Fast perceived performance

---

## Browser Support

**Target Browsers:**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Chrome Android (latest 2 versions)

**Progressive Enhancement:**
- Core content accessible without JavaScript
- CSS Grid with Flexbox fallback
- Modern features with graceful degradation

---

## Deployment

### Recommended: Netlify (Simplest for Hugo + Tailwind)

**Why Netlify:**
- Automatic builds from Git
- Hugo support out of the box
- Free SSL certificate
- Custom domain support
- Form handling (if needed)
- CDN included
- Preview deployments for branches

### Deployment Steps

**1. Push to GitHub/GitLab:**
```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/fireweed-school.git
git push -u origin main
```

**2. Connect to Netlify:**
- Go to https://app.netlify.com
- Click "Add new site" → "Import an existing project"
- Connect to GitHub/GitLab
- Select your repository

**3. Configure Build Settings:**

**netlify.toml** (create in root):
```toml
[build]
  publish = "public"
  command = "npm run build"

[build.environment]
  HUGO_VERSION = "0.146.0"
  NODE_VERSION = "18"

[context.production.environment]
  HUGO_ENV = "production"
  
[context.deploy-preview.environment]
  HUGO_ENV = "staging"

# Tailwind purge for production
[[plugins]]
  package = "@netlify/plugin-hugo-cache-resources"

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    
# Cache static assets
[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    
[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Redirect www to non-www (or vice versa)
[[redirects]]
  from = "https://www.fireweed.school/*"
  to = "https://fireweed.school/:splat"
  status = 301
  force = true
```

**4. Update package.json build script:**
```json
{
  "scripts": {
    "build": "npm run tailwind:build && hugo --gc --minify"
  }
}
```

**5. Custom Domain Setup:**
- In Netlify: Site settings → Domain management
- Add custom domain: `fireweed.school`
- Add DNS records at your registrar:
  - A record: `75.2.60.5`
  - CNAME for www: `apex-loadbalancer.netlify.com`
- Wait for SSL to provision (automatic)

**6. Environment Variables (if needed):**
- Site settings → Environment variables
- Add any API keys (though not needed for this simple site)

### Alternative Hosting Options

**Vercel:**
- Similar to Netlify
- Excellent performance
- Good Hugo support
- Free tier sufficient

**Cloudflare Pages:**
- Fastest global CDN
- Hugo support
- Free tier generous
- Good for high-traffic sites

### Continuous Deployment

Once connected, every push to `main` branch automatically:
1. Triggers a build
2. Runs Tailwind CSS purge
3. Minifies HTML/CSS/JS
4. Deploys to production
5. Updates with zero downtime

**Preview Deployments:**
- Every pull request gets a preview URL
- Test changes before merging
- Share with clients/team for feedback

---

## Testing Checklist

### Pre-Launch Testing

**Functionality:**
- [ ] All internal links work
- [ ] External links open in new tab with `target="_blank" rel="noopener"`
- [ ] Smooth scroll to email signup works
- [ ] Email form submits successfully (test with your email)
- [ ] Email confirmation received from service (Buttondown/ConvertKit)
- [ ] Success message displays correctly
- [ ] All FontAwesome icons display correctly

**Design:**
- [ ] All sections render correctly
- [ ] Images load properly (WebP with fallback)
- [ ] Google Fonts (EB Garamond) load correctly
- [ ] FontAwesome icons load correctly
- [ ] Colors match specification
- [ ] Typography hierarchy clear
- [ ] Tailwind styles compiled correctly
- [ ] Responsive design works at all breakpoints (320px, 768px, 1024px, 1440px)

**Performance:**
- [ ] Lighthouse score 95+ (Performance)
- [ ] Images optimized and using WebP
- [ ] Tailwind CSS minified in production
- [ ] JavaScript minified (if any)
- [ ] Page loads in < 3 seconds (test on 3G)
- [ ] No unused CSS (use PurgeCSS with Tailwind)

**Accessibility:**
- [ ] Lighthouse score 95+ (Accessibility)
- [ ] Color contrast passes (test with browser tools)
- [ ] Keyboard navigation works (Tab through all elements)
- [ ] Screen reader friendly (test with NVDA or VoiceOver)
- [ ] ARIA labels where needed
- [ ] Alt text on all images
- [ ] FontAwesome icons have `aria-hidden="true"` when decorative
- [ ] Form labels properly associated

**Browser Testing:**
- [ ] Chrome (desktop & mobile)
- [ ] Firefox
- [ ] Safari (desktop & mobile)
- [ ] Edge

**Tailwind Specific:**
- [ ] Production build removes unused classes
- [ ] Custom colors work correctly
- [ ] Responsive classes work at all breakpoints
- [ ] Custom font loads from Google Fonts
- [ ] Hover states work on all interactive elements

**Email Service (Buttondown/ConvertKit):**
- [ ] Form embed displays correctly
- [ ] Form styling matches site design
- [ ] Test submission goes through
- [ ] Confirmation email received
- [ ] Double opt-in works (if enabled)
- [ ] Unsubscribe link works
- [ ] Privacy policy linked

**SEO:**
- [ ] Meta tags present and correct
- [ ] OG tags present and correct
- [ ] Structured data valid (test with Google's tool)
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Canonical URL set
- [ ] Favicon displays in all browsers

**Mobile Specific:**
- [ ] Touch targets at least 44x44px
- [ ] No horizontal scrolling
- [ ] Text readable without zoom
- [ ] Images scale appropriately
- [ ] Forms easy to fill on mobile
- [ ] Buttons easy to tap

---

## Analytics & Tracking

### Privacy-Friendly Analytics

**Recommended:**
1. **Plausible Analytics**
   - Privacy-focused
   - No cookies
   - Lightweight script
   - GDPR compliant

2. **Fathom Analytics**
   - Simple, privacy-first
   - No personal data collected

3. **Self-hosted Umami**
   - Open source
   - Full control
   - Privacy-friendly

### Events to Track

**Page Views:**
- Overall traffic
- Referral sources

**User Actions:**
- Form submissions
- Button clicks
- Scroll depth
- Time on page

**No Personal Data:**
- No IP addresses
- No cookies
- No fingerprinting
- Aggregate data only

---

## Timeline & Next Steps

### Immediate (Before Development)

1. Finalize color palette hex values
2. Source or create fireweed illustrations
3. Gather/create all required images
4. Write all copy variations
5. Get professional photo of Brennan

### Development Phase

**Week 1:**
- Hugo setup and configuration
- Base templates and partials
- CSS architecture and variables
- Typography implementation

**Week 2:**
- Section layouts and content
- Responsive design
- Animation and interactions
- Form integration

**Week 3:**
- Image optimization
- Performance tuning
- Accessibility audit
- Cross-browser testing

**Week 4:**
- Final polish
- Content review
- Load testing
- Deploy to staging

### Pre-Launch

- Send to test group for feedback
- Make final adjustments
- SEO setup complete
- Analytics configured
- DNS configured

### Launch Day

- Deploy to production
- Monitor performance
- Check all functionality
- Announce on social media
- Announce on brennan.day

---

## Additional Notes

### Development Best Practices

**Version Control:**
- Commit regularly with clear messages
- Use branches for experiments
- Keep main branch deployable

**Code Organization:**
- Keep Tailwind config clean and organized
- Comment complex utility combinations
- Use consistent naming for classes
- Group related sections in partials

**Tailwind Tips:**
- Use `@apply` sparingly (defeats purpose of utility-first)
- Prefer composition over custom CSS
- Use Tailwind's responsive prefixes (`md:`, `lg:`)
- Leverage JIT mode for custom values

**FontAwesome Best Practices:**
- Use `aria-hidden="true"` for decorative icons
- Provide text alternatives for meaningful icons
- Don't rely solely on icons for navigation
- Test icon legibility at different sizes

### Content Guidelines

**Tone:**
- Warm but serious
- Encouraging but realistic
- Poetic but clear
- Literary but accessible

**Voice:**
- First person (I/we) where appropriate
- Direct address to reader (you)
- Active voice preferred
- Concrete over abstract

**Copy Best Practices:**
- Short paragraphs (2-4 sentences)
- Varied sentence length
- Key phrases italicized
- Avoid jargon unless explained
- Test readability (aim for grade 8-10 reading level)

### Maintenance Plan

**Regular:**
- Update launch date as it approaches
- Monitor email signups (check Buttondown weekly)
- Check analytics weekly
- Test email form monthly
- Update dependencies quarterly

**As Needed:**
- Update content based on feedback
- A/B test headlines (use Netlify split testing)
- Optimize images further (compress, resize)
- Refine copy
- Add student testimonials (post-launch)

### Performance Optimization Checklist

- [ ] Enable Tailwind's purge in production
- [ ] Compress images (use Squoosh or TinyPNG)
- [ ] Use WebP with JPEG fallback
- [ ] Lazy load below-fold images
- [ ] Minimize JavaScript
- [ ] Use Hugo's asset pipeline for optimization
- [ ] Enable Netlify's asset optimization
- [ ] Test on slow connections (3G)

### Accessibility Checklist

- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Form labels associated
- [ ] Headings in logical order
- [ ] Skip to main content link
- [ ] ARIA labels where needed
- [ ] Test with screen reader

### Future Enhancements

**Phase 2 (Post-Launch):**
- Blog/news section for updates
- Student testimonials section
- Sample curriculum preview
- FAQ section
- Video introduction from Mr. Brown
- Dark mode toggle (optional)

**Phase 3 (Post-First Cohort):**
- Portfolio of student work
- More detailed course information
- Pricing structure
- Multiple enrollment options
- Student showcase
- Alumni network section

### Quick Reference Links

**Documentation:**
- [Hugo Docs](https://gohugo.io/documentation/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [FontAwesome Icons](https://fontawesome.com/icons)
- [EB Garamond Font](https://fonts.google.com/specimen/EB+Garamond)
- [Buttondown Docs](https://docs.buttondown.email/)

**Tools:**
- [Tailwind Play](https://play.tailwindcss.com/) - Test utilities
- [Squoosh](https://squoosh.app/) - Image optimization
- [WebPageTest](https://www.webpagetest.org/) - Performance testing
- [WAVE](https://wave.webaim.org/) - Accessibility testing
- [PageSpeed Insights](https://pagespeed.web.dev/) - Google's performance tool

**Community:**
- [Hugo Discourse](https://discourse.gohugo.io/)
- [Tailwind Discord](https://tailwindcss.com/discord)
- [Buttondown Support](https://buttondown.email/help)

---

## Final Thoughts

This landing page is more than a form—it's the first impression of the Fireweed Writing Club. Every element should reflect the values of the project: craft over cleverness, persistence over perfection, substance over flash.

**Why This Tech Stack Works:**

- **Hugo + Tailwind:** Fast development, fast site, easy maintenance
- **FontAwesome:** 6000+ icons at your fingertips, no design work needed
- **Google Fonts:** Beautiful typography, zero setup
- **Buttondown:** Reliable email collection, no backend complexity
- **Netlify:** Deploy in minutes, scales automatically, completely free

The fireweed grows from ash because it must. This page should feel the same way: intentional, necessary, alive.

**Next Steps:**

1. Set up the Hugo + Tailwind project
2. Source or create the hero fireweed illustration
3. Write all copy variations and finalize content
4. Set up Buttondown account and get embed code
5. Build the sections (use the HTML examples as templates)
6. Test thoroughly (performance, accessibility, responsiveness)
7. Deploy to Netlify
8. Configure custom domain
9. Soft launch to test group
10. Public launch

**Remember:**

- Start simple, iterate based on real user feedback
- Performance matters—every 100ms delay loses users
- Accessibility isn't optional—it's fundamental
- The content is more important than the code
- Launch, then improve

Good luck building something beautiful.

**Keep writing.**

---

*Specification prepared January 27, 2026*  
*For: Fireweed Writing School*  
*Tech Stack: Hugo + Tailwind CSS + FontAwesome + Buttondown*  
*Prepared by: Claude, based on the vision of Brennan Kenneth Brown*
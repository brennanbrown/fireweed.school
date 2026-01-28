# Fireweed Writing School

> Write from ash. Bloom in devastation.

Fireweed Writing School is an online creative writing community built on the principles of renewal, persistence, and radical liberation. Named after the fireweed plant—one of the first to bloom after forest fires—this school embraces the idea that creativity can flourish even from devastation.

## Our Philosophy

Unlike traditional writing workshops that can be competitive and intimidating, we believe in:
- **Anti-racist workshop practices** that honor each writer's voice and authority
- **Affordable education** at just $5 per class ($10 per month)
- **Community-driven creativity** through collaborative projects and shared growth
- **Radical permission** to write badly, write daily, and find joy in the process

## What We Offer

- Bi-weekly 2-hour workshops via Zoom
- Practical writing assignments and feedback
- Community zine-making and anthology opportunities
- A supportive space for both new and experienced writers

This landing page is built with Hugo and Tailwind CSS, featuring a responsive design that captures the spirit of creative renewal.

## Development

### Prerequisites

- Node.js (v16+)
- Hugo Extended (v0.112+)
- Git

### Setup

```bash
# Install dependencies
npm install

# Build CSS
npm run tailwind:build

# Start development server
npm run dev
```

The site will be available at http://localhost:1313

### Build for Production

```bash
npm run build
```

This will:
1. Build the Tailwind CSS file
2. Generate the static Hugo site in the `public/` directory

## Deployment

### Netlify (Recommended)

1. Push the code to GitHub/GitLab
2. Connect the repository to Netlify
3. Netlify will automatically detect the Hugo site and use the `netlify.toml` configuration
4. Deploy!

The build command is: `npm run build`
The publish directory is: `public`

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy the contents of the public/ directory to your web server
```

## Color Palette

The site uses a custom color palette defined in `tailwind.config.js`:

### Primary Colors
- **Fireweed Magenta** (`#C13584`) - Primary brand color
- **Rose Purple** (`#B8336A`) - Secondary accent
- **Deep Pink** (`#E75480`) - Bright accent for highlights

### Neutral Colors
- **Ash Gray** (`#2D2D2D`) - Dark text/headers
- **Charcoal** (`#3A3A3A`) - Secondary dark text
- **Warm Cream** (`#F5F1E8`) - Light background
- **Soft Ivory** (`#FFFDF7`) - Main background

### Nature-Inspired Accents
- **Reddish Stem** (`#8B4049`) - Earthy red accent
- **Forest Green** (`#4A7C59`) - Natural green accent

## Customization

### Colors

Edit `tailwind.config.js` to modify the color palette.

### Content

Edit the files in `layouts/partials/` to modify the sections.
Edit `content/_index.md` to modify the homepage content.

### Images

Add images to the `static/images/` directory.

## Email Collection

The site uses Netlify Forms for email collection. Form submissions will be available in your Netlify dashboard at `your-site.netlify.com/admin/forms`. You can configure email notifications in the Netlify admin panel.

### Form Configuration

The form is configured with:
- Form name: `waitlist`
- Fields: `name`, `email`, `current_work` (optional)
- Spam protection via honeypot field

### Viewing Submissions

1. Go to your Netlify dashboard
2. Navigate to Forms → waitlist
3. View and export submissions
4. Set up email notifications under Form settings → Notifications → Email notifications

## License

© 2026 Brennan Kenneth Brown

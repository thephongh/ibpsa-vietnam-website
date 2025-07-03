# IBPSA Vietnam Website

Official website for the International Building Performance Simulation Association (IBPSA) Vietnam Chapter.

## Overview

This is a modern static website built with Hugo, featuring:
- **Static Site Generator**: Hugo (fastest builds, excellent for content-heavy sites)
- **Content Management**: Decap CMS (formerly Netlify CMS) for easy content updates
- **Styling**: Tailwind CSS for responsive design
- **Deployment**: Optimized for Netlify hosting
- **Performance**: Fast loading, SEO-optimized, mobile-first design

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Hugo Extended v0.120+ 
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ibpsa-vietnam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS assets**
   ```bash
   npm run css:build
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:1313`

### Development Commands

```bash
# Start Hugo development server
npm run dev

# Build the site for production
npm run build

# Build CSS with Tailwind
npm run css:build

# Watch CSS changes during development
npm run css:watch

# Clean build artifacts
npm run clean
```

## Site Structure

```
ibpsa-vietnam/
├── content/                    # Markdown content files
│   ├── about/                 # About section pages
│   ├── membership/            # Membership pages
│   ├── events/                # Events and activities
│   ├── resources/             # Resources and publications
│   ├── news/                  # News and blog posts
│   ├── collaboration/         # Partnership pages
│   ├── career/                # Career opportunities
│   └── contact.md             # Contact page
├── layouts/                   # Hugo templates
│   ├── _default/              # Default templates
│   └── partials/              # Reusable template components
├── assets/                    # Source assets
│   ├── css/                   # Stylesheets (Tailwind CSS)
│   └── js/                    # JavaScript files
├── static/                    # Static files
│   ├── admin/                 # CMS configuration
│   ├── css/                   # Compiled CSS
│   ├── js/                    # Compiled JavaScript
│   └── images/                # Images and media
├── config.yaml                # Hugo configuration
├── package.json               # Node.js dependencies
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── netlify.toml              # Netlify deployment settings
```

## Content Management

### Using the CMS Interface

1. **Access the CMS**
   - Visit `/admin/` on your deployed site
   - Login with your credentials (Netlify Identity)

2. **Creating Content**
   - Navigate to the appropriate collection (Pages, News, Events, etc.)
   - Click "New [Content Type]"
   - Fill in the required fields
   - Use the markdown editor for content
   - Preview your changes
   - Save as draft or publish

3. **Managing Media**
   - Upload images through the media library
   - Images are stored in `/static/images/uploads/`
   - Reference uploaded images in your content

### Content Types

- **Pages**: General content pages (About, Contact, etc.)
- **News & Posts**: Blog posts and announcements
- **Events**: Conferences, workshops, webinars
- **Resources**: Publications, guidelines, tools
- **Career**: Job postings and opportunities

### Manual Content Creation

Content can also be created manually by adding Markdown files to the `content/` directory:

```yaml
---
title: "Your Page Title"
description: "Page description for SEO"
date: 2024-01-01
featured_image: "/images/your-image.jpg"
---

Your content goes here in Markdown format.
```

## Development

### Technology Stack

- **Hugo**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **Decap CMS**: Git-based content management
- **PostCSS**: CSS processing
- **JavaScript**: Vanilla JS for interactivity

### Customization

#### Styling
- Edit `assets/css/main.css` for custom styles
- Modify `tailwind.config.js` for Tailwind customization
- Use Tailwind utility classes in templates

#### Templates
- Base template: `layouts/_default/baseof.html`
- Page template: `layouts/_default/single.html`
- List template: `layouts/_default/list.html`
- Partials: `layouts/partials/`

#### Configuration
- Site settings: `config.yaml`
- CMS config: `static/admin/config.yml`
- Build settings: `netlify.toml`

### Adding New Sections

1. Create content directory: `content/new-section/`
2. Add section index: `content/new-section/_index.md`
3. Update navigation in `config.yaml`
4. Add CMS collection in `static/admin/config.yml`

## Deployment

### Netlify (Recommended)

1. **Connect Repository**
   - Connect your Git repository to Netlify
   - Set build command: `hugo --minify`
   - Set publish directory: `public`

2. **Environment Variables**
   - `HUGO_VERSION`: `0.121.0`
   - `NODE_VERSION`: `18.17.0`
   - `HUGO_ENV`: `production`

3. **Enable Netlify Identity**
   - Go to Site Settings > Identity
   - Enable Identity service
   - Configure registration preferences
   - Add users for CMS access

4. **Deploy Settings**
   - Build command: `hugo --minify`
   - Publish directory: `public`
   - Node version: 18.17.0

### Other Hosting Options

The site can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- CloudFlare Pages
- AWS S3 + CloudFront

## CMS Setup

### Netlify Identity Setup

1. **Enable in Netlify Dashboard**
   ```
   Site Settings > Identity > Enable Identity
   ```

2. **Configure Git Gateway**
   ```
   Identity > Services > Git Gateway > Enable
   ```

3. **Add Users**
   ```
   Identity > Invite users
   ```

### Local CMS Development

For local CMS development:

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Start local proxy**
   ```bash
   npx netlify-cms-proxy-server
   ```

3. **Run Hugo with local backend**
   ```bash
   hugo serve
   ```

4. **Access CMS at** `http://localhost:1313/admin/`

## SEO and Performance

### Built-in SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- XML sitemap generation
- Robots.txt

### Performance Optimizations

- Minified CSS and JavaScript
- Optimized images
- CDN-ready static files
- Fast Hugo build times
- Responsive images

### Lighthouse Scores

Target scores:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

## Content Guidelines

### Writing Style

- Clear, professional tone
- Focus on building performance simulation
- Include relevant keywords naturally
- Use active voice
- Keep paragraphs concise

### Image Guidelines

- Use high-quality images
- Optimize for web (WebP preferred)
- Include alt text for accessibility
- Recommended sizes:
  - Hero images: 1920x1080px
  - Featured images: 800x450px
  - Thumbnails: 400x225px

### SEO Best Practices

- Include meta descriptions (150-160 characters)
- Use descriptive page titles
- Structure content with headings (H1, H2, H3)
- Include internal links
- Add relevant tags and categories

## Troubleshooting

### Common Issues

**Build fails with "module not found"**
```bash
# Remove theme reference from config.yaml
# Ensure all dependencies are installed
npm install
```

**CMS not loading**
```bash
# Check Netlify Identity is enabled
# Verify admin/config.yml syntax
# Check browser console for errors
```

**CSS not updating**
```bash
# Rebuild CSS
npm run css:build
# Clear browser cache
# Check tailwind.config.js syntax
```

**Hugo server not starting**
```bash
# Check Hugo version
hugo version
# Update to latest version
# Check config.yaml syntax
```

### Debug Commands

```bash
# Verbose Hugo build
hugo --verbose

# Check Hugo environment
hugo env

# Validate configuration
hugo config

# Check site statistics
hugo --printPathWarnings
```

## Contributing

### Content Contributions

1. Fork the repository
2. Create content in appropriate sections
3. Follow content guidelines
4. Submit pull request

### Code Contributions

1. Follow existing code style
2. Test changes locally
3. Update documentation as needed
4. Submit pull request with description

### Reporting Issues

- Use GitHub Issues for bug reports
- Include Hugo version and browser info
- Provide steps to reproduce
- Include error messages

## Support

- **Documentation**: This README and inline comments
- **Issues**: GitHub Issues
- **Community**: IBPSA Vietnam members
- **Technical**: Contact development team

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- IBPSA International for organizational framework
- Hugo community for excellent documentation
- Tailwind CSS for utility-first design system
- Netlify for hosting and CMS infrastructure
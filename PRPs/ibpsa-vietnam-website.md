name: "IBPSA Vietnam Website - Complete Static Site with CMS"
description: |

## Purpose
Build a complete static website for IBPSA Vietnam with content management capabilities, optimized for easy deployment and maintenance.

## Core Principles
1. **Static-First Architecture**: Use modern static site generator for performance and security
2. **Content Management**: Implement headless CMS for easy content updates by admins/moderators
3. **Developer Experience**: Follow established patterns and conventions
4. **Deployment Ready**: Ensure seamless deployment to static hosting platforms
5. **Global rules**: Follow all rules in CLAUDE.md

---

## Goal
Create a comprehensive website for IBPSA Vietnam that serves as the central hub for building performance simulation professionals in Vietnam, with complete navigation structure, content management system, and deployment pipeline.

## Why
- **Professional Presence**: Establish IBPSA Vietnam as a credible regional affiliate
- **Community Building**: Provide a platform for members to connect and share resources
- **Knowledge Sharing**: Centralize resources, publications, and educational content
- **Event Management**: Promote and manage workshops, webinars, and conferences
- **Industry Growth**: Support the building performance simulation industry in Vietnam

## What
A modern static website with:
- Complete navigation structure as specified in INITIAL.md
- Content management system for admins/moderators
- Responsive design optimized for mobile and desktop
- SEO-friendly structure
- Integration with external resources and APIs
- Easy deployment to static hosting platforms

### Success Criteria
- [ ] All 43 pages from navigation structure implemented
- [ ] CMS interface allowing admin/moderator content editing
- [ ] Responsive design works on all devices
- [ ] Site loads in under 3 seconds
- [ ] SEO score above 90 on Lighthouse
- [ ] Successfully deploys to static hosting (Netlify/Vercel)
- [ ] Content can be updated without developer intervention

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: https://ibpsa.org/
  why: Reference implementation of main IBPSA website structure and content
  
- url: https://www.ibpsa.us/
  why: Example of regional affiliate site structure and features
  
- url: https://ibpsa-england.org/
  why: Another regional affiliate example with similar goals
  
- url: https://jamstack.org/generators/
  why: Comprehensive list of static site generators for framework selection
  
- url: https://strapi.io/
  why: Leading headless CMS documentation for content management
  
- url: https://www.netlify.com/
  why: Primary deployment platform documentation
  
- url: https://gohugo.io/
  why: Hugo static site generator documentation - recommended for speed
  
- url: https://jekyllrb.com/
  why: Jekyll documentation - alternative with GitHub Pages integration
  
- file: /Users/phonghan/01-coding/websites/ibpsa-vietnam/INITIAL.md
  why: Complete site architecture and navigation structure requirements
  
- file: /Users/phonghan/01-coding/websites/ibpsa-vietnam/CLAUDE.md
  why: Project conventions and development guidelines
```

### Current Codebase Tree
```bash
/Users/phonghan/01-coding/websites/ibpsa-vietnam/
├── CLAUDE.md
├── INITIAL.md
├── PRPs/
│   ├── templates/
│   │   └── prp_base.md
│   └── ibpsa-vietnam-website.md
└── examples/
    └── websites/
```

### Desired Codebase Tree
```bash
/Users/phonghan/01-coding/websites/ibpsa-vietnam/
├── CLAUDE.md
├── INITIAL.md
├── PRPs/
├── examples/
├── src/                          # Source files for the website
│   ├── content/                  # Content files (markdown/yaml)
│   │   ├── pages/               # Static pages content
│   │   ├── posts/               # Blog posts and news
│   │   ├── events/              # Events content
│   │   └── resources/           # Resources and publications
│   ├── layouts/                 # Template layouts
│   │   ├── default.html         # Base layout
│   │   ├── page.html           # Page layout
│   │   └── post.html           # Post layout
│   ├── assets/                  # Static assets
│   │   ├── css/                # Stylesheets
│   │   ├── js/                 # JavaScript files
│   │   └── images/             # Images and media
│   └── data/                   # Data files (members, navigation)
├── public/                      # Generated static files (build output)
├── cms/                         # CMS configuration and admin interface
│   ├── config.yml              # CMS configuration
│   └── index.html              # CMS admin interface
├── package.json                 # Dependencies and build scripts
├── netlify.toml                # Deployment configuration
└── README.md                   # Setup and deployment instructions
```

### Known Gotchas & Library Quirks
```yaml
# CRITICAL: Hugo requires specific directory structure
# Example: Content files must be in /content/ directory with proper front matter
# Example: Templates must be in /layouts/ directory with specific naming conventions

# CRITICAL: Netlify CMS requires specific configuration
# Example: Must have /admin/config.yml for CMS configuration
# Example: OAuth integration needed for user authentication

# CRITICAL: Static site generators have different markdown processing
# Example: Hugo uses Goldmark, Jekyll uses Kramdown - syntax may vary
# Example: Front matter format must be consistent (YAML vs TOML)

# CRITICAL: Image optimization and responsive images
# Example: Hugo supports image processing but requires specific syntax
# Example: Netlify provides image optimization services via query parameters
```

## Implementation Blueprint

### Technology Stack Selection
Based on requirements analysis:
- **Static Site Generator**: Hugo (fastest build times, excellent for content-heavy sites)
- **Headless CMS**: Decap CMS (formerly Netlify CMS) - Git-based, perfect for static sites
- **Hosting Platform**: Netlify (excellent Hugo integration, free tier, built-in CMS support)
- **Styling**: Tailwind CSS (utility-first, responsive design)
- **Content Format**: Markdown with YAML front matter

### Data Models and Structure
```yaml
# Content Types
Page:
  title: string
  description: string
  content: markdown
  slug: string
  featured_image: string
  meta_keywords: string
  
Post:
  title: string
  date: datetime
  author: string
  category: string
  tags: array
  featured_image: string
  excerpt: string
  content: markdown
  
Event:
  title: string
  date: datetime
  end_date: datetime
  location: string
  description: string
  registration_link: string
  featured_image: string
  
Member:
  name: string
  organization: string
  role: string
  bio: string
  image: string
  contact_info: object
```

### List of Tasks (Implementation Order)

```yaml
Task 1 - Project Setup:
  CREATE package.json:
    - Initialize Node.js project
    - Add Hugo as dependency
    - Add build and development scripts
    - Add Tailwind CSS and PostCSS
  
  CREATE netlify.toml:
    - Configure build settings
    - Set Hugo version
    - Configure redirects and headers

Task 2 - Hugo Site Structure:
  CREATE config.yaml:
    - Site configuration
    - Navigation menus
    - SEO settings
    - Theme configuration
  
  CREATE layouts/_default/baseof.html:
    - Base HTML template
    - Include meta tags, CSS, JS
    - Responsive navigation
    - Footer structure

Task 3 - Layout Templates:
  CREATE layouts/_default/single.html:
    - Single page template
    - Breadcrumb navigation
    - Content rendering
  
  CREATE layouts/_default/list.html:
    - List page template
    - Pagination
    - Content summaries
  
  CREATE layouts/partials/:
    - header.html (navigation)
    - footer.html (footer content)
    - head.html (meta tags)

Task 4 - Content Structure:
  CREATE content/ directory structure:
    - Mirror navigation from INITIAL.md
    - Create _index.md for each section
    - Add front matter templates
  
  POPULATE sample content:
    - Extract content from IBPSA reference sites
    - Create Vietnam-specific content
    - Add placeholder images

Task 5 - Styling System:
  CREATE assets/css/main.css:
    - Import Tailwind CSS
    - Custom component styles
    - Responsive design utilities
  
  CREATE assets/js/main.js:
    - Navigation toggle
    - Search functionality
    - Interactive components

Task 6 - CMS Integration:
  CREATE static/admin/config.yml:
    - Configure Decap CMS
    - Define content types
    - Set up media library
    - Configure user roles
  
  CREATE static/admin/index.html:
    - CMS admin interface
    - Authentication setup
    - Custom preview templates

Task 7 - Content Population:
  POPULATE content using Tavily MCP:
    - Research and extract content from reference sites
    - Create Vietnam-specific adaptations
    - Add sample posts and events
    - Create member directory structure

Task 8 - SEO & Performance:
  CONFIGURE SEO:
    - Meta tags in layouts
    - Open Graph tags
    - Schema markup
    - Sitemap generation
  
  OPTIMIZE performance:
    - Image optimization
    - CSS/JS minification
    - CDN configuration

Task 9 - Testing & Validation:
  CREATE test content:
    - Test all page types
    - Verify CMS functionality
    - Test responsive design
  
  VALIDATE deployment:
    - Test build process
    - Verify Netlify deployment
    - Test CMS admin access

Task 10 - Documentation:
  CREATE README.md:
    - Setup instructions
    - Deployment guide
    - Content management guide
    - Troubleshooting tips
```

### Integration Points
```yaml
CMS Configuration:
  - File: static/admin/config.yml
  - Pattern: Define collections for each content type
  - Authentication: Netlify Identity or GitHub OAuth
  
Build Process:
  - Hugo build command: hugo --minify
  - Asset processing: PostCSS for Tailwind
  - Deployment: Netlify continuous deployment
  
Content Management:
  - Path: /admin/ for CMS access
  - Pattern: Git-based workflow for content changes
  - Preview: Real-time preview in CMS interface
```

## Validation Loop

### Level 1: Syntax & Build
```bash
# Install dependencies
npm install

# Build the site
hugo --minify

# Expected: No errors, static files generated in public/
# If errors: Check Hugo configuration and template syntax
```

### Level 2: Development Server
```bash
# Start development server
hugo serve -D

# Expected: Site accessible at http://localhost:1313
# Test: Navigate through all pages, verify responsive design
```

### Level 3: CMS Testing
```bash
# Test CMS access
# Navigate to http://localhost:1313/admin/
# Expected: CMS interface loads, can create/edit content

# Test content creation
# Create a test post through CMS
# Expected: Content appears on site, Git commit created
```

### Level 4: Deployment Test
```bash
# Deploy to Netlify
# Connect GitHub repository
# Configure build settings
# Expected: Site deploys successfully, CMS admin access works
```

## Final Validation Checklist
- [ ] All 43 navigation pages implemented and accessible
- [ ] CMS admin interface functional at /admin/
- [ ] Site builds without errors: `hugo --minify`
- [ ] Development server runs: `hugo serve`
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] SEO tags present on all pages
- [ ] Images optimized and responsive
- [ ] Site deploys successfully to Netlify
- [ ] Content can be edited through CMS interface
- [ ] Performance score >90 on Lighthouse
- [ ] Documentation complete and accurate

---

## Anti-Patterns to Avoid
- ❌ Don't create monolithic templates - use Hugo partials
- ❌ Don't hardcode content - use Hugo's content management
- ❌ Don't ignore mobile responsiveness - mobile-first design
- ❌ Don't skip image optimization - affects performance significantly
- ❌ Don't forget meta tags - crucial for SEO
- ❌ Don't overcomplicate CMS configuration - keep it simple for editors
- ❌ Don't ignore accessibility - use semantic HTML and ARIA labels

## Confidence Score: 8/10

This PRP provides comprehensive context for implementing the IBPSA Vietnam website. The confidence score is high because:
- Clear technology stack selection based on requirements
- Detailed implementation blueprint with specific tasks
- Extensive research on similar sites and best practices
- Executable validation steps
- Comprehensive documentation requirements

The score is not 10/10 because some content population will require iterative refinement based on actual content availability and user feedback during implementation.
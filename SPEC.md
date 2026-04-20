# Academic Portfolio Website Specification

## Project Overview

- **Project Name**: Dr. [Name] Academic Portfolio
- **Project Type**: Academic/Professional portfolio website with headless CMS
- **Core Functionality**: Professional showcase for a PhD academic with community work, published articles, and contact capability
- **Target Users**: Academic peers, potential collaborators, students, and general public
- **Content Management**: Sanity.io (visual editor for non-technical CMS)

---

## UI/UX Specification

### Layout Structure

**Pages**:
1. **Home** - Hero introduction with photo, title, and brief bio
2. **About** - Full bio, education, research interests
3. **Community** - Gallery section for community work images
4. **Publications** - List of published articles/papers ("Lit" section)
5. **Contact** - Email link and contact information

**Responsive Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette**:
- Primary: `#1a1a2e` (Deep navy - sophistication)
- Secondary: `#eae4d9` (Warm ivory - academic warmth)
- Accent: `#c9a959` (Muted gold - achievement)
- Text: `#2d2d2d` (Charcoal)
- Background: `#faf9f7` (Off-white)
- Light accent: `#6b7a8f` (Slate blue-gray)

**Typography**:
- Headings: `Playfair Display` (serif, elegant academic feel)
- Body: `Source Sans 3` (readable, professional)
- Sizes:
  - H1: 3.5rem (desktop), 2.5rem (mobile)
  - H2: 2.25rem (desktop), 1.75rem (mobile)
  - H3: 1.5rem
  - Body: 1.125rem
  - Small: 0.875rem

**Spacing System**:
- Section padding: 6rem vertical (desktop), 4rem (mobile)
- Content max-width: 1200px
- Grid gap: 2rem

**Visual Effects**:
- Subtle box shadows on cards: `0 4px 20px rgba(0,0,0,0.08)`
- Smooth page transitions: 0.3s ease
- Image hover: subtle scale (1.02) with shadow increase
- Section fade-in on scroll

### Components

**Navigation**:
- Sticky header with transparent-to-solid on scroll
- Logo/name on left, nav links on right
- Mobile: hamburger menu with slide-in drawer

**Hero Section**:
- Large professional photo (right side on desktop, top on mobile)
- Name, title, one-liner introduction
- Call-to-action buttons (View Work, Contact)

**About Section**:
- Two-column layout (photo left, bio right on desktop)
- Education timeline
- Research interests as styled tags

**Community Gallery**:
- Masonry or grid layout
- Lightbox on click
- Image cards with captions

**Publications List**:
- Card layout for each publication
- Title, journal, date, abstract preview
- External link to full article

**Contact Section**:
- Email icon that opens mailto: link
- Social/academic profile links
- Office location (optional)

---

## Functionality Specification

### Core Features

1. **Sanity.io Integration**
   - Visual content editor at /studio route
   - Schemas: Profile, CommunityImage, Publication, Settings
   - Real-time preview in Sanity Studio

2. **Dynamic Content**
   - All content fetched from Sanity and rendered statically
   - ISR (Incremental Static Regeneration) for fast loads

3. **Email Contact**
   - mailto: link in contact section
   - Opens default email client

4. **Image Gallery**
   - Sanity handles image uploads
   - Next.js Image component for optimization

5. **SEO**
   - Meta tags from Sanity content
   - Open Graph support

### User Interactions

- Smooth scroll between sections
- Image lightbox for community gallery
- External links to publications open in new tab

---

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **CMS**: Sanity.io v3
- **Styling**: CSS Modules with CSS Variables
- **Deployment**: Vercel (automatic)
- **Hosting**: Sanity Content Lake on Sanity.io

---

## Acceptance Criteria

1. Website loads without errors on localhost
2. All 5 sections visible and styled correctly
3. Sanity Studio accessible at /studio
4. Content editable through Sanity dashboard
5. Responsive on mobile/tablet/desktop
6. Vercel deployment successful
7. Email link opens mail client
8. Images display correctly
9. Publications link externally
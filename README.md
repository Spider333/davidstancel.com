# David Stancel - Personal Website

A minimalist, futuristic personal website showcasing David Stancel's professional roles, experiences, and expertise.

## Features

### Design & Structure
- Clean, futuristic dark theme with minimalist aesthetics
- Terminal-inspired interface with collapsible keyword sections
- Single-page layout with dynamic content sections
- Responsive design for all device sizes
- SEO optimized structure

### Keywords
The site is organized around expandable keywords representing David's professional roles:
- Entrepreneur
- Advisor & Consultant
- Speaker
- Educator
- Student
- NGO Founder
- Writer
- Member
- Blog

### Interactive Elements
- Collapsible keyword sections that expand to reveal detailed content
- Terminal-like interface with keyboard-navigable sections
- Image gallery carousel with 21+ images
- Floating social media and contact icons
- Smooth animations and transitions

### Blog System
- Markdown-based blog with reading time indicators
- Automatic GitHub sync with Windsurf platform
- Tag-based filtering system for content discovery
- Full-text search functionality
- Blog post creation interface in admin panel
- Mobile-optimized reading experience

## Technical Implementation

### Frontend
- React.js with TypeScript for type safety
- Tailwind CSS for styling and responsive design
- Framer Motion for animations
- Shadcn/UI components for consistent UI elements
- Wouter for lightweight routing

### Blog Features
- **Markdown Rendering**: Custom markdown parser and renderer
- **Reading Time**: Automatic calculation based on word count (225 words/minute)
- **Tag System**: Interactive tag filtering
- **Search**: Full-text search across titles, content, and taglines
- **Admin Panel**: Interface for creating and managing blog posts

### Content Structure
- Each blog post is stored as a separate markdown file in `client/src/blog/posts/` directory
- Front matter contains metadata like title, date, tags, and author
- Content is rendered using a custom Markdown component

## Deployment & Syncing

The website is designed to be easily deployable and syncable:
- **Deployment**: Standard Node.js deployment process
- **Blog Sync**: GitHub integration allows easy syncing with Windsurf

## Getting Started

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Creating Blog Posts
1. Navigate to `/admin/blog` in the browser
2. Fill in the post details and content
3. Create the post
4. Copy the generated markdown to a new file in `client/src/blog/posts/`

### Managing Tags
The tag system automatically collects all unique tags from existing posts and makes them available for filtering. To add new tags:
1. Include them in the front matter of blog posts
2. They will automatically appear in the filtering system

## Customization

### Theme
- Edit `theme.json` to modify the color scheme
- The main accent color is `#00FFAA` with dark backgrounds
- Terminal-inspired interface uses monospace fonts and minimal formatting

### Content
- Modify `client/src/data/keywords.tsx` to update the main site sections
- Blog posts can be edited directly in their markdown files

## License
All rights reserved.
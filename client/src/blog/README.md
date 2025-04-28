# Blog Structure for David Stancel's Website

This folder contains the blog system for David Stancel's personal website. The blog is designed to be easily maintainable and can be synced with GitHub and then to Windsurf for local posting.

## Folder Structure

```
blog/
├── index.ts            # Main entry point that loads all blog posts
├── markdown.tsx        # Simple markdown renderer component
└── posts/              # Folder containing individual blog posts as markdown files
    ├── getting-started-with-blockchain.md
    ├── understanding-defi.md
    ├── nft-revolution.md
    └── [your-new-post].md
```

## How It Works

1. Each blog post is stored as a separate markdown file in the `posts/` directory
2. The `index.ts` file loads all these markdown files and makes them available to the React components
3. The `markdown.tsx` component renders the markdown content as React components
4. The `readingTime.ts` utility automatically calculates reading time in minutes for each post

## Creating a New Blog Post

### Method 1: Using the Admin Panel

1. Navigate to `/admin/blog` on your website
2. Fill out the form with your blog post details
3. Click "Create Post" button
4. The admin panel will show you the markdown content for your post and copy it to your clipboard
5. Create a new file in the `posts/` directory with the filename `your-post-id.md`
6. Paste the markdown content into this file

### Method 2: Creating a File Manually

Create a new markdown file in the `posts/` directory with the following format:

```markdown
---
id: unique-post-id
title: Your Post Title
tagline: A short tagline or subtitle for your post
date: YYYY-MM-DD
author: David Stancel
tags:
  - tag1
  - tag2
  - tag3
---

# Your Post Title

Your content goes here. Use markdown formatting:

## Subheading

Regular paragraph text.

- List item 1
- List item 2

1. Numbered item 1
2. Numbered item 2
```

## Syncing with GitHub and Windsurf

1. Push your entire project to GitHub, including the `blog/posts/` directory with all your markdown files
2. Set up Windsurf to pull from your GitHub repository
3. When you want to publish a new post, simply:
   - Create a new markdown file as described above
   - Push to GitHub
   - Pull from GitHub to Windsurf
   - Post locally via Windsurf

## Markdown Syntax

The markdown renderer supports the following syntax:

- Headings: `# Heading 1`, `## Heading 2`, `### Heading 3`
- Paragraphs: Regular text with blank lines between paragraphs
- Lists:
  - Bulleted: `- Item 1`, `- Item 2`
  - Numbered: `1. Item 1`, `2. Item 2`

For more complex markdown features, you can enhance the `markdown.tsx` renderer to support elements like:
- Links
- Code blocks
- Images
- Blockquotes
- Tables
import { BlogPost } from '../data/blogPosts';
import { calculateReadingTime } from './readingTime';

// In a production environment, this would be dynamically loaded from the filesystem
// For this demo, we're hardcoding the imports to simulate dynamic loading
import gettingStartedWithBlockchainMd from './posts/getting-started-with-blockchain.md?raw';
import understandingDefiMd from './posts/understanding-defi.md?raw';
import nftRevolutionMd from './posts/nft-revolution.md?raw';

// Function to parse frontmatter from markdown
function parseFrontmatter(markdown: string): { frontmatter: any, content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content: markdown };
  }
  
  const [, frontmatterStr, content] = match;
  const frontmatter: Record<string, any> = {};
  
  // Parse each line of frontmatter
  frontmatterStr.split('\n').forEach(line => {
    if (line.trim() === '') return;
    
    // Handle arrays (like tags)
    if (line.trim().startsWith('tags:')) {
      frontmatter.tags = [];
      return;
    }
    
    if (line.trim().startsWith('- ') && frontmatter.tags) {
      frontmatter.tags.push(line.trim().substring(2));
      return;
    }
    
    const colonPos = line.indexOf(':');
    if (colonPos !== -1) {
      const key = line.slice(0, colonPos).trim();
      const value = line.slice(colonPos + 1).trim();
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content };
}

// Process each markdown file into a BlogPost object
function processMarkdownFile(markdownContent: string): BlogPost {
  const { frontmatter, content } = parseFrontmatter(markdownContent);
  
  // Calculate reading time for the post
  const readingTime = calculateReadingTime(content);
  
  return {
    id: frontmatter.id || '',
    title: frontmatter.title || '',
    tagline: frontmatter.tagline || '',
    content: content,
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    author: frontmatter.author || 'David Stancel',
    tags: frontmatter.tags || [],
    readingTime // Include reading time in minutes
  };
}

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  // In a production environment, this would scan the directory
  // For this demo, we're using the hardcoded imports
  const markdownFiles = [
    gettingStartedWithBlockchainMd,
    understandingDefiMd,
    nftRevolutionMd
  ];
  
  // Process each markdown file and sort by date (newest first)
  return markdownFiles
    .map(processMarkdownFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a specific blog post by ID
export function getBlogPostById(id: string): BlogPost | undefined {
  return getAllBlogPosts().find(post => post.id === id);
}
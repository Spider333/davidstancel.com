export interface BlogPost {
  id: string;
  title: string;
  tagline: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  readingTime?: number; // Reading time in minutes
}

// Import blog posts from the blog directory
import { getAllBlogPosts } from '../blog';

// Export the blog posts for use in components
export const blogPosts: BlogPost[] = getAllBlogPosts();
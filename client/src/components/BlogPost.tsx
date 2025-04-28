import React from 'react';
import { useParams, Link } from 'wouter';
import { blogPosts } from '../data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { MarkdownRenderer } from '../blog/markdown';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="container mx-auto py-16 text-center">
        <div className="mb-8 text-white/80">Post not found</div>
        <Link href="/blog" className="text-[#00FFAA] flex items-center justify-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/blog" className="text-[#00FFAA] hover:text-[#00FFAA]/80 flex items-center w-max">
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          Back to blog
        </Link>
      </div>
      
      <article className="bg-[#272727]/20 border border-[#3a3a3a] rounded-lg p-6 md:p-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-xl text-white/70 mb-6">{post.tagline}</p>
          
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-[#1a1a1a] text-white/80 border-[#3a3a3a]">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="text-sm text-white/60">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} by {post.author}
          </div>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
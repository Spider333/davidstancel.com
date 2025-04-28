import React from 'react';
import { SEO } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';
import { useParams } from 'wouter';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  return (
    <>
      <SEO 
        title={post ? `${post.title} | David Stancel` : 'Blog | David Stancel'} 
        description={post ? post.tagline : 'Insights on blockchain, cryptocurrencies, and decentralized finance'}
        keywords={post ? post.tags.join(', ').toLowerCase() + ', david stancel' : 'blockchain, bitcoin, ethereum, defi, cryptocurrency, david stancel'} 
      />
      <div className="min-h-screen bg-[#121212] text-white flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16">
          <BlogPost />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
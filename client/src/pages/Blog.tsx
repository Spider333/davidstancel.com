import React, { useState } from 'react';
import { SEO } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog | David Stancel" 
        description="Thoughts and insights from David Stancel."
        keywords="blockchain, bitcoin, ethereum, defi, cryptocurrency, david stancel, blog" 
      />
      <div className="min-h-screen bg-[#121212] text-white flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
            <BlogList />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
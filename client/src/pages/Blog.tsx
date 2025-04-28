import React from 'react';
import { SEO } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog | David Stancel" 
        description="Insights on blockchain, cryptocurrencies, and decentralized finance from David Stancel."
        keywords="blockchain, bitcoin, ethereum, defi, cryptocurrency, david stancel, blog" 
      />
      <div className="min-h-screen bg-[#121212] text-white flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-2">Blog</h1>
            <p className="text-white/70 text-center mb-12">Insights on blockchain, cryptocurrencies, and decentralized finance</p>
            <BlogList />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
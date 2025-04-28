import React from 'react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '../data/blogPosts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { formatReadingTime } from '../blog/readingTime';

const BlogList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-[#00FFAA] text-2xl mb-8 font-medium text-center">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-[#272727]/40 border-[#3a3a3a] hover:border-[#00FFAA]/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-white">
                <Link href={`/blog/${post.id}`} className="hover:text-[#00FFAA] transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-white/70">{post.tagline}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 truncate">{post.content}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-[#1a1a1a] text-white/80 border-[#3a3a3a]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="text-sm text-white/60">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} by {post.author}
                </div>
                
                {post.readingTime && (
                  <div className="flex items-center text-sm text-white/60">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{formatReadingTime(post.readingTime)}</span>
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
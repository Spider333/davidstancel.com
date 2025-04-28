import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '../data/blogPosts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Clock, Search, X, Tag } from 'lucide-react';
import { formatReadingTime } from '../blog/readingTime';
import { Input } from '@/components/ui/input';
import { BlogPost } from '../data/blogPosts';
import { Separator } from '@/components/ui/separator';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  // Extract all unique tags from blog posts
  useEffect(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    setAvailableTags(Array.from(tags).sort());
  }, []);

  // Filter posts based on search term and selected tags
  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      // Filter by search term
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by selected tags (show all if no tags selected)
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => post.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedTags]);

  // Toggle a tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  // Generate title based on filters
  const getFilterTitle = () => {
    if (selectedTags.length === 0) {
      return "Latest Articles";
    }
    if (selectedTags.length === 1) {
      return `Articles tagged with "${selectedTags[0]}"`;
    }
    return `Articles with ${selectedTags.length} selected tags`;
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-[#00FFAA] text-2xl mb-8 font-medium text-center">
        {searchTerm ? "Search Results" : getFilterTitle()}
      </h2>
      <div className="mb-8 space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 bg-[#1a1a1a] border-[#3a3a3a] text-white"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Tag filtering */}
        <div>
          <div className="flex items-center mb-2 mt-4">
            <Tag className="h-4 w-4 mr-2 text-[#00FFAA]" />
            <span className="text-sm text-white/80">Filter by tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {availableTags.map(tag => (
              <Badge 
                key={tag} 
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className={selectedTags.includes(tag) 
                  ? "bg-[#00FFAA] text-black cursor-pointer"
                  : "bg-[#1a1a1a] text-white/80 border-[#3a3a3a] cursor-pointer hover:border-[#00FFAA]/50 hover:bg-[#272727]"
                }
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Show clear filters option if any filter is active */}
          {(searchTerm || selectedTags.length > 0) && (
            <div className="mt-3 flex justify-between items-center">
              <div className="text-sm text-white/60">
                Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </div>
              <button 
                onClick={clearFilters}
                className="text-sm text-[#00FFAA] hover:underline flex items-center gap-1"
              >
                <X className="h-3 w-3" /> Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      {(searchTerm || selectedTags.length > 0) && (
        <Separator className="my-6 bg-[#3a3a3a]" />
      )}

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
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
                    <Badge 
                      key={tag} 
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={selectedTags.includes(tag) 
                        ? "bg-[#00FFAA] text-black cursor-pointer"
                        : "bg-[#1a1a1a] text-white/80 border-[#3a3a3a] cursor-pointer hover:bg-[#272727]"
                      }
                      onClick={() => toggleTag(tag)}
                    >
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
      ) : (
        <div className="text-center py-16">
          <div className="text-2xl text-white/60 mb-2">No posts found</div>
          <div className="text-sm text-white/40">Try adjusting your search or filters</div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
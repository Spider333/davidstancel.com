import React, { useState } from 'react';
import { SEO } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { X, Clock } from 'lucide-react';
import { calculateReadingTime, formatReadingTime } from '../blog/readingTime';

const BlogAdmin = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    id: '',
    title: '',
    tagline: '',
    content: '',
    tags: []
  });
  const [currentTag, setCurrentTag] = useState('');

  const generateId = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'title' && !newPost.id) {
      setNewPost(prev => ({
        ...prev,
        [name]: value,
        id: generateId(value)
      }));
    } else {
      setNewPost(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addTag = () => {
    if (currentTag.trim() && !newPost.tags?.includes(currentTag.trim())) {
      setNewPost(prev => ({
        ...prev,
        tags: [...(prev.tags || []), currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setNewPost(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!newPost.title || !newPost.tagline || !newPost.content) {
      toast({
        title: 'Missing fields',
        description: 'Please fill out all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Create new post
    const readingTime = calculateReadingTime(newPost.content || '');
    const fullPost: BlogPost = {
      ...newPost as any,
      id: newPost.id || generateId(newPost.title || 'post'),
      date: new Date().toISOString().split('T')[0],
      author: 'David Stancel',
      tags: newPost.tags || [],
      readingTime
    };

    // Generate markdown content
    const markdown = generateMarkdownFile(fullPost);
    
    // In a real implementation, this would save the file to the file system
    // For now, we'll show it to the user and add it to local state
    setPosts(prev => [fullPost, ...prev]);

    // Clear the form
    setNewPost({
      id: '',
      title: '',
      tagline: '',
      content: '',
      tags: []
    });

    toast({
      title: 'Post created',
      description: 'Your blog post has been created successfully'
    });

    // Show the markdown content that would be saved
    const filename = `${fullPost.id}.md`;
    alert(`Post created! In a production environment, this would save the following markdown file to 'client/src/blog/posts/${filename}':\n\n${markdown}\n\nTo make posts permanent, copy this content to a new file in the blog/posts directory.`);
    
    // Copy to clipboard for easy pasting
    navigator.clipboard.writeText(markdown)
      .then(() => {
        toast({
          title: 'Copied to clipboard',
          description: 'Markdown content has been copied to your clipboard'
        });
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  // Function to generate markdown file content
  const generateMarkdownFile = (post: BlogPost) => {
    // Create frontmatter
    const frontmatter = [
      '---',
      `id: ${post.id}`,
      `title: ${post.title}`,
      `tagline: ${post.tagline}`,
      `date: ${post.date}`,
      `author: ${post.author}`,
      'tags:',
      ...post.tags.map(tag => `  - ${tag}`),
      '---',
      '',
    ].join('\n');

    // Combine with content
    return `${frontmatter}${post.content}`;
  };
  
  // Calculate reading time for new post content
  const estimatedReadingTime = newPost.content ? calculateReadingTime(newPost.content) : 0;

  return (
    <>
      <SEO 
        title="Blog Admin | David Stancel" 
        description="Manage blog posts"
      />
      <div className="min-h-screen bg-[#121212] text-white flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-2">Blog Admin</h1>
            <p className="text-white/70 text-center mb-12">Create and manage your blog posts</p>
            
            <Card className="mb-8 bg-[#202020] border-[#3a3a3a]">
              <CardHeader>
                <CardTitle className="text-white">Create New Post</CardTitle>
                <CardDescription className="text-white/70">Fill out the form to create a new blog post</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-white">Title</Label>
                    <Input 
                      id="title" 
                      name="title"
                      value={newPost.title}
                      onChange={handleChange}
                      placeholder="Enter post title"
                      className="bg-[#272727] border-[#3a3a3a] text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="id" className="text-white">URL ID</Label>
                    <Input 
                      id="id" 
                      name="id"
                      value={newPost.id}
                      onChange={handleChange}
                      placeholder="Generated from title"
                      className="bg-[#272727] border-[#3a3a3a] text-white"
                    />
                    <p className="text-xs text-white/50">Will be used in the URL: /blog/[id]</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tagline" className="text-white">Tagline</Label>
                    <Input 
                      id="tagline" 
                      name="tagline"
                      value={newPost.tagline}
                      onChange={handleChange}
                      placeholder="Enter post tagline/subtitle"
                      className="bg-[#272727] border-[#3a3a3a] text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="content" className="text-white">Content</Label>
                      {newPost.content && (
                        <div className="flex items-center text-sm text-white/60">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{formatReadingTime(estimatedReadingTime)}</span>
                        </div>
                      )}
                    </div>
                    <Textarea 
                      id="content" 
                      name="content"
                      value={newPost.content}
                      onChange={handleChange}
                      placeholder="Write your post content here"
                      className="min-h-[200px] bg-[#272727] border-[#3a3a3a] text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tags" className="text-white">Tags</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="tags" 
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        placeholder="Add a tag"
                        className="bg-[#272727] border-[#3a3a3a] text-white"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addTag();
                          }
                        }}
                      />
                      <Button 
                        type="button" 
                        onClick={addTag}
                        className="bg-[#272727] hover:bg-[#333333] border border-[#00FFAA]/30 hover:border-[#00FFAA]"
                      >
                        Add
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {newPost.tags?.map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="bg-[#1a1a1a] text-white/80 border-[#3a3a3a] flex items-center gap-1"
                        >
                          {tag}
                          <X 
                            className="h-3 w-3 cursor-pointer hover:text-[#00FFAA]"
                            onClick={() => removeTag(tag)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#00FFAA] hover:bg-[#00FFAA]/80 text-black font-medium"
                  >
                    Create Post
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Existing Posts</h2>
            <div className="space-y-4">
              {posts.map(post => (
                <Card key={post.id} className="bg-[#272727]/40 border-[#3a3a3a]">
                  <CardHeader>
                    <CardTitle className="text-white">{post.title}</CardTitle>
                    <CardDescription className="text-white/70">{post.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 line-clamp-2">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="bg-[#1a1a1a] text-white/80 border-[#3a3a3a]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center text-sm text-white/60">
                    <div>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })} by {post.author}
                    </div>
                    {post.readingTime && (
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{formatReadingTime(post.readingTime)}</span>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogAdmin;
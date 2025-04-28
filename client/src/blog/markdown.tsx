import React from 'react';

// A simple markdown parser component that converts markdown to JSX
// In a production app, you would use a proper markdown library like react-markdown
export function MarkdownRenderer({ content }: { content: string }) {
  // Split the content into paragraphs
  const paragraphs = content.split('\n\n');
  
  return (
    <div className="markdown-content space-y-6 text-white/90">
      {paragraphs.map((paragraph, index) => {
        // Skip empty paragraphs
        if (paragraph.trim() === '') {
          return null;
        }
        
        // Handle headings (# Heading)
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
              {paragraph.substring(2)}
            </h1>
          );
        }
        
        // Handle secondary headings (## Heading)
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-white mt-6 mb-3">
              {paragraph.substring(3)}
            </h2>
          );
        }
        
        // Handle tertiary headings (### Heading)
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-bold text-white mt-5 mb-2">
              {paragraph.substring(4)}
            </h3>
          );
        }
        
        // Handle lists (- Item)
        if (paragraph.trim().startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
          
          return (
            <ul key={index} className="list-disc list-inside space-y-1 pl-4">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-white/90">
                  {item.substring(2)}
                </li>
              ))}
            </ul>
          );
        }
        
        // Handle numbered lists (1. Item)
        if (/^\d+\.\s/.test(paragraph.trim())) {
          const items = paragraph.split('\n').filter(line => /^\d+\.\s/.test(line.trim()));
          
          return (
            <ol key={index} className="list-decimal list-inside space-y-1 pl-4">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-white/90">
                  {item.replace(/^\d+\.\s/, '')}
                </li>
              ))}
            </ol>
          );
        }
        
        // Handle plain paragraphs
        return (
          <p key={index} className="text-white/90 leading-relaxed">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}
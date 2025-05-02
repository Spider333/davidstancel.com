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
        
        // Handle bold text as headings (**Heading**)
        if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-white mt-6 mb-3">
              {formatText(paragraph.trim().substring(2, paragraph.trim().length - 2))}
            </h2>
          );
        }
        
        // Handle headings (# Heading)
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
              {formatText(paragraph.substring(2))}
            </h1>
          );
        }
        
        // Handle secondary headings (## Heading)
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-white mt-6 mb-3">
              {formatText(paragraph.substring(3))}
            </h2>
          );
        }
        
        // Handle tertiary headings (### Heading)
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-bold text-white mt-5 mb-2">
              {formatText(paragraph.substring(4))}
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
                  {formatText(item.substring(2))}
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
                  {formatText(item.replace(/^\d+\.\s/, ''))}
                </li>
              ))}
            </ol>
          );
        }
        
        // Handle plain paragraphs with formatting for bold and links
        return (
          <p key={index} className="text-white/90 leading-relaxed">
            {formatText(paragraph)}
          </p>
        );
      })}
    </div>
  );
}

// Format text to handle links and bold text
function formatText(text: string): React.ReactNode {
  if (!text) return "";
  
  // First handle links [text](url)
  const parts: React.ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;
  
  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(formatBoldText(text.slice(lastIndex, match.index)));
    }
    
    // Add the link
    const [, linkText, url] = match;
    parts.push(
      <a
        key={`link-${match.index}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00FFAA] hover:underline hover:text-[#00FFAA]/80 font-medium"
      >
        {formatBoldText(linkText)}
      </a>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add any remaining text
  if (lastIndex < text.length) {
    parts.push(formatBoldText(text.slice(lastIndex)));
  }
  
  return parts.length === 0 ? formatBoldText(text) : parts;
}

// Format text to handle bold **text**
function formatBoldText(text: string): React.ReactNode {
  if (!text) return "";
  if (!text.includes('**')) return text;
  
  const parts: React.ReactNode[] = [];
  const boldRegex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;
  
  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold section
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // Add the bold text
    const boldText = match[1];
    parts.push(
      <strong key={`bold-${match.index}`} className="font-bold">
        {boldText}
      </strong>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add any remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length === 0 ? text : parts;
}
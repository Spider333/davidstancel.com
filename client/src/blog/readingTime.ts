/**
 * Calculates the estimated reading time for a given text content.
 * 
 * Average reading speed is around 200-250 words per minute for adults.
 * We'll use 225 words per minute as a middle ground.
 * 
 * @param content The text content to calculate reading time for
 * @returns Reading time in minutes (rounded up to the nearest minute)
 */
export function calculateReadingTime(content: string): number {
  // Remove any markdown formatting to get cleaner text
  const cleanText = content
    .replace(/\#+\s/g, '') // Remove headings
    .replace(/\*\*/g, '')  // Remove bold markers
    .replace(/\*/g, '')    // Remove italic markers
    .replace(/\[\w+\]\(\S+\)/g, '$1') // Replace links with just the text
    .replace(/\!\[\w+\]\(\S+\)/g, '') // Remove images
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .trim();

  // Count words by splitting on whitespace
  const words = cleanText.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  // Calculate reading time in minutes (225 words per minute)
  // Ensure minimum of 1 minute and round up for partial minutes
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 225));
  
  return readingTimeMinutes;
}

/**
 * Formats the reading time into a human-readable string.
 * 
 * @param minutes Reading time in minutes
 * @returns Formatted reading time string (e.g., "2 min read")
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
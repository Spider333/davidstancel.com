export interface BlogPost {
  id: string;
  title: string;
  tagline: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

// Initial blog posts
export const blogPosts: BlogPost[] = [
  {
    id: 'defi-explained',
    title: 'DeFi Explained: The Future of Finance',
    tagline: 'How decentralized finance is reshaping traditional financial systems',
    content: 'Decentralization',
    date: '2024-04-28',
    author: 'David Stancel',
    tags: ['DeFi', 'Blockchain', 'Finance']
  },
  {
    id: 'ethereum-merge',
    title: 'The Ethereum Merge: What You Need to Know',
    tagline: 'Understanding the transition from Proof of Work to Proof of Stake',
    content: 'Evolution',
    date: '2024-04-20',
    author: 'David Stancel',
    tags: ['Ethereum', 'Proof of Stake', 'Blockchain']
  },
  {
    id: 'bitcoin-institutions',
    title: 'Bitcoin and Institutional Adoption',
    tagline: 'How major institutions are embracing cryptocurrency',
    content: 'Adoption',
    date: '2024-04-15',
    author: 'David Stancel',
    tags: ['Bitcoin', 'Institutions', 'Adoption']
  }
];
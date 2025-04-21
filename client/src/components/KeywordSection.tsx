import { ReactNode } from 'react';

interface KeywordSectionProps {
  content: ReactNode;
}

export default function KeywordSection({ content }: KeywordSectionProps) {
  return (
    <div className="py-6 border-t border-[#272727]/30">
      {content}
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeywordSection from './KeywordSection';
import { Keyword } from '@/data/keywords.tsx';

interface KeywordAccordionProps {
  keywords: Keyword[];
}

export default function KeywordAccordion({ keywords }: KeywordAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {keywords.map((keyword) => (
        <div key={keyword.id} className="mb-4">
          <button
            className="w-full text-left p-4 border border-[#272727] hover:border-[#00FFAA]/50 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-[#272727]/30"
            onClick={() => toggleExpand(keyword.id)}
            aria-expanded={expandedId === keyword.id}
            aria-controls={`content-${keyword.id}`}
            id={keyword.id}
          >
            <span className="font-medium">{keyword.title}</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-[#00FFAA]"
              animate={{ rotate: expandedId === keyword.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </motion.svg>
          </button>
          
          <AnimatePresence>
            {expandedId === keyword.id && (
              <motion.div
                id={`content-${keyword.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-1 px-4 overflow-hidden"
              >
                <KeywordSection content={keyword.content} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

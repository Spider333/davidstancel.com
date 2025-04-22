import { Link } from 'wouter';

export default function Header() {
  return (
    <header className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <h1 className="text-xl sm:text-2xl font-semibold flex items-center">
            <span className="text-[#00FFAA] mr-2">~</span>
            <span className="cursor-blink">David Stancel</span>
          </h1>
        </div>
        <div className="hidden sm:flex space-x-6 text-sm">
          <a href="https://coinstory.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFAA] transition-colors text-base font-medium">
            MY BOOK
          </a>
          <a href="https://davidstancel.substack.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFAA] transition-colors text-base font-medium">
            BLOG
          </a>
        </div>
      </div>
    </header>
  );
}

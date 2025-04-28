import { motion } from 'framer-motion';

export default function TerminalBox() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="border border-[#272727] rounded-lg p-4 text-sm font-mono bg-[#1a1a1a] h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 rounded-full bg-[#FF3E00] mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-[#00FFAA] mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-[#2563EB] mr-2"></div>
          <div className="flex-1 pl-2 text-white/60">Terminal</div>
        </div>

        <div className="space-y-5 flex-1">
          <div className="space-y-3">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 leading-relaxed"
            >
              <span className="text-[#00FFAA]/80">Traits:</span> Crypto OG, Tech Lover, Extropist, Investor, <a href="https://a16zcrypto.com/posts/article/crypto-startup-accelerator-csx-fall-2023-new-york-city/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">a16z CSX founder</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white/90 leading-relaxed pt-1"
            >
              <span className="text-[#00FFAA]/80">My Book:</span> <a href="https://coinstory.tech/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Coinstory - The Evolution of Bitcoin and Cryptocurrencies</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-white/90 leading-relaxed pt-1"
            >
              <span className="text-[#00FFAA]/80">Projects:</span> 
              <a href="https://cork.tech" target="_blank" rel="noopener noreferrer" className="ml-2 text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Cork</a>, 
              <a href="https://fumbi.network/en" target="_blank" rel="noopener noreferrer" className="ml-1 text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Fumbi</a>, 
              <a href="https://amagilabs.io/" target="_blank" rel="noopener noreferrer" className="ml-1 text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Amagi Labs</a>
            </motion.div>
          </div>

          <div className="terminal-line mt-auto">
            <span className="text-white/80 animate-pulse">_</span>
          </div>
        </div>
      </div>
      
      {/* Social media buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="flex flex-row space-x-4 justify-center"
      >
        <a 
          href="https://x.com/stancel_david" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#00FFAA] hover:bg-[#00FFAA]/90 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Twitter
        </a>
        <a 
          href="https://www.linkedin.com/in/davidstancel/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#00FFAA] hover:bg-[#00FFAA]/90 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a 
          href="https://davidstancel.substack.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#00FFAA] hover:bg-[#00FFAA]/90 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Substack
        </a>
      </motion.div>
    </div>
  );
}
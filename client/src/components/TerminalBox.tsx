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
              <span className="text-[#00FFAA]/80">Companies:</span>
              <div className="ml-2 mt-1 space-y-1">
                <div>
                  <a href="https://cork.tech" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Cork</a> - Novel DeFi primitive (7M raised)
                </div>
                <div>
                  <a href="https://fumbi.network/en" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Fumbi</a> - Crypto brokerage company (4M raised, 150k users)
                </div>
                <div>
                  <a href="https://amagilabs.io/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Amagi Labs</a> - Bootstrapped Web 3 Consulting Agency
                </div>
              </div>
              

            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-white/90 leading-relaxed pt-1"
            >
              <span className="text-[#00FFAA]/80">NGOs Co-founded:</span>
              <div className="ml-2 mt-1 space-y-1">
                <div>
                  <a href="https://studentsforliberty.org/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Students for Liberty</a> - Educational NGO (Czech Republic)
                </div>
                <div>
                  <a href="https://blockchainslovakia.sk/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Blockchain Slovakia</a> - Crypto education & community
                </div>
                <div>
                  <a href="https://paralelnapolis.sk/en/paralelna-polis/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Paralelna Polis</a> - Crypto, Economics & Technology education
                </div>
              </div>
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
        transition={{ delay: 1.8 }}
        className="flex flex-row space-x-0 justify-between w-full"
      >
        <a 
          href="https://x.com/stancel_david" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-black hover:bg-black/80 text-white border-2 border-[#00FFAA] font-medium py-2 rounded-l-md transition-all duration-200 text-center flex-1 hover:shadow-[0_0_8px_#00FFAA]"
        >
          Twitter
        </a>
        <a 
          href="https://www.linkedin.com/in/davidstancel/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-black hover:bg-black/80 text-white border-t-2 border-b-2 border-x-0 border-[#00FFAA] font-medium py-2 transition-all duration-200 text-center flex-1 hover:shadow-[0_0_8px_#00FFAA]"
        >
          LinkedIn
        </a>
        <a 
          href="https://davidstancel.substack.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-black hover:bg-black/80 text-white border-2 border-[#00FFAA] font-medium py-2 rounded-r-md transition-all duration-200 text-center flex-1 hover:shadow-[0_0_8px_#00FFAA]"
        >
          Substack
        </a>
      </motion.div>
    </div>
  );
}
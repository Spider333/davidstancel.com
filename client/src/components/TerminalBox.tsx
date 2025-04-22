import { motion } from 'framer-motion';

export default function TerminalBox() {
  return (
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
            transition={{ delay: 0.6 }}
            className="text-white/90 leading-relaxed"
          >
            <span className="text-[#00FFAA]/80">Citizen:</span> Slovak 
          </motion.div>
          
          <div className="grid grid-cols-1 gap-2">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/90 leading-relaxed"
            >
              <div className="flex">
                <span className="text-[#00FFAA]/80 w-[6.5rem] inline-block">Resident:</span> 
                <span>Paraguay</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/90 leading-relaxed"
            >
              <div className="flex">
                <span className="text-[#00FFAA]/80 w-[6.5rem] inline-block">E-resident:</span> 
                <span><a href="https://e-resident.gov.ee/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Estonia</a>, <a href="https://rns.id/?rc_by=bjTbykrf" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Palau</a>, <a href="https://www.prospera.co/en" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Prospera</a></span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-white/90 leading-relaxed"
            >
              <div className="flex">
                <span className="text-[#00FFAA]/80 w-[6.5rem] inline-block">Current:</span> 
                <span><a href="https://ns.com" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Network School</a> (Johor-Singapore SEZ)</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/90 leading-relaxed pt-1"
          >
            <span className="text-[#00FFAA]/80">Read:</span> <a href="https://coinstory.tech/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">My book on evolution of Bitcoin and Cryptocurrencies</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/90 leading-relaxed pt-1"
          >
            <span className="text-[#00FFAA]/80">Projects:</span> 
            <span className="ml-2 text-white/70">Cork, Fumbi, Amagi Labs</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-white/90 leading-relaxed pt-1"
          >
            <span className="text-[#00FFAA]/80">Follow me:</span> <a href="https://x.com/stancel_david" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Twitter</a>, <a href="https://www.linkedin.com/in/davidstancel/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">LinkedIn</a>, <a href="https://davidstancel.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Substack</a>
          </motion.div>
        </div>

        <div className="terminal-line mt-auto">
          <span className="text-white/80 animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
}
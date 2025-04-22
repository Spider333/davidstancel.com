import { motion } from 'framer-motion';

export default function TerminalBox() {
  return (
    <div className="border border-[#272727] rounded-lg p-4 text-sm font-mono bg-[#1a1a1a]">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 rounded-full bg-[#FF3E00] mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#00FFAA] mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#2563EB] mr-2"></div>
        <div className="flex-1 pl-2 text-white/60">Terminal</div>
      </div>

      <div className="space-y-4">
        <div className="pl-4 space-y-1">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/90 leading-relaxed"
          >
            <span className="text-[#00FFAA]/80">Traits:</span> Crypto OG, Tech Lover, Extropist, Investor, <a href="https://a16zcrypto.com/posts/article/crypto-startup-accelerator-csx-fall-2023-new-york-city/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">a16z CSX founder</a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/90 leading-relaxed"
          >
            <span className="text-[#00FFAA]/80">Citizen:</span> Slovak <span className="text-[#00FFAA]/80">|</span> <span className="text-[#00FFAA]/80">Resident:</span> Paraguay <span className="text-[#00FFAA]/80">|</span> <span className="text-[#00FFAA]/80">E-resident:</span> <a href="https://e-resident.gov.ee/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Estonia</a>, <a href="https://rns.id/?rc_by=bjTbykrf" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Palau</a>, <a href="https://www.prospera.co/en" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Prospera</a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/90 leading-relaxed"
          >
            <span className="text-[#00FFAA]/80">Read:</span> <a href="https://www.martinus.sk/?uItem=746" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">My book on evolution of Bitcoin and cryptocurrencies</a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/90 leading-relaxed"
          >
            <span className="text-[#00FFAA]/80">Follow me:</span> <a href="https://x.com/stancel_david" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Twitter</a>, <a href="https://www.linkedin.com/in/davidstancel/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">LinkedIn</a>, <a href="https://davidstancel.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">Substack</a>
          </motion.div>
        </div>

        <div className="terminal-line">
          <span className="text-white/80 ml-2 animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
}
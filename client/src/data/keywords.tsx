import React, { ReactNode } from 'react';

export interface Keyword {
  id: string;
  title: string;
  content: ReactNode;
}

export const keywords: Keyword[] = [
  {
    id: 'blockchain',
    title: 'entrepreneur',
    content: (
      <div>
        <p className="text-white/90">
          Blockchain technology is the foundation of the decentralized web. I've been involved in blockchain development since 2017, working on various DLT solutions and smart contract implementations.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-[#272727]/40 rounded-lg p-4">
            <h4 className="text-[#00FFAA] font-medium mb-2">Experience</h4>
            <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
              <li>Smart contract development</li>
              <li>Consensus mechanisms</li>
              <li>Web3 integration</li>
            </ul>
          </div>
          <div className="bg-[#272727]/40 rounded-lg p-4">
            <h4 className="text-[#00FFAA] font-medium mb-2">Projects</h4>
            <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
              <li>DeFi protocol design</li>
              <li>NFT marketplace</li>
              <li>Governance systems</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'defi',
    title: 'advisor',
    content: (
      <div>
        <p className="text-white/90 mb-4">
          Decentralized Finance is revolutionizing traditional financial systems. I've been actively researching and developing DeFi protocols since the "DeFi summer" of 2020.
        </p>
        <div className="bg-[#272727]/40 rounded-lg p-4 mt-4">
          <h4 className="text-[#00FFAA] font-medium mb-3">Key DeFi Concepts I Work With</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#272727]/60 rounded p-2 text-sm text-center">AMMs</div>
            <div className="bg-[#272727]/60 rounded p-2 text-sm text-center">Yield Farming</div>
            <div className="bg-[#272727]/60 rounded p-2 text-sm text-center">Lending Protocols</div>
            <div className="bg-[#272727]/60 rounded p-2 text-sm text-center">Liquidity Pools</div>
            <div className="bg-[#272727]/60 rounded p-2 text-sm text-center">Stablecoins</div>
            <div className="bg-[#272727]/60 rounded p-2 text-sm text-center">Synthetics</div>
          </div>
        </div>
        <blockquote className="border-l-2 border-[#00FFAA] pl-4 mt-6 text-white/70 italic">
          "The future of finance is permissionless, trustless, and open to all."
        </blockquote>
      </div>
    )
  },
  {
    id: 'web3',
    title: 'speaker',
    content: (
      <div>
        <p className="text-white/90 mb-6">
          Web3 represents the next evolution of the internet—a decentralized web where users control their data and digital assets. My focus is on building intuitive interfaces for web3 applications that bridge the gap between blockchain technology and mainstream users.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#272727] border border-[#00FFAA]/20 rounded-lg overflow-hidden">
            <div className="p-4">
              <h4 className="text-[#00FFAA] font-medium mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                dApps
              </h4>
              <p className="text-sm text-white/80">
                Building decentralized applications with seamless UX/UI
              </p>
            </div>
          </div>
          <div className="bg-[#272727] border border-[#00FFAA]/20 rounded-lg overflow-hidden">
            <div className="p-4">
              <h4 className="text-[#00FFAA] font-medium mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Security
              </h4>
              <p className="text-sm text-white/80">
                Implementing robust security measures for blockchain apps
              </p>
            </div>
          </div>
          <div className="bg-[#272727] border border-[#00FFAA]/20 rounded-lg overflow-hidden">
            <div className="p-4">
              <h4 className="text-[#00FFAA] font-medium mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                DAOs
              </h4>
              <p className="text-sm text-white/80">
                Creating and participating in decentralized autonomous organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'nfts',
    title: 'educator',
    content: (
      <div>
        <p className="text-white/90 mb-4">
          Non-Fungible Tokens represent the intersection of blockchain technology and digital ownership. I've been exploring the innovative applications of NFTs beyond digital art.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="text-[#00FFAA] font-medium mb-3">Beyond PFPs</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#00FFAA] mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Digital identity and reputation systems
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#00FFAA] mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Real-world asset tokenization
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#00FFAA] mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Gaming and metaverse applications
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#00FFAA] mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Membership and access tokens
              </li>
            </ul>
          </div>
          <div className="bg-[#272727]/30 p-5 rounded-lg relative overflow-hidden">
            <div className="text-sm text-white/70 mb-1">gm.sol</div>
            <div className="font-mono text-xs bg-[#272727] p-3 rounded overflow-x-auto">
              <pre><code>{"// SPDX-License-Identifier: MIT\nfunction mint(address to) public {\n   require(eligibleToMint[to], \"Not eligible\");\n   uint256 tokenId = _nextTokenId++;\n   _safeMint(to, tokenId);\n   eligibleToMint[to] = false;\n}"}</code></pre>
            </div>
            <p className="mt-3 text-sm text-white/80 italic">A snippet from one of my NFT smart contracts</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'innovation',
    title: 'student',
    content: (
      <div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <p className="text-white/90 mb-4">
              Innovation at the intersection of technology and finance drives my work. I'm constantly exploring new frameworks, protocols, and approaches to solve complex problems in the crypto space.
            </p>
            <p className="text-white/80 mb-4">
              My approach combines technical expertise with creative thinking to push the boundaries of what's possible in decentralized systems.
            </p>
            <h4 className="text-[#00FFAA] font-medium mt-6 mb-3">Current Areas of Research</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#2563EB] mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Zero-knowledge proofs and privacy
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#2563EB] mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Cross-chain interoperability
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#2563EB] mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Layer 2 scaling solutions
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex flex-col justify-center">
            <div className="bg-[#272727]/50 rounded-lg p-5 border border-[#272727] text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mx-auto text-[#00FFAA] mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <div className="font-medium mb-2">Innovation Philosophy</div>
              <p className="text-sm text-white/70">
                "The most exciting innovations happen at the boundaries between disciplines."
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'about',
    title: 'about',
    content: (
      <div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-xl overflow-hidden bg-[#272727]/40 mb-4 flex items-center justify-center">
              <div className="text-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-24 h-24 mx-auto text-[#272727]/70">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p className="text-sm mt-4 text-white/60">profile_image.png</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-[#272727]/40 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-[#00FFAA] mb-2">Location</h4>
                <p className="text-sm text-white/80 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-white/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Digital Nomad
                </p>
              </div>
              <div className="bg-[#272727]/40 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-[#00FFAA] mb-2">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#272727]/80 px-2 py-1 rounded">Solidity</span>
                  <span className="text-xs bg-[#272727]/80 px-2 py-1 rounded">JavaScript</span>
                  <span className="text-xs bg-[#272727]/80 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-[#272727]/80 px-2 py-1 rounded">Web3.js</span>
                  <span className="text-xs bg-[#272727]/80 px-2 py-1 rounded">Python</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold text-[#00FFAA] mb-4">Who I Am</h3>
            <p className="text-white/90 mb-4">
              I'm a blockchain developer and crypto enthusiast passionate about building the infrastructure for a more open, transparent, and decentralized future.
            </p>
            <p className="text-white/80 mb-6">
              With experience across various blockchain ecosystems including Ethereum, Solana, and Polkadot, I've contributed to projects ranging from DeFi protocols to NFT platforms and DAO governance systems.
            </p>
            
            <h4 className="text-lg font-medium text-[#00FFAA] mb-3">Background</h4>
            <p className="text-white/80 mb-6">
              My journey into blockchain began in 2017 during the ICO boom. Since then, I've weathered multiple market cycles while continuing to build and improve my technical skills. I believe that regardless of market conditions, the underlying technology continues to advance and create new possibilities.
            </p>
            
            <h4 className="text-lg font-medium text-[#00FFAA] mb-3">Values</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="border border-[#272727] p-3 rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                  </svg>
                  Open Source
                </h5>
                <p className="text-sm text-white/80">
                  I believe in the power of open collaboration and contribute to open source projects whenever possible.
                </p>
              </div>
              <div className="border border-[#272727] p-3 rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  Continuous Learning
                </h5>
                <p className="text-sm text-white/80">
                  The blockchain space evolves rapidly. I dedicate time each week to learning new technologies and concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'contact',
    title: 'contact',
    content: (
      <div>
        <p className="text-white/90 mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#272727]/30 rounded-lg p-6">
            <h4 className="text-[#00FFAA] font-medium mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-sm text-white/80 font-mono">Email:</span>
                <a href="mailto:youremail@example.com" className="ml-3 text-[#00FFAA] hover:underline">youremail@example.com</a>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-white/80 font-mono">Twitter:</span>
                <a href="https://twitter.com/yourusername" className="ml-3 text-[#00FFAA] hover:underline">@yourusername</a>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-white/80 font-mono">GitHub:</span>
                <a href="https://github.com/yourusername" className="ml-3 text-[#00FFAA] hover:underline">github.com/yourusername</a>
              </div>
            </div>
          </div>
          
          <div className="bg-[#272727]/30 rounded-lg p-6">
            <h4 className="text-[#00FFAA] font-medium mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              Public Key
            </h4>
            <div className="bg-[#272727] p-3 rounded-lg font-mono text-xs overflow-x-auto">
              <code className="text-white/70">
                0x71C7656EC7ab88b098defB751B7401B5f6d8976F
              </code>
            </div>
            <p className="text-sm text-white/60 mt-3">Ethereum (ERC-20) address for tokens or NFTs</p>
          </div>
        </div>
        
        <div className="mt-8 p-5 bg-[#272727]/40 rounded-lg border border-[#272727] text-center">
          <p className="text-white/80">
            Whether you have a question about a specific blockchain technology or just want to say hello, 
            I'll try my best to get back to you!
          </p>
        </div>
      </div>
    )
  }
];
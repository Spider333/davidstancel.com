import React, { ReactNode } from 'react';

export interface Keyword {
  id: string;
  title: string;
  content: ReactNode;
}

export const keywords: Keyword[] = [
  {
    id: 'story',
    title: 'my story',
    content: (
      <div className="space-y-6">
        <p className="text-white/90">
          I started to research Bitcoin and cryptocurrencies in 2012 and I organized my first Bitcoin event in early 2013 at my Alma mater at <a href="https://muni.cz/en" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Masaryk University</a> in Czechia. Shortly after that I started to write my bachelor thesis which was dedicated to use of BTC and ETH, and I have been falling down the rabbit hole ever since while dedicating my life to studying, teaching, and building the cryptocurrency space.
        </p>
        
        <p className="text-white/90">
          In the last decade I have organized and talked on 100+ meetups, lectures & conferences, while continuing my research during my <a href="https://www.unic.ac.cy/blockchain/msc-digital-currency/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Master of Science in Digital Currencies</a> at the University of Nicosia in Cyprus, and lately also my PhD at <a href="https://www.pantheonsorbonne.fr/en" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Sorbonne Law School</a> in Paris. In 2019 I started to teach the first full semester long cryptocurrency university course, which continues to be taught at the <a href="https://www.stuba.sk/en.html?page_id=132" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Slovak University of Technology</a>.
        </p>
        
        <p className="text-white/90">
          I cofounded multiple educational NGOs such as <a href="https://studentsforliberty.org/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Students for Liberty</a> (CZ), <a href="https://blockchainslovakia.sk/en/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Blockchain Slovakia</a>, and <a href="https://paralelnapolis.sk/en/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Paralelna Polis</a> that provided education in the area of Crypto, Economics, & Technology.
        </p>
        
        <p className="text-white/90">
          While advising to many startups, enterprises, funds and even government institutions in the area of cryptocurrencies, I have cofounded some companies myself. The last few years I served as CTO and Board Member at Cryptocurrency brokerage company <a href="https://fumbi.network/en" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Fumbi</a>.
        </p>
        
        <p className="text-white/90">
          My many years long research was compressed into my book focused on the history and evolution of Bitcoin and Cryptocurrencies — <a href="https://www.martinus.sk/?uItem=746" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Coinstory</a>, which got published in 2022.
        </p>
        
        <p className="text-white/90">
          Lately my focus is on building <a href="https://www.cork.tech/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Cork Protocol</a> that got accelerated by <a href="https://a16zcrypto.com/posts/article/crypto-startup-accelerator-csx-fall-2023-new-york-city/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">a16z crypto CSX</a>.
        </p>
      </div>
    )
  },
  {
    id: 'blockchain',
    title: 'entrepreneur',
    content: (
      <div>
        <p className="text-white/90 mb-6">
          My first company was in NFTs, and an utter failure. The other three went quite better.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <a href="https://fumbi.network/en" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Fumbi
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="text-xs text-white/70 mt-2">Crypto brokerage firm, raised <span className="text-[#00FFAA]">4+M</span>, <span className="text-[#00FFAA]">150k</span> users, Superbrand Award</p>
          </div>

          <div className="text-center">
            <a href="https://cork.tech" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Cork
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="text-xs text-white/70 mt-2">Novel financial DeFi primitive, raised <span className="text-[#00FFAA]">7M</span>, incl. <span className="text-[#00FFAA]">a16z</span></p>
          </div>

          <div className="text-center">
            <a href="https://amagilabs.io/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Amagi Labs
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="text-xs text-white/70 mt-2">Web 3 consulting agency</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <div className="space-y-4">
              <div className="bg-[#272727]/30 p-4 rounded-lg">
                <a href="https://nbs.sk/en/" target="_blank" rel="noopener noreferrer" className="mb-3 px-3 py-1.5 bg-[#272727]/60 rounded text-sm inline-flex items-center hover:bg-[#272727] transition-colors">
                  Slovak National Bank
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <p className="text-sm text-white/70 mt-2 pl-2">Central Bank</p>
              </div>

              <div className="bg-[#272727]/30 p-4 rounded-lg">
                <a href="https://www.pwc.com/" target="_blank" rel="noopener noreferrer" className="mb-3 px-3 py-1.5 bg-[#272727]/60 rounded text-sm inline-flex items-center hover:bg-[#272727] transition-colors">
                  PwC
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <p className="text-sm text-white/70 mt-2 pl-2">Big 4 Accounting & Audit Company</p>
              </div>

              <div className="bg-[#272727]/30 p-4 rounded-lg">
                <a href="https://vacuumlabs.com/" target="_blank" rel="noopener noreferrer" className="mb-3 px-3 py-1.5 bg-[#272727]/60 rounded text-sm inline-flex items-center hover:bg-[#272727] transition-colors">
                  Vacuumlabs
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <p className="text-sm text-white/70 mt-2 pl-2">Software house</p>
              </div>

            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div className="bg-[#272727]/30 p-4 rounded-lg">
                <a href="https://aarocapital.com/" target="_blank" rel="noopener noreferrer" className="mb-3 px-3 py-1.5 bg-[#272727]/60 rounded text-sm inline-flex items-center hover:bg-[#272727] transition-colors">
                  Aaro Capital
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <p className="text-sm text-white/70 mt-2 pl-2">Investment Fund</p>
              </div>

              <div className="bg-[#272727]/30 p-4 rounded-lg">
                <a href="https://www.novis.eu/en/" target="_blank" rel="noopener noreferrer" className="mb-3 px-3 py-1.5 bg-[#272727]/60 rounded text-sm inline-flex items-center hover:bg-[#272727] transition-colors">
                  Novis
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <p className="text-sm text-white/70 mt-2 pl-2">Insurance Company</p>
              </div>

              <div className="bg-[#272727]/30 p-4 rounded-lg">
                <span className="mb-3 px-3 py-1.5 bg-[#272727]/60 rounded text-sm text-white/50">
                  Eterbase
                </span>
                <p className="text-sm text-white/70 mt-2 pl-2">Crypto Exchange</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1f2e] p-6 rounded-lg border border-[#2a3042]">
          <h4 className="text-[#00FFAA] font-medium mb-5 text-center text-xl">Focus Areas</h4>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-[#272727]/80 rounded-md text-sm font-medium">Blockchain Integration</span>
            <span className="px-4 py-2 bg-[#272727]/80 rounded-md text-sm font-medium">Digital Assets</span>
            <span className="px-4 py-2 bg-[#272727]/80 rounded-md text-sm font-medium">Tokenization</span>
            <span className="px-4 py-2 bg-[#272727]/80 rounded-md text-sm font-medium">DeFi Solutions</span>
            <span className="px-4 py-2 bg-[#272727]/80 rounded-md text-sm font-medium">Tech Strategy</span>
            <span className="px-4 py-2 bg-[#272727]/80 rounded-md text-sm font-medium">Risk Assessment</span>
            <span className="px-4 py-2 bg-[#272727]/80 rounded-md text-sm font-medium">Market Entry</span>
            <span className="px-4 py-2 bg-[#272727]/80 rounded-md text-sm font-medium">Due Diligence</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'web3',
    title: 'speaker and moderator',
    content: (
      <div>
        <p className="text-white/90 mb-6">
          As an experienced speaker and event moderator, I've delivered talks and moderated panels at major conferences, universities and institutions across Europe. My topics focus on Bitcoin, Ethereum, DeFi, and the intersection of technology and economy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#272727]/40 p-5 rounded-lg">
            <h4 className="text-[#00FFAA] font-medium mb-4 border-b border-[#444444] pb-2">Interviews</h4>
            <div className="space-y-3">
              <a href="https://www.youtube.com/watch?time_continue=2&v=iCg-hzeYeqw&embeds_referring_euri=https%3A%2F%2Fwww.stanceldavid.sk%2F" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                StartitUP Interview
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://www.youtube.com/watch?v=3_asuwivJR0" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                Documentary Movie Libertas
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://www.forbes.sk/ako-kryptomeny-menia-nas-svet-na-otazku-odpoveda-kryptomenovy-odbornik-david-stancel/" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                FORBES
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://e.dennikn.sk/2340777/neverim-ze-bitcoin-je-pyramida-kto-to-hovori-nevie-ako-funguje-mysli-si-david-stancel/" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                Dennik N Interview
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://www.ta3.com/relacia/24972/za-energeticku-krizu-si-moze-zapad-sam-digitalne-peniaze-a-kryptomeny-bitcoin-zazil-najhorsi-mesiac-v-historii" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                TA3 TV Interview 1
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://www.ta3.com/relacia/23784/zaujem-o-kryptomeny-stupa-rusko-chce-za-ropu-a-plyn-bitcoiny" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                TA3 Interview 2
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-[#272727]/40 p-5 rounded-lg">
            <h4 className="text-[#00FFAA] font-medium mb-4 border-b border-[#444444] pb-2">Talks</h4>
            <div className="space-y-3">
              <a href="https://www.futureport.sk/" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                FuturePort - Evolution of Cryptocurrencies
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://www.youtube.com/watch?v=oT9GZbqR7K4" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                UTXO Conference Talk
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://blockwalks.com/" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                Blockwalks Conference Talk
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://vimeo.com/showcase/futureportyouth2021" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                Future of Money
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-[#272727]/40 p-5 rounded-lg">
            <h4 className="text-[#00FFAA] font-medium mb-4 border-b border-[#444444] pb-2">Discussions</h4>
            <div className="space-y-3">
              <a href="https://www.youtube.com/watch?v=Yrdp18Sy1bc" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                Blockwalks Discussion with Nick Szabo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://www.youtube.com/watch?v=6kQ0x-wFcs4&t=11s" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                UTXO Panel Discussion
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a href="https://podcasty.hn.cz/c1-67088450-digicash-bitgold-nebo-hashcash-vite-co-bylo-pred-bitcoinem-a-proc-je-tak-unikatni" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-3 rounded-md text-sm flex items-center justify-between">
                HN Podcast - Bitcoin History
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-[#00FFAA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-[#27272727]/40 p-5 rounded-lg">
            <h4 className="text-[#00FFAA] font-medium mb-4 border-b border-[#444444] pb-2">Conferences:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    InvestSummit (2022)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    UTXO (2022)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Readycon (2021/2022)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    WeAreDevelopers (2021)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Aeternity Universe (2019)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    FuturePort Prague (2019/2021)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    IXPO (2019)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    IBM Perspective (2019)
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Globsec (2018)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Blockwalks (2018,2019)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    FutureNow Conf (2018)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    XIXOIO Conference (2018)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Cybercentral (2018, 2019)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Softecon (2018)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Hackers Congress (2016,2017)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    LibertyCon (2017)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#272727]/40 p-5 rounded-lg">
            <h4 className="text-[#00FFAA] font-medium mb-4 border-b border-[#444444] pb-2">Universities:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Charles University (CZ)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Masaryk University (CZ)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Slovak University of Technology (SK)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Comenius University (SK)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    University of Economics (SK)
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Matej Bel University (SK)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    University of Zilina (SK)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Universidad Rey Juan Carlos (ES)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    St. Petersburg University (RU)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#272727]/40 p-5 rounded-lg">
            <h4 className="text-[#00FFAA] font-medium mb-4 border-b border-[#444444] pb-2">Institutions:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    European Parliament
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Slovak National Bank
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Government of the Czech Republic
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Ministry of Finance (SK)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    Slovak Banking Association
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    IBM
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    ČSOB
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    KPMG, PwC, BDO, EY
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAA] mr-2">•</span>
                    O2 Slovakia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>



      </div>
    )
  },
  {
    id: 'books',
    title: 'writer',
    content: (
      <div>
        <p className="text-white/90 mb-6">
          I dedicated few years of my life to map out the Evolution of Bitcoin and crypto in my book - <a href="https://coinstory.tech/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] hover:underline">Coinstory</a>.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="text-center">
            <a href="https://coinstory.tech/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Coin Story
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="text-xs text-white/70 mt-2">The Evolution of Bitcoin and Crypto</p>
          </div>

          <div className="text-center">
            <a href="https://standard.sk/author/david-stancel" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Standard
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="text-xs text-white/70 mt-2">Regular Contributor to Slovak Economic Newspaper</p>
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
        <div className="mt-6 mb-8">
          <h4 className="text-[#00FFAA] font-medium mb-4">Universities</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-white font-medium">Slovak University of Technology</h5>
                <div className="space-x-4 mt-2">
                  <a href="https://github.com/Spider333/Cryptocourse" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#00FFAA]">Course Syllabus</a>
                  <a href="https://www.youtube.com/watch?v=OQJsV2-8-AU&list=PLWi7l1-iODyGYcbkljDlpW8tNvR2_j56Q" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#00FFAA]">Lecture Recordings</a>
                </div>
              </div>
              <a href="https://www.stuba.sk/english.html?page_id=132" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-white font-medium">University of Economics</h5>
              </div>
              <a href="https://euba.sk/en/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-[#00FFAA] font-medium mb-5">Courses</h4>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-4 bg-[#272727]/30 rounded-lg">
              <div className="mb-3">
                <span className="text-white font-medium">Original Courses (in Slovak)</span>
              </div>
              <div className="grid grid-cols-1 gap-2 mt-3">
                <a href="https://skillmea.sk/online-kurzy/ethereum-defi-nft-a-metaverse" target="_blank" rel="noopener noreferrer" className="bg-[#272727]/60 px-3 py-2 rounded-md text-sm flex items-center justify-between">
                  Ethereum, DeFi, NFT & Metaverse
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <a href="https://skillmea.sk/online-kurzy/uvod-do-kryptomien" target="_blank" rel="noopener noreferrer" className="bg-[#272727]/60 px-3 py-2 rounded-md text-sm flex items-center justify-between">
                  Introduction to Cryptocurrencies
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#272727]/30 rounded-lg">
              <div className="mb-3">
                <span className="text-[#00FFAA] font-medium">Professional Seminars</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                <a href="https://nbs.sk/en/" target="_blank" rel="noopener noreferrer" className="bg-[#272727]/60 px-3 py-2 rounded-md text-sm flex items-center justify-between">
                  Slovak National Bank
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <a href="https://minitechmba.org/" target="_blank" rel="noopener noreferrer" className="bg-[#272727]/60 px-3 py-2 rounded-md text-sm flex items-center justify-between">
                  Minitech MBA
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <a href="https://www.o2.sk/en" target="_blank" rel="noopener noreferrer" className="bg-[#272727]/60 px-3 py-2 rounded-md text-sm flex items-center justify-between">
                  O2
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <a href="https://www.csob.sk/en" target="_blank" rel="noopener noreferrer" className="bg-[#272727]/60 px-3 py-2 rounded-md text-sm flex items-center justify-between">
                  ČSOB
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
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
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">Masaryk University (Czech Republic)</h4>
              <p className="text-sm text-white/70">Bc. in International Affairs & Economic Policy</p>
            </div>
            <a href="https://www.muni.cz/en" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">University of Nicosia (Cyprus)</h4>
              <p className="text-sm text-white/70">MSc. in Digital Currencies</p>
            </div>
            <a href="https://www.unic.ac.cy/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">Sorbonne Law School (France)</h4>
              <p className="text-sm text-white/70">PhD. in International Law (in progress)</p>
            </div>
            <a href="https://www.u-paris2.fr/en" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ngo',
    title: 'NGO founder',
    content: (
      <div>
        <p className="text-white/90 mb-6">
          I cofounded multiple educational NGOs such as Students for Liberty (Czech Republic), Blockchain Slovakia, and Paralelna Polis that provided education in the area of Crypto, Economics, & Technology.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <a href="https://studentsforliberty.org/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Students for Liberty
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <div className="text-center">
            <a href="https://blockchainslovakia.sk/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Blockchain Slovakia
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <div className="text-center">
            <a href="https://paralelnapolis.sk/en/paralelna-polis/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Paralelna Polis
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'member',
    title: 'member',
    content: (
      <div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">Kernel Fellowship</h4>
              <p className="text-sm text-white/70">An educational community exploring the relationship between the human spirit and technology</p>
            </div>
            <a href="https://www.kernel.community/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">Global Shapers</h4>
              <p className="text-sm text-white/70">A network of young people driving dialogue, action and change</p>
            </div>
            <a href="https://www.globalshapers.org/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">SingularityU BA</h4>
              <p className="text-sm text-white/70">International NGO focused on exponential technologies education</p>
            </div>
            <a href="https://su.org/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">E-Residency</h4>
              <p className="text-sm text-white/70">Estonian, Palau, and Prospera residency programs</p>
            </div>
            <div>
              <a href="https://rns.id/?rc_by=bjTbykrf" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA]">Palau</a>
              <a href="https://e-resident.gov.ee/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] ml-2">Estonia</a>
              <a href="https://www.prospera.co/en" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] ml-2">Prospera</a>
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
        <div className="bg-[#272727]/30 rounded-lg p-6 max-w-xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <span className="text-sm text-white/80 font-mono">Twitter:</span>
                <a href="https://x.com/stancel_david" className="ml-3 text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">@stancel_david</a>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-white/80 font-mono">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/davidstancel/" className="ml-3 text-white decoration-[#00FFAA] underline decoration-1 hover:decoration-2">davidstancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];
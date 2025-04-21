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
        <p className="text-white/90 mb-6">
          My first company was in NFTs, and an utter failure. The other two went quite better.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center">
            <a href="https://fumbi.network/en" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Fumbi
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="text-xs text-white/70 mt-2">Crypto brokerage firm, raised 4+M, 150k users, Superbrand Award</p>
          </div>

          <div className="text-center">
            <a href="https://cork.tech" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00FFAA]">
              Cork
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 inline-block text-[#00FFAA]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="text-xs text-white/70 mt-2">Novel financial DeFi primitive, raised 7M, incl. a16Z</p>
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

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#272727]/30 p-4 rounded-lg">
                  <span className="mb-3 px-3 py-1.5 bg-[#272727]/60 rounded text-sm text-white/50">
                    Eterbase
                  </span>
                  <p className="text-sm text-white/70 mt-2 pl-2">Crypto Exchange</p>
                </div>

                <div className="bg-[#272727]/30 p-4 rounded-lg">
                  <span className="mb-3 px-3 py-1.5 bg-[#272727]/60 rounded text-sm text-white/50">
                    Bethereum
                  </span>
                  <p className="text-sm text-white/70 mt-2 pl-2">Smart Contract Betting Platform</p>
                </div>
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
    title: 'speaker',
    content: (
      <div>
        <p className="text-white/90 mb-6">
          As an experienced speaker, I've delivered talks and presentations at major conferences, universities and institutions across Europe. My topics focus on Bitcoin, Ethereum, DeFi, and the intersection of technology and economy.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
          <div className="bg-[#272727]/40 p-5 rounded-lg">
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

        <div className="mt-6 p-4 bg-[#272727]/50 rounded-lg">
          <h4 className="text-[#00FFAA] font-medium mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            Speaking Topics
          </h4>
          <p className="text-sm text-white/80">
            My presentations focus on Bitcoin, Ethereum, DeFi innovations, and the intersection of technology and economy. I customize each talk to the specific audience, offering both high-level strategic insights and technical deep dives when appropriate.
          </p>
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
                <a href="https://minitechmba.com/" target="_blank" rel="noopener noreferrer" className="bg-[#272727]/60 px-3 py-2 rounded-md text-sm flex items-center justify-between">
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
              <h4 className="text-white font-medium">Masaryk University (CZ)</h4>
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
              <h4 className="text-white font-medium">University of Nicosia (CY)</h4>
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
              <h4 className="text-white font-medium">Pantheon-Assas Paris II (FR)</h4>
              <p className="text-sm text-white/70">PhD. in Law (in progress)</p>
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
          I cofounded multiple educational NGOs such as Students for Liberty (CZ), Blockchain Slovakia, and Paralelna Polis that provided education in the area of Crypto, Economics, & Technology.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1f2e] rounded-lg overflow-hidden border border-[#2a3042]">
            <div className="p-5">
              <div className="h-12 flex items-center justify-center mb-3">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4"/>
                  <path d="M30 50L45 65L70 35" stroke="white" strokeWidth="4" fill="none"/>
                </svg>
              </div>
              <h5 className="text-center text-white font-medium text-lg mb-3">Kernel Fellowship</h5>
              <p className="text-white/80 text-sm">
                An educational community exploring the relationship between the human spirit and technology. Building a better web, together.
              </p>
              <div className="mt-4 flex justify-end">
                <a href="https://www.kernel.community/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] text-sm flex items-center hover:underline">
                  visit 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1f2e] rounded-lg overflow-hidden border border-[#2a3042]">
            <div className="p-5">
              <div className="h-12 flex items-center justify-center mb-3">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="none"/>
                  <path d="M35 50C35 35 65 35 65 50C65 65 35 65 35 50" stroke="white" strokeWidth="4" fill="none"/>
                </svg>
              </div>
              <h5 className="text-center text-white font-medium text-lg mb-3">Global Shapers</h5>
              <p className="text-white/80 text-sm">
                The Global Shapers Community is a network of young people driving dialogue, action and change.
              </p>
              <div className="mt-4 flex justify-end">
                <a href="https://www.globalshapers.org/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] text-sm flex items-center hover:underline">
                  visit 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1f2e] rounded-lg overflow-hidden border border-[#2a3042]">
            <div className="p-5">
              <div className="h-12 flex items-center justify-center mb-3">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" strokeDasharray="4 2" fill="none"/>
                  <circle cx="35" cy="45" r="5" fill="white"/>
                  <circle cx="50" cy="35" r="5" fill="white"/>
                  <circle cx="65" cy="45" r="5" fill="white"/>
                  <circle cx="55" cy="60" r="5" fill="white"/>
                  <circle cx="40" cy="65" r="5" fill="white"/>
                </svg>
              </div>
              <h5 className="text-center text-white font-medium text-lg mb-3">SingularityU BA</h5>
              <p className="text-white/80 text-sm">
                International NGO focused on education and awareness in the area of exponential technologies.
              </p>
              <div className="mt-4 flex justify-end">
                <a href="https://su.org/" target="_blank" rel="noopener noreferrer" className="text-[#00FFAA] text-sm flex items-center hover:underline">
                  visit 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-[#272727]/50 rounded-lg">
          <h4 className="text-[#00FFAA] font-medium mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            My Role
          </h4>
          <p className="text-sm text-white/80">
            In these organizations, I serve as an advisor, contributor, and sometimes speaker. I help bridge the gap between technical innovation and practical implementation, while advocating for education and ethical approaches to emerging technologies.
          </p>
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
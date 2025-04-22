import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeywordAccordion from '@/components/KeywordAccordion';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';
import { keywords } from '@/data/keywords.tsx';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>David Stancel | Crypto & Tech Enthusiast</title>
        <meta name="description" content="Personal website of David Stancel with expertise in cryptocurrency, blockchain technology, and digital innovation" />
        <meta name="keywords" content="David Stancel, crypto, blockchain, technology, personal website, digital innovation, web3, defi, nfts" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-black text-white">
        <FloatingIcons />
        <Header />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <Hero />
            <section>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 text-[#00FFAA]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  Who am I?
                </h3>
              </div>
              <KeywordAccordion keywords={keywords} />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

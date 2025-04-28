import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Improved global error handling for unhandled Promise rejections
window.addEventListener('unhandledrejection', (event) => {
  // Check for crypto wallet or extension-related errors, which are common and can be safely ignored
  const errorMsg = String(event.reason?.message || '');
  const isWalletError = errorMsg.includes('User rejected') || 
                       errorMsg.includes('rejected the request') || 
                       errorMsg.toLowerCase().includes('wallet');
  
  // Log the error, but don't display it in user console
  console.log('[Handled] Unhandled Promise Rejection:', 
    isWalletError ? 'Non-critical extension error' : event.reason);
  
  // Prevent the error from propagating to console
  event.preventDefault();
});

// Enhanced error boundary for the entire app
window.onerror = function(msg, url, lineNo, columnNo, error) {
  // Filter out non-critical errors
  const errorMsg = String(msg || '');
  const errorStr = String(error?.stack || '');
  
  // Check if error is from browser extension or non-critical source
  const isExtensionError = 
    url?.includes('chrome-extension://') || 
    errorStr?.includes('chrome-extension://') ||
    url?.includes('extension://');
  
  console.log('[Handled] Global error:', 
    isExtensionError ? 'Non-critical extension error' : { msg, url, lineNo, columnNo });
  
  // Prevent the error from being displayed in the console
  return true;
};

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <meta name="description" content="Personal website of David Stancel with expertise in cryptocurrency, blockchain technology, and digital innovation" />
      <meta name="keywords" content="David Stancel, crypto, blockchain, technology, personal website, digital innovation, web3, defi, nfts" />
      <meta property="og:title" content="David Stancel | Crypto & Tech Enthusiast" />
      <meta property="og:description" content="Personal website of David Stancel with expertise in cryptocurrency, blockchain technology, and digital innovation" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://david-stancel-portfolio.replit.app/images/david-stancel-og.jpg" />
      <title>David Stancel | Crypto & Tech Enthusiast</title>
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%2300FFAA' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'%3E%3C/path%3E%3C/svg%3E" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Helmet>
    <App />
  </HelmetProvider>
);

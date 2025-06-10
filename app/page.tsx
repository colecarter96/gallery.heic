"use client";

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Load the script only on the client side to avoid hydration issues
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          gallery.heic
        </h1>
      </header>

      {/* Instagram Gallery */}
      <main className="container mx-auto px-4">
        {/* Use the protocol-relative URL to let browser decide HTTP/HTTPS */}
        <iframe 
          src="//lightwidget.com/widgets/1860ccc65c1550b69680b9c741e7cfc0.html" 
          scrolling="no" 
          className="lightwidget-widget w-full border-0"
          style={{
            width: '100%',
            height: '800px',
            border: 0,
            overflow: 'hidden'
          }}
        />
      </main>
    </div>
  );
}

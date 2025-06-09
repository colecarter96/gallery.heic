"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load the lightwidget script
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
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
        {scriptLoaded && (
          <iframe 
            src="//lightwidget.com/widgets/1860ccc65c1550b69680b9c741e7cfc0.html" 
            scrolling="no" 
            className="lightwidget-widget w-full border-0 overflow-hidden"
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden'
            }}
          />
        )}
      </main>
    </div>
  );
}

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const widgetId = searchParams.get('id') || '1860ccc65c1550b69680b9c741e7cfc0';
  
  try {
    // Fetch the widget content from lightwidget using HTTP
    const url = `http://lightwidget.com/widgets/${widgetId}.html`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ProxyBot/1.0)',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const content = await response.text();
    
    // Return the content with proper headers
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        'X-Content-Type-Options': 'nosniff',
        // Remove X-Frame-Options to allow iframe embedding
        // 'X-Frame-Options': 'SAMEORIGIN',
      },
    });
  } catch (error) {
    console.error('Proxy error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new NextResponse(`Failed to fetch widget content: ${errorMessage}`, { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
} 
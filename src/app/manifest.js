export default function manifest() {
    return {
      name: 'Acquaint',
      short_name: 'Acquaint',
      description: 'Acquaint',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
        {src:"/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},
        {src:"/android-chrome-512x512.png",sizes:"512x512",type:"image/png"},
      ],
    }
  }
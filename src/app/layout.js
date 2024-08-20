import { SessionProvider } from 'next-auth/react';
import "./globals.css";



export const metadata = {
  title: "Acquaint",
  description: "Make yourself acquainted",
  favicon: "/favicon.ico",
  appleIcon: "/apple-touch-icon.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/> 
      </head>
      <body >{children}</body>
    </html>
  );
}

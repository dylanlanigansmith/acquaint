import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Acquaint",
  description: "Make yourself acquainted",
  favicon: "/favicon.ico",
  appleIcon: "/apple-touch-icon.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head> <link rel="stylesheet" type="text/css"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

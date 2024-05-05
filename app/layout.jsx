import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="m-0 p-0">{children}</body>
  </html>
    
    
  );
}

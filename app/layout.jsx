import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="mx-12 lg:mx-24">{children}</body>
  </html>
    
    
  );
}

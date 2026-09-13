import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import PwaRegistrar from "./components/PwaRegistrar";
import Butterflies from "./components/Butterflies";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogs by Abhi",
  description: "Exploring ideas, code, and creativity.",
  manifest: "/manifest.webmanifest",
  applicationName: "Blogs by Abhi",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Blogs by Abhi",
  },
  icons: {
    apple: "/blogs-pwa-icon.png",
    icon: [
      { url: "/blogs-pwa-icon.png", sizes: "1024x1024", type: "image/png" },
    ],
  },
};

export const viewport = {
  themeColor: "#F0EEE6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <PwaRegistrar />
        <Butterflies />
        {children}
        <Footer />
      </body>
    </html>
  );
}

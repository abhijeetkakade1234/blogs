import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import PwaRegistrar from "./components/PwaRegistrar";

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
    apple: "/apple-icon.png",
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export const viewport = {
  themeColor: "#0f0f0f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <PwaRegistrar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

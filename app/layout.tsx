import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#050511",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents iOS from zooming in when you tap buttons
};

export const metadata: Metadata = {
  title: "TV Tracker",
  description: "Custom TV tracking dashboard",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TV Tracker",
  },
  icons: {
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050511] text-gray-100 antialiased selection:bg-fuchsia-500 selection:text-white`}>
        <main className="min-h-screen pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BottomNav from '@/components/BottomNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Showcase',
  description: 'Your personal video store for tracking TV.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Showcase'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Updated Safari status bar to match Blockbuster Blue */}
        <meta name="theme-color" content="#001A6E" />
      </head>
      <body className={`${inter.className} bg-store-blue text-white min-h-screen antialiased pb-24`}>
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
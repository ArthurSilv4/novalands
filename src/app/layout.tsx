import './globals.css'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import { Header } from 'patterns/header/header'

const inter = Titillium_Web({
  subsets: ['latin'],
  weight: '200',
})

export const metadata: Metadata = {
  title: 'NOVA Lands',
  description: "Nova lands game's landing page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

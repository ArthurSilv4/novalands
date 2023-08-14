import './globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Titillium_Web } from 'next/font/google'
import { Footer } from '../patterns/footer/footer'
import { Header } from '../patterns/header/header'

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
        <Footer />
      </body>
    </html>
  )
}

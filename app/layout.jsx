import HeaderLayout from '@/components/layout/HeaderLayout'
import './globals.css'
import { Inter } from 'next/font/google'
import LayoutMain from '@/components/layout/LayoutMain'
import BotonWhats from '@/components/home/BotonWhats'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Endomedics',
  description: 'Página oficial de la empresa Endomedics Qro',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <div>
        <HeaderLayout/>
        </div>
        <LayoutMain className="bg-gradient-to-b from-[#eeece8e4] to-[#ffff]">
          {children}
        </LayoutMain>
        <BotonWhats/>
        <Footer/>
      </body>
    </html>
  )
}

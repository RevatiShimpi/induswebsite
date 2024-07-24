'use client'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import logo from '../../public/next/images/Logo.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 pt-4">
            {/* Logo */}
            <Image src={logo} alt="LOGO" width={90} height={90} className="object-left-top" />
          </div>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}

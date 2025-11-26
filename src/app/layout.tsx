import React, { ReactNode } from 'react'
import Link from 'next/link'
import './globals.css'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import AppNavbar from '@/components/AppNavbar'
import LightRays from '@/components/LightRays'
import { SidebarProvider } from '@/components/ui/sidebar'
import Footer from '@/components/Footer'

const Baselayout = ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <head>
        <link href="/WEB/css/chillax.css" rel="stylesheet" />
      </head>
      <body className="relative antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            {/* Background */}
            <LightRays className="pointer-events-none fixed inset-0 -z-10" />

            {/* Content */}
            <main className="relative z-10 w-full">
              <AppNavbar />
              {children}
              <Footer />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Baselayout
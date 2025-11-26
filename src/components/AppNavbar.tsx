'use client'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { LogOut, Moon, Settings, User, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import SplitText from './SplitText'

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

// Navigation links configuration
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Posters & Polaroids', href: '#posters-polaroids' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Subscriptions', href: '#subscriptions' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const AppNavbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { open, setOpen } = useSidebar()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && resolvedTheme === 'dark' ? '/PostersPolaroids_Logo_White.svg' : '/PostersPolaroids_Logo_Black.svg'

  // Smooth scroll handler
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Always show at the top
      if (currentScrollY < 50) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // Close sidebar on mobile after clicking
    if (open) {
      setOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between transition-transform duration-300 ease-in-out bg-background/10 backdrop-blur-md border-b border-transparent ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Logo and Brand - Always visible */}
        <div className='flex items-center gap-2'>
          <Image src={logoSrc} alt='Logo' width={40} height={40} className='mr-2' />
          <div style={{ fontFamily: 'Chillax-Variable, sans-serif' }}>
            <SplitText
              text="Posters&Polaroids"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden lg:flex items-center ml-10 gap-6'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Right Side Menu */}
        <div className='hidden md:flex items-center gap-4'>
          <Link href='mailto:shadygraph@gmail.com' className='text-sm hover:text-primary transition-colors'>
            shadygraph@gmail.com
          </Link>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src='https://media.istockphoto.com/id/508471121/photo/praying-businessman.jpg?s=1024x1024&w=is&k=20&c=2t-E6ca7QugOwtC-_BPEEoTPZG10kfsoIjgDZT6gv1o=' />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant='destructive'>
                <LogOut />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile - Profile Icon triggers sidebar */}
        <div className='md:hidden'>
          <SidebarTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src='https://media.istockphoto.com/id/508471121/photo/praying-businessman.jpg?s=1024x1024&w=is&k=20&c=2t-E6ca7QugOwtC-_BPEEoTPZG10kfsoIjgDZT6gv1o=' />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
          </SidebarTrigger>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar side="right" collapsible="offcanvas" className="md:hidden">
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2 px-2 py-2">
            <Image src={logoSrc} alt='Logo' width={30} height={30} />
            <div style={{ fontFamily: 'Chillax-Variable, sans-serif' }}>
              <span className="font-semibold text-lg">Menu</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {/* Navigation Links */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navLinks.map((link) => (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton asChild size="lg">
                      <a
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                      >
                        <span>{link.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <Separator className="my-2" />

          {/* Email */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href='mailto:shadygraph@gmail.com'>
                      <span className="text-sm">shadygraph@gmail.com</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <Separator className="my-2" />

          {/* Theme Toggle */}
          <SidebarGroup>
            <div className="px-4 py-2">
              <p className='text-sm font-semibold mb-3'>Theme</p>
              <div className='flex gap-2'>
                <Button
                  variant={theme === 'light' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('light')}
                  className='flex-1'
                >
                  <Sun className="h-4 w-4 mr-2" />
                  Light
                </Button>
                <Button
                  variant={theme === 'dark' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('dark')}
                  className='flex-1'
                >
                  <Moon className="h-4 w-4 mr-2" />
                  Dark
                </Button>
              </div>
            </div>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t">
          {/* Profile Section */}
          <SidebarGroup>
            <div className='flex items-center gap-3 mb-3 px-2'>
              <Avatar>
                <AvatarImage src='https://media.istockphoto.com/id/508471121/photo/praying-businessman.jpg?s=1024x1024&w=is&k=20&c=2t-E6ca7QugOwtC-_BPEEoTPZG10kfsoIjgDZT6gv1o=' />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div>
                <p className='font-semibold text-sm'>My Account</p>
              </div>
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href=''>
                      <User className='h-4 w-4' />
                      <span>Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href=''>
                      <Settings className='h-4 w-4' />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href='' className="text-red-500 hover:text-red-600">
                      <LogOut className='h-4 w-4' />
                      <span>Logout</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}

export default AppNavbar
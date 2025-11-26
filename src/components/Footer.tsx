import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="w-full bg-background/50 backdrop-blur-md border-t border-border mt-20 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Top Section: Links & Contact */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    {/* Brand & Contact */}
                    <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                        <h3 className="text-2xl font-bold" style={{ fontFamily: 'Chillax-Variable, sans-serif' }}>
                            Posters&Polaroids
                        </h3>
                        <p className="text-muted-foreground max-w-xs">
                            Turn your memories into beautiful prints.
                        </p>
                        <a href="mailto:shadygraph@gmail.com" className="text-primary hover:underline font-medium transition-colors">
                            posters&polaroids.in@gmail.com
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/#home" className="hover:text-foreground transition-colors">Home</Link>
                        <Link href="/#posters-polaroids" className="hover:text-foreground transition-colors">Posters & Polaroids</Link>
                        <Link href="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
                        <Link href="/#subscriptions" className="hover:text-foreground transition-colors">Subscriptions</Link>
                        <Link href="/#reviews" className="hover:text-foreground transition-colors">Reviews</Link>
                    </div>
                </div>

                <Separator />

                {/* Bottom Section: Copyright & Credits */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>cc Posters & Polaroids</p>
                    <div className="flex items-center gap-1">
                        <span>developed by</span>
                        <span className="font-semibold text-foreground">3Pin</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

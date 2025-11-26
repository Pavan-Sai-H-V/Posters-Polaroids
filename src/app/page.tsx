"use client"
import DomeGallery from '@/components/DomeGallery'
import React from 'react'
import { CompCard } from '@/components/CompCard'
import { TimelineApp } from '@/components/TimeLine'
import { CardApp } from '@/components/Card'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import MovingCards from '@/components/MovingCards'
import { Testimonials } from '@/components/Testimonials'
import SubscriptionCards from '@/components/SubscriptionCards'
import ScrollToTop from '@/components/ScrollToTop'

const Home = () => {

  return (
    <div className='flex flex-col w-screen'>
      {/* Home Section - DomeGallery */}
      <section id="home" className="md:h-[85vh] h-[70vh] sm:h-[50vh] flex items-center justify-center pt-16 md:pt-0">
        <DomeGallery />
      </section>

      {/* Hero CTA */}

      <div className="mt-2 md:mt-10 2xl:mt-5 flex flex-wrap items-center gap-6 md:gap-10 flex-col px-4">
        <div className='text-center text-base md:text-lg font-semibold max-w-md'>"Capture your every day.print your every Month"</div>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          onClick={() => {
            const element = document.getElementById('how-it-works');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >Start Your Journey</HoverBorderGradient>
      </div>
      {/* Posters & Polaroids section */}
      <section id="posters-polaroids" className='flex flex-col gap-8 md:gap-12 mt-16 md:mt-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full'>
        {/* Section Header */}
        <div className='flex flex-col gap-4 text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight'>
            Posters & Polaroids
          </h2>
          <p className='text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl'>
            Turn your memories and everyday activity into beautiful prints that make your space feel like you.
          </p>
        </div>

        {/* Why People Love Our Prints */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-8'>
          <div className='flex flex-col justify-center w-full md:w-1/2 gap-6'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left'>
              Why people love our prints
            </h3>
            <ul className='flex flex-col gap-4 text-base md:text-lg'>
              <li className='flex items-start gap-3'>
                <span className='text-primary text-xl flex-shrink-0'>✓</span>
                <span>Studio-grade quality – crisp colors, sharp details</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-primary text-xl flex-shrink-0'>✓</span>
                <span>Any photo works – screenshots, portraits, candids, reels, anything</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-primary text-xl flex-shrink-0'>✓</span>
                <span>Delivered monthly to your doorstep</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-primary text-xl flex-shrink-0'>✓</span>
                <span>Easy uploads via WhatsApp</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <CardApp />
          </div>
        </div>

        {/* WhatsApp Upload Process */}
        <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 py-8'>
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left leading-tight'>
              Upload Your Photos Straight Through WhatsApp
            </h3>
            <div className='flex flex-col gap-4'>
              <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 text-center md:text-left leading-relaxed'>
                No complicated apps. No sign-ups. No confusing uploads.
              </p>
              <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 text-center md:text-left leading-relaxed'>
                Everything happens through WhatsApp — the simplest way to send your pictures.
              </p>
            </div>
            <div className='flex justify-center md:justify-start mt-2'>
              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className='px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors text-sm md:text-base'
              >
                Know More
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <CompCard />
          </div>
        </div>
      </section>
      {/* How It Works - subscription model walkthrough */}
      <section id="how-it-works" className='md:ml-1'>
        <TimelineApp />
      </section>

      <section id="subscriptions">
        <SubscriptionCards />
      </section>


      <section id="reviews" className='flex flex-col gap-8 md:gap-12 mt-12 md:mt-20 px-4 md:px-8'>
        <div className='text-center max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
            Why People Choose Us
          </h2>
          <p className='text-base md:text-lg text-gray-600 dark:text-gray-400'>
            Don't just take our word for it — hear what our customers have to say about their experience
          </p>
        </div>
        <Testimonials />
        <MovingCards />
      </section>



      <ScrollToTop />
    </div>
  )
}

export default Home
'use client'
import React from 'react'
import { Card, CardHeader, CardDescription, CardContent, CardTitle, CardFooter } from './ui/card'
import { Check } from 'lucide-react'

const SubscriptionCards = () => {
  const plans = [
    {
      title: 'Polaroid Magic Pack',
      price: '₹499',
      period: 'month',
      highlights: [
        'Get 30 premium polaroids every month',
        'High-quality prints with clean white borders',
        'Perfect for room décor, journaling, scrapbooks, gifting',
        'Free design enhancement & color correction',
        'WhatsApp Uploads',
        'Cancel or pause anytime'
      ],
      bestFor: 'People who love monthly memories in a vintage style.',
      badge: 'Polaroids Plan'
    },
    {
      title: 'A3 Premium Poster Pack',
      price: '₹499',
      period: 'month',
      highlights: [
        'Get 10 A3 size posters every month',
        'Matte / Gloss finish options',
        'High-resolution artwork guaranteed',
        'Includes free layout improvement and aesthetic retouch',
        'Ideal for room walls, studios, gyms, hostels',
        'Pause/Cancel anytime'
      ],
      bestFor: 'Aesthetic room decorators & poster lovers.',
      badge: 'Posters Plan'
    },
    {
      title: 'Ultimate Combo – Polaroids + Posters',
      price: '₹899',
      period: 'month',
      highlights: [
        '30 Polaroids + 10 Posters every month',
        'Save ₹99 instantly by bundling',
        'Best value for regular customers',
        'Free color correction + free border styles',
        'Early access to new templates & festival themes'
      ],
      bestFor: 'People who want both aesthetic room décor and memory prints every month.',
      badge: 'Combo Plan',
      popular: true
    }
  ]

  return (
    <section className='flex flex-col items-center px-4 py-8 md:py-16 lg:py-24'>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-center'>
        Choose Your Subscription
      </h1>
      <p className="text-center mt-2 md:mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl">
        Simple plans. Premium quality. Delivered every month to your doorstep.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10 w-full max-w-7xl'>
        {plans.map((plan, index) => (
          <div key={index} className="flex justify-center">
            <Card className={`w-full max-w-sm flex flex-col ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
              <CardHeader className="space-y-1.5 md:space-y-2 p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground">
                    {plan.badge}
                  </span>
                  {plan.popular && (
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      Best Value
                    </span>
                  )}
                </div>
                <CardTitle className="text-lg md:text-2xl">{plan.title}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm md:text-base text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-3 md:space-y-4 p-4 md:p-6">
                <div className="space-y-2 md:space-y-3">
                  <h4 className="font-semibold text-xs md:text-sm">Plan Highlights:</h4>
                  <ul className="space-y-1.5 md:space-y-2">
                    {plan.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 md:pt-4 border-t">
                  <p className="text-xs md:text-sm">
                    <span className="font-semibold">Best For: </span>
                    <span className="text-muted-foreground">{plan.bestFor}</span>
                  </p>
                </div>
              </CardContent>

              <CardFooter className="p-4 md:p-6">
                <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2.5 md:py-3 rounded-md text-sm md:text-base font-semibold transition-colors">
                  Subscribe Now
                </button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SubscriptionCards





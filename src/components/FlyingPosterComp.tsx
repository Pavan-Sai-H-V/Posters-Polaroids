'use client'
import FlyingPosters from './FlyingPosters'

const items = [
  'https://picsum.photos/500/500?grayscale',
  'https://picsum.photos/600/600?grayscale',
  'https://picsum.photos/400/400?grayscale'
];

import React from 'react'

const FlyingPosterComp = () => {
  return (
    <div className="h-[300px] md:h-[400px] lg:h-[600px] relative">
      <FlyingPosters items={items} />
    </div>
  )
}

export default FlyingPosterComp

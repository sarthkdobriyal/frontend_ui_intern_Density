"use client"
import { FC } from 'react'
import Card from './Card'
import { motion } from 'framer-motion'

interface CardCarouselProps {
  
}

const CardCarousel: FC<CardCarouselProps> = ({}) => {
    const cardData = [
        {
            emoji: '😁',
            heading: 'You argue with a colleague',
            para: 'You get angry and defensive , instead of staying open and working towards common ground',
            color: 'bg-pink-300'
        },
        {
            emoji: '😁',
            heading: 'You argue with a colleague',
            para: 'You get angry and defensive , instead of staying open and working towards common ground',
            color: 'bg-orange-300'
        },
        {
            emoji: '😁',
            heading: 'You argue with a colleague',
            para: 'You get angry and defensive , instead of staying open and working towards common ground',
            color: 'bg-blue-300'
        },
        {
            emoji: '😁',
            heading: 'You argue with a colleague',
            para: 'You get angry and defensive , instead of staying open and working towards common ground',
            color: 'bg-green-300'
        },
        {
            emoji: '😁',
            heading: 'You argue with a colleague',
            para: 'You get angry and defensive , instead of staying open and working towards common ground',
            color: 'bg-red-300'
        },
        {
            emoji: '😁',
            heading: 'You argue with a colleague',
            para: 'You get angry and defensive , instead of staying open and working towards common ground',
            color: 'bg-red-300'
        },
    ]

  return (
    <div className='flex gap-10 overflow-x-scroll w-[80%] object-fill ' >
       {cardData.map((card) => (
        <motion.div
            initial={{opacity:0.2, x: -90 , scale:0.9}}
            whileInView={{opacity:1, x: 0, scale:1}}
            transition={{type: "spring", stiffness: 300, duration: 2}}
        className='w-96'>

        <Card 
            emoji={card.emoji}
            heading={card.heading}
            para={card.para}
            color={card.color}
            />
        </motion.div>
       ))
     }
    </div>
  )
}

export default CardCarousel
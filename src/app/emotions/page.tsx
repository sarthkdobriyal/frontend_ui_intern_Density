"use client"
import { FC } from 'react'
import EmotionHeading from '../../components/EmotionHeading'
import CardCarousel from '../../components/CardCarousel'
import { motion } from 'framer-motion'
import Image from 'next/image'
interface pageProps {
  
}

const Emotions: FC<emotionsProps> = ({}) => {
  return <div className='w-screen h-screen'>
    <EmotionHeading 
        heading='EQ beats IQ'
        para1='People with high emotional intelligence (EQ) live more fulfille lives .They tend to be happier and have healthier relationships.'
        para2='They are more successful in their pursuits and make for inspiring leaders.According to science they earn $29k a year'
    />

<div
className='my-10 items-start justify-center px-20 gap-10 flex flex-col relative'>

        <motion.div
                initial={{scale:0.5, x: 210, y: 10}}
                whileInView={{scale:1, x: [210, 240, 190, 200, 20, 0], y: [10, 8, 6, 4, 2, 0]}}
                transition={{type: "spring", stiffness: 100, duration: 2}}
            className='absolute left-[40%] -top-6'
        >
            <Image 
                src="/ghost_4.png"
                alt="ghost"
                height={70}
                width={70}
            />
        </motion.div>
        <motion.h2 
            initial={{opacity:0.2, x: -90 , scale:0.9}}
            whileInView={{opacity:1, x: 0, scale:1}}
            transition={{type: "spring", stiffness: 300, duration: 2}}
        className='text-4xl font-extrabold ml-10'>Does this sound familiar...</motion.h2>
    </div>
    <div className='w-screen flex justify-center items-center'>
        <CardCarousel />
    </div>
  </div>
}

export default Emotions
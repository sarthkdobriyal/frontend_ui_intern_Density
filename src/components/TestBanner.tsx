"use client"
import { FC } from 'react'
import Image from 'next/Image'
import { motion } from 'framer-motion'

interface TestBannerProps {
  
}

const TestBanner: FC<TestBannerProps> = ({}) => {

    const sun = {
        hidden: {
            scale: 0.5,
            opacity: 0.5
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 2,
                type: "spring"
            }
        }
    }





  return <div className='w-screen flex justify-center items-center my-10'>

    <div className='bg-[#eef8fe] w-[80%] h-[80%] rounded-3xl flex flex-col gap-4 justify-center item-center py-8'>

        <motion.span
            initial={{y:-90, opacity:0.5}}
            whileInView={{y:0, opacity:1}}
            transition={{type: "spring", stiffness: 300, duration: 2}}
        className='font-semibold text-xl text-center'>Let your friends, relatives, coworkers  (anonymously) rate your social skills </motion.span>
        <motion.span 
            initial={{y:-90, opacity:0.5}}
            whileInView={{y:0, opacity:1}}
            transition={{type: "spring", stiffness: 300, duration: 2}} className='font-extrabold text-5xl text-center'>Ever Wondered? what others think of you</motion.span>

        <div className=' relative flex w-full justify-around items-center mt-10'>

            <div className=' absolute left-[15%] border-3 border-dashed w-[70%] h-1 z-0 border-[#e7c37b]' ></div>

            <motion.div variants={sun} initial='hidden' whileInView='visible' className='relative z-10'>
                <Image 
                    src='/sunny.png'
                    alt="sunny"
                    height={50}
                    width={50}
                />
                
                <span className='absolute top-[30%] left-[40%] text-white'>1</span>
            </motion.div>
            <motion.div variants={sun} initial='hidden' whileInView='visible' className=' relative z-10'>
                <Image 
                    src='/sunny.png'
                    alt="sunny"
                    height={50}
                    width={50}
                />
               
    <span className='absolute top-[30%] left-[40%] text-white'>2</span>
            </motion.div>
            <motion.div variants={sun} initial='hidden' whileInView='visible' className='relative z-10'>
                <Image 
                    src='/sunny.png'
                    alt="sunny"
                    height={50}
                    width={50}
                />
                <span className='absolute top-[30%] left-[40%] text-white'>3</span>
            </motion.div>

        </div>

        <div className='w-[100%]'>

        <div className=' flex justify-around items center my-5'>
            <motion.span variants={sun} initial='hidden' whileInView='visible' className=' font-bold text-sm '>Answer Question on your social skills</motion.span>
            <motion.span variants={sun} initial='hidden' whileInView='visible' className=' font-bold text-sm '>Let others answer the same question about you</motion.span>
            <motion.span variants={sun} initial='hidden' whileInView='visible' className=' font-bold text-sm '>Find out the difference</motion.span>
            </div>
        </div>


        <div className='bg-white rounded-3xl w-[75%] h-[400px] my-10 flex items-center justify-center py-5 mx-auto shadow-2xl'>
            <div className='relative border-t border-blue-950 w-[80%] h-0'>
            <motion.div  variants={sun} initial='hidden' whileInView='visible' className='w-6 h-6 bg-blue-700 rounded-full absolute -top-3 left-0'></motion.div>
            <motion.span variants={sun} initial='hidden' whileInView='visible'  className='absolute -top-20 left-0 py-3 px-4 bg-blue-600 rounded-lg text-white'>YOU</motion.span>
            <motion.div  variants={sun} initial='hidden' whileInView='visible' className='w-6 h-6 bg-red-700 rounded-full absolute -top-3 left-[35%]'></motion.div>
            <motion.span variants={sun} initial='hidden' whileInView='visible'  className='absolute top-10 left-[35%] py-3 px-4 bg-red-600 rounded-lg text-white'>Anonymous 3</motion.span>
            <motion.div  variants={sun} initial='hidden' whileInView='visible' className='w-6 h-6 bg-green-700 rounded-full absolute -top-3 left-[65%]'></motion.div>
            <motion.span variants={sun} initial='hidden' whileInView='visible'  className='absolute -top-20 left-[65%] py-3 px-4 bg-green-600 rounded-lg text-white'>Anonymous 2</motion.span>
            <motion.div  variants={sun} initial='hidden' whileInView='visible' className='w-6 h-6 bg-yellow-700 rounded-full absolute -top-3 left-[100%]'></motion.div>
            <motion.span variants={sun} initial='hidden' whileInView='visible'  className='absolute top-10 left-[90%] py-3 px-4 bg-yellow-600 rounded-lg text-white '>Anonymous 3</motion.span>

            </div>
        </div>




    </div>
    
  </div>
}

export default TestBanner
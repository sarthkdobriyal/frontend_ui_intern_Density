'use client'

import { FC } from 'react'
import Image from 'next/Image'
import { motion } from 'framer-motion'

interface BannerProps {
  
}


const Banner: FC<BannerProps> = ({}) => {

    
const heading = {
    hidden : {
        x:-110,
        opcaity: 0,
    },
    visible : {
        x: 0,
        opacity:1,
        transition: {
            type: "spring",
            stiffness: 100,
        }
    }
}

const ghost = {
    initial: {x: -100, y:-74 ,scale:0, rotate: 180},
    animate: {x: 0, y:0 ,scale:1, rotate:25, transition:{type: "spring", stiffness: 400, duration: 2}},
                    
}




  return <div className='w-screen flex items-center justify-center ' >
        <div className="flex bg-[#EFECFF] rounded-3xl w-[90%] h-[90vh] mb-5 overflow-hidden " >
            
            {/* left side */}
            <div className='relative flex-1 flex flex-col gap-2 items-start justify-center px-5 pl-16 w-[70%] overflow-hidden'>
                <motion.span
                    variants={heading}
                    initial='hidden'
                    animate='visible'
                    className='font-baloo text-lg ml-2'>Ahead App</motion.span>
                <motion.span variants={heading}
                    initial='hidden'
                    animate='visible' className='font-baloo font-bold text-7xl'>Master your life <br /> by mastering <br /> emotions</motion.span>
                <div className='flex gap-5 items-center mt-8'>
                    <button className='px-3 py-1 rounded-lg bg-black text-white flex gap-1 items-center'>
                        <Image 
                            src="/apple_icon.png"
                            alt="apple icon"
                            height={40}
                            width={40}
                        />
                        <div className='flex flex-col'>
                        <span className='text-xs font-light'>Download on the</span>
                        <span className='text-lg font-bold'>App Store</span>
                        </div>
                    </button>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='flex gap-1'>
    
                        {
                            Array(5).fill().map((_,i) => (
                                <motion.div
                                initial={{scale:0, opacity: 0.5}}
                                animate={{scale:1, opacity: 1}}
                                transition={{type:"spring"}}
                                >

                                        <Image
                                        src="/star.png"
                                        alt="stars"
                                        height={20}
                                        width={20} />
                                
                                        </motion.div>
                              
                            ))
                        }
                        </div>
                        <span className='text-slate-400 text-xs '>100+ App Store Reviews</span>
                    </div>
                </div>
               
                
                <motion.div
                     initial={{ y: -10, scale: 0, rotate: 240 }}
                     animate={{y: 0, scale: 1, rotate:-45 }}
                     transition={{type: "spring", stiffness: 500,  repeatType: 'mirror' , duration: 2}}
                className='absolute top-10 left-[40%]'>
                    <Image 
                       
                        src='/semicircle.png'
                        alt="semicircle"
                        height={30}
                        width={60}
                    />
                </motion.div>
                <motion.div
                     initial={{ y: -10, scale: 0, rotate: -164 }}
                     animate={{y: 0, scale: 1, rotate:-90 }}
                     transition={{type: "spring", stiffness: 500,  repeatType: 'mirror' , duration: 1.2}}
                className='absolute top-16 left-[85%]'>
                    <Image 
                       
                        src='/semicircle.png'
                        alt="semicircle"
                        height={30}
                        width={60}
                    />
                </motion.div>


                <motion.div 
                    initial={{x:-6, scale:0.4}}
                    animate={{x:0,scale:1}}
                    transition={{type: "spring", stiffness: 70, duration: 2}}
                className='absolute bottom-40 -left-4 h-16 w-16 rounded-full bg-[#ca7072] opacity-40'>

                </motion.div>
                <motion.div
                initial={{x:20}}
                animate={{x:0}}
                transition={{type: "spring", stiffness: 700, duration: 2}}
                className='absolute top-10 right-10 h-8 w-8 rounded-full bg-[#ca7072] opacity-60'>

                </motion.div>
                <div className='absolute -bottom-4 left-64 h-16 w-16 rounded-full bg-[#eb695b]'>

                </div>
                <motion.div
                    initial={{x:20}}
                    animate={{x:0}}
                    transition={{type: "spring", stiffness: 700, duration: 2}}
                className='absolute flex justify-center items-center top-20 right-36 h-8 w-8 rounded-full bg-[#f6d3bd]'>
                    <div className='h-3 w-3 rounded-full bg-[#eb695b]'>

                    </div>
                </motion.div>

            </div>

            {/* right side */}
            <div className=' relative flex-1 flex justify-center items-center'>
                <motion.div
                    initial={{x:60,  rotate: 180}}
                    animate={{x:0,  rotate: 0}}
                    transition={{type: "string", duration: 2,}}
                className='rounded-full border-3 border-white border-dashed h-[80%] w-[80%] flex items-center justify-center'>
                    <motion.div 
                        initial={{scale:0, rotate: 180}}
                        animate={{scale:1, rotate: 0}}
                        transition={{type: "string", duration: 2,}}
                        className='rounded-full h-[70%] w-[70%] bg-[#e0d8fa]'>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={ghost}
                    initial='initial'
                    animate='animate'
                className='absolute z-10 bottom-28 left-28'>
                <Image 
                    src='/ghost_1.png'
                    alt="phone view"
                    height={80}
                    width={80}
                        />
                </motion.div>
                <motion.div
                    variants={ghost}
                    initial='initial'
                    animate={{rotate: -35, x:0,y:0, scale:1}}
                    transition={{type: "spring", stiffness: 400, duration: 2}}
                className='absolute z-10 bottom-84 right-14'>
                <Image 
                    src='/ghost_2.png'
                    alt="phone view"
                    height={60}
                    width={60}
                        />
                </motion.div>
                <motion.div
                    variants={ghost}
                    initial='initial'
                    animate='animate'
                className='absolute z-10 top-28 left-24'>
                <Image 
                    src='/ghost_4.png'
                    alt="phone view"
                    height={70}
                    width={70}
                        />
                </motion.div>

                <motion.div
                        initial={{scale:0, opacity: 0.5}}
                        animate={{scale:1, opacity: 1}}
                        transition={{type: "string"}}
                className='absolute z-10 ' >
                    <Image
                        src='/phone.png'
                        alt="phone view"
                        height={600}
                        width={600}
                    />
                    </motion.div>
                    <motion.div
                            initial={{scale:0, opacity: 0.5}}
                            animate={{scale:1, opacity: 1}}
                            transition={{type: "string"}}
                        className='absolute z-20 left-[10%]'>
                    <Image 
                    src='/phoneCards.png'
                    alt="phone view"
                    height={400}
                    width={400}
                        />
                    </motion.div>

                    

                <div className='absolute -top-3 left-72 h-8 w-8 rounded-full bg-[#ca7072] opacity-40'>

                </div>

            </div>  

        </div>
  </div>
}

export default Banner





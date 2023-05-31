"use client"
import { heading, para } from '@variants/textVariants'
import { semicircle } from '@variants/imgVariant'
import { FC } from "react";
import {motion} from 'framer-motion'
import Image from 'next/image'

interface Banner2Props {}

const Banner2: FC<Banner2Props> = ({}) => {
  return (
    <div className="w-screen flex items-center justify-center mt-32 ">
      <div className="flex bg-[#fef6f0] rounded-3xl w-[80%] h-[80vh] mb-5 ">
        {/* left side */}
        <div className="gap-4 w-[50%] h-full relative flex flex-col pt-24 pl-16  overflow-hidden">

        <motion.span variants={heading} initial='hidden' whileInView='visible' className='font-baloo text-xl'>Build out of frustration</motion.span>
        <motion.span variants={heading} initial='hidden' whileInView='visible' className='font-baloo font-bold text-6xl'>Meet the ahead app</motion.span>


            <motion.div
                initial={{y:200}}
                whileInView={{y:0}}
                transition={{type: "spring", stiffness: 50, duration: 10}}
            className="absolute z-10 top-[40%] left-[33%]">
                <Image 
                    src="/sunny.png"
                    alt="sun"
                    height={50}
                    width={50}
                />
            </motion.div>
          <motion.div 
            initial={{x: 100 ,y:100}}
            whileInView={{x: [100, 60, 40, 20, 0], y: [100, 60, 40, 20, 0]}}
            transition={{type: "spring", stiffness: 300, duration: 5}}
          className="absolute bottom-10 -left-20 h-80 w-80 rounded-full bg-[#ca7072] opacity-20"></motion.div>
          <div className="absolute bottom-32 left-32 h-60 w-60 rounded-full bg-[#f6f6f6] flex items-center justify-center">
            <motion.div
                initial={{x:30,y:60, opacity:0.6, rotate: 45}}
                whileInView={{x:[30, 20, 10, 6, 0 ],y:[60, 30, 20, 6, 0], opacity:1, rotate:[45, 0, 20, 0]}}
                transition={{type: "spring", stiffness: 300, duration: 10, repeat: 2, repeatType: 'mirror'}}
            className="bg-white rounded-full h-44 w-44 flex justify-center items-center">
                    <Image 
                        src="/ghost_3.png"
                        alt="ghost"
                        height={70}
                        width={70}
                    />
            </motion.div>
          </div>

          <motion.div initial={{x:-80, y:-40}} whileInView={{x:0, y: 0}} className='absolute flex justify-center items-center bottom-20 left-[60%] h-12 w-12 rounded-full bg-[#f6d3bd]'>
                    <div className='h-4 w-4 rounded-full bg-[#eb695b]'>

                    </div>
                </motion.div>

                <motion.div
                variants={semicircle}
                     initial='hidden'
                     whileInView='visible'
                className='absolute bottom-30 left-[65%]'>
                    <Image 
                       
                        src='/semicircle.png'
                        alt="semicircle"
                        height={30}
                        width={60}
                    />
                </motion.div>

                <motion.div initial={{x:-80, y:-40}} whileInView={{x:0, y: 0}} className='absolute bottom-52 left-[70%] h-8 w-8 rounded-full bg-[#ca7072] opacity-40'>

                </motion.div>
        </div>

        {/* right side */}
        <div className=" w-[50%] h-full flex items-center justify-center  relative">

           

          <div className=" flex flex-col text-2xl  items-center justify-center w-[70%] text-slate-600 font-bold gap-5">
            <motion.span variants={para} initial='hidden' whileInView='visible' className="">
              A personalized that provides bite-sized , science-driven tools to
              boost emotional intelligence.
            </motion.span>
            <motion.span variants={para} initial='hidden' whileInView='visible'>
              Think of it as a pocket cheerleader towards a better and
              fulfilling life.
            </motion.span>
          </div>




          <motion.div 
            initial={{rotate: 180, scale:0.8}}
            whileInView={{rotate:0, scale:1}}
            transition={{type: "spring", stiffness: 100, repeat: 2, repeatType: 'mirror', duration: 10}}
          className='absolute z-40 -top-7 left-[60%]'>
                
                <Image 
                    src="/flower_1.png"
                    alt="flower"
                    height={60}
                    width={60}
                />
            </motion.div>
            <motion.div
                variants={semicircle}
                     initial='hidden'
                     whileInView='visible'
                className='absolute top-20 left-[65%]'>
                    <Image 
                       
                        src='/semicircle.png'
                        alt="semicircle"
                        height={30}
                        width={60}
                    />
                </motion.div>





        </div>
      </div>
    </div>
  );
};

export default Banner2;

"use client"


import { FC } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  return (
    <nav className="fixed z-50 bg-white w-screen px-32 py-5 items-center flex justify-between mb-5" >
        {/* logo */}
            <div className="flex">
                <Image 
                    src="/logo.webp"
                    alt="Logo"
                    height={80}
                    width={80}
                />
            </div>

            <div className='flex gap-32'>
                {/* navItems */}
                <div className=" flex gap-10 items-center font-bold ">
                    <Link href='/emotions' className='text-xl'>Emotions</Link >
                    <Link href='/manifesto' className='text-xl'> Manifesto</Link >
                    <Link href='/test' className='text-xl'>Self Awareness Test</Link >
                    <Link href='/careers' className='text-xl'>Work With Us</Link >
                </div>
        {/* download  button */}
            <motion.button 
                whileHover={{ scale: 1.1 }}
            className="bg-black text-white text-xl  rounded-3xl px-6 py-4">Download App</motion.button>
            </div>
    </nav>
  );
};

export default Header;

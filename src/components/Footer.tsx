import { FC } from 'react'
import Image from 'next/Image'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return <div className='border border-t border-slate-200 flex flex-col gap-5 justify-center items-center text-center py-10  '>
    <div className='flex flex-col gap-2 items-center justify-center'>
    <div className="flex">
                <Image 
                    src="/logo.webp"
                    alt="Logo"
                    height={80}
                    width={80}
                />
            </div>
        <span className="text-blue-400 ">ahead</span>
    </div>
        <div className='flex gap-4  text-center'>
            <span className="text-xs text-slate-400 ">Dehradun, India</span>
            <span className="text-xs text-slate-400 ">dobriyalsarthaksa.8@gmail.com</span>
        </div>
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
                    <span className='text-slate-400 text-sm'>© 2023 Ahead app | All Rights Reserved</span>
  </div>
}

export default Footer
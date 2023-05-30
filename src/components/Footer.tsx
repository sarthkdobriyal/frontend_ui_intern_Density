import { FC } from 'react'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return <div className='border-3 border-t border-slate-200 flex flex-col gap-5 justify-center items-center text-center mt-10 py-10 mb-10 '>
    <div className='flex flex-col gap-2 items-center justify-center'>

        <span className="text-blue-400">LOgo</span>
        <span className="text-blue-400 ">ahead</span>
    </div>
        <div className='flex gap-4  text-center'>
            <span className="text-xs text-slate-400 ">Dehradun, India</span>
            <span className="text-xs text-slate-400 ">dobriyalsarthaksa.8@gmail.com</span>
        </div>
        <button className='px-3 py-1 rounded-lg bg-black text-white flex flex-col'>
                        <span className='text-xs font-light'>Download on the</span>
                        <span className='text-lg font-bold'>App Store</span>
                    </button>
                    <span className='text-slate-400 text-sm'>© 2023 Ahead app | All Rights Reserved</span>
  </div>
}

export default Footer
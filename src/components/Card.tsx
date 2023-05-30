import { FC } from 'react'

interface CardProps {
  emoji: string,
  heading: string,
  para: string,
  color: string
}

const Card: FC<CardProps> = ({emoji, heading, para, color}) => {
  return <div className={` w-[100%] ${color} rounded-2xl flex flex-col gap-4 justify-center items-start py-7 px-9`}>
    <span className='text-lg'>{emoji}</span>
    <span className='font-bold text-base'>{heading} </span>
    <span className='text-slate-400 text-sm'>{para}</span>
  </div>
}

export default Card
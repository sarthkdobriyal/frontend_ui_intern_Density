import { FC } from 'react'

interface EmotionHeadingProps {
  heading: string,
  para1: string,
  para2: string,
}

const EmotionHeading: FC<EmotionHeadingProps> = ({heading, para1, para2}) => {
  return   <div className='w-screen my-10 py-10 flex justify-center items center '>
  <div className='flex w-[80vw]'>
  <div className='w-[40%] '>
    <span className='font-bold text-5xl '>{heading}</span>
  </div>
  <div className='flex text-slate-400 text-xl gap-10 w-[50%]'>
    <span>
      {para1}
    </span>
    <span>
      {para2}
    </span>
  </div>
  </div>
</div>
}

export default EmotionHeading
import { FC } from 'react'
import EmotionHeading from '@components/EmotionHeading'
import TestBanner from '@components/TestBanner'
import StartTest from '@components/StartTest'
import Footer  from '@components/Footer'

interface TestProps {
  
}

const Test: FC<TestProps> = ({}) => {
  return <div className='h-screen w-screen mt-10'>
    <EmotionHeading heading='Be the Best you with EQ' para1='Not having your own emotions under control might hold you back' para2='Additionally, Not understanding those of other might stop you from being parent , friend you can be'/>
    <TestBanner />
    <div className='w-screen flex justify-center items-center mb-10'>
    <StartTest />
    </div>
    <Footer />

  </div>
}

export default Test
import Image from 'next/image'
import Banner from '@components/Banner'
import Emotions from './emotions/page'
import Manifesto from './manifesto/page'
import Test from './test/page'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-24">
      <Banner />
      <div className='h-screen'>
      <Emotions />
      </div>
      <div className='h-screen'>
      <Manifesto />
      </div>
      <div className='h-screen'>
      <Test />
      </div>
      <div className='h-screen '>

      </div>
    </main>
  )
}

import Image from 'next/image'
import Banner from '@components/Banner'
import Emotions from './emotions/page'
import Manifesto from './manifesto/page'
import Test from './test/page'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Emotions />
      <Manifesto />
      <Test />
    </main>
  )
}

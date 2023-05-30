import Image from 'next/image'
import Banner from '@components/Banner'
import Emotions from './emotions/page'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Emotions />
          </main>
  )
}

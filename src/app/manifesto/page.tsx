import { FC } from 'react'
import ManifestoBanner from '../../components/ManifestoBanner'

interface manifestoProps {
  
}

const manifesto: FC<manifestoProps> = ({}) => {
  return <div className='w-screen h-screen flex justify-center items-center'>
    <ManifestoBanner />
  </div>
}

export default manifesto
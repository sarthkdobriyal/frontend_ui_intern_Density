import './globals.css'
import Header from '@components/Header'




export const metadata = {
  title: 'Ahead app redesign',
  description: 'Density -Frontend ui challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-baloo'>
        <Header />
        {children}
       
        </body>
    </html>
  )
}

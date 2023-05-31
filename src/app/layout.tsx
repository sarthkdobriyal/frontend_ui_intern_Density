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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='font-baloo'>
        <Header />
        {children}
       
        </body>
    </html>
  )
}

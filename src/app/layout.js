import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import NewsContextProvider from './context/NewsContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News Mania',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='./favicon.ico' type='image/x-icon'/>
      </head>
      <NewsContextProvider>
        <body className={inter.className}>
            {children}
            <Toaster position='top-center' 
              gutter={8} 
              toastOptions={
                {
                  duration:800,
                  style:
                  {
                    background: '#fff',
                    color: '#363636',
                  }, 
                  success:
                  {
                    duration:800,
                    theme: 
                    {
                      primary: 'green',
                      secondary: 'white',
                    },
                  } 
                }
              }
            />
        </body>
      </NewsContextProvider>
    </html>
  )
}

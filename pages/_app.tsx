import { ThemeProvider } from '@/components/v1/theme/ThemeProvider'
import type { AppProps } from 'next/app'
import '@/styles/v1/globals.css'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
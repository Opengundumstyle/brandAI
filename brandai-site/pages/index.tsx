import Head from 'next/head'
// import { Inter } from 'next/font/google'
import BrandAI from '@/components/brandai'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BrandAI | AI generated marketing</title>
        <meta name="description" content="Generated branding snippet for your product." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <BrandAI/>
    </>
  )
}

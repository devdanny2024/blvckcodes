import '@/styles/globals.css'
import '@/styles/Footer.css'
import '@/styles/Navbar.css'
import '@/styles/Header.css'
import '@/styles/Aboutus.css'
import '@/styles/Whyus.css'
import '@/styles/Contactus.css'
import '@/styles/Ourpackages.css'
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  <Analytics/>
  return <Component {...pageProps} />
}
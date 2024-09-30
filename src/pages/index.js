import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Aboutus from '../components/Aboutus';
import Whyus from '../components/Whyus';
import Contact from '../components/Contactus';
import Ourpackages from '@/components/Ourpackages';
import Footer from '@/components/Footer';
import FacebookPixel from '@/components/Facebookpixel';

export default function Home() {
  return (
    <>
    <FacebookPixel/>
      <Head>
        <title>Blvck Code - Smart Home Solutions</title>
        <meta name="description" content="Enhance your home's capabilities with smart home solutions." />
        <link rel="icon" href="../images/bce.png" />
      </Head>
      <Navbar />
      <Header />
      <Aboutus />
      <Whyus />
      <Contact/>
      <Ourpackages/>
      <Footer/>
    </>
  );
}

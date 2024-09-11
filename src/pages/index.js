import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Aboutus from '../components/Aboutus';
import Whyus from '../components/Whyus';
import Contact from '../components/Contactus';
import Ourpackages from '@/components/Ourpackages';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Blvck Code - Smart Home Solutions</title>
        <meta name="description" content="Enhance your home's capabilities with smart home solutions." />
        <link rel="icon" href="/favicon.ico" />
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

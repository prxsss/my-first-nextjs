// import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className={`${montserrat.className}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

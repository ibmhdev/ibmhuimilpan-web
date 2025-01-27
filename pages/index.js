import { Merriweather, Open_Sans } from 'next/font/google';
import Hero from '../components/Hero';

const merriweather = Merriweather({
  weight: ['700', '400'],
  subsets: ['latin'],
  variable: '--font-merriweather'
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
});

export default function Home() {
  return (
    <main className={`${merriweather.variable} ${openSans.variable}`}>
      <Hero />
      {/* Resto de secciones */}
    </main>
  )
}
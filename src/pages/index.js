import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Experience from '@/components/Experience';
import Core from '@/components/Core';
import Info from '@/components/Info';
import { Card } from 'flowbite-react';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   return (
      <>
         <Head>
            <title>Signature Analytics</title>
            <meta name='description' content='BuiltbyCHarris' />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href='/images/logo3.png' />
         </Head>
         <main className=' bg-fixed bg-officeback2 bg-cover bg-center'>
            <section>
               <Hero />
            </section>
            <section>
               <About />
            </section>
            <section>
               <Experience />
            </section>
            <section className=''>
               <Core />
            </section>
            <section className=''>
               <Mission />
            </section>
            <section>
               <Info />
            </section>
         </main>
      </>
   );
}

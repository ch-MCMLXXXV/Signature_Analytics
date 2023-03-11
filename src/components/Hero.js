import Image from 'next/image';

const Hero = () => {
   return (
      <>
         <section className=' bg-officeback3 bg-cover bg-center w-full py-44'>
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
               <div className='mr-auto place-self-center lg:col-span-7'>
                  <h1 className='max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>
                     Signature Analytics
                  </h1>
                  <p className='max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                     Providing superior analytical service in
                     business, cost estimation and financial
                     management to the Department of Defense.
                  </p>
               </div>
               <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                  {/* <Image
                     src='/images/logo.png'
                     alt='mockup'
                     width={300}
                     height={300}
                  /> */}
               </div>
            </div>
         </section>
      </>
   );
};

export default Hero;

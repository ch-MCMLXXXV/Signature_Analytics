import Image from 'next/image';

const About = () => {
   return (
      <>
         <section className=' p-12 bg-slate-100'>
            <h1 className=' text-center font-bold text-5xl py-5 font-allura underline underline-offset-[12px] decoration-red-800'>
               About Us
            </h1>
            <section className=' xl:flex xl:divide-x-4 xl:divide-red-800 py-10 xl:justify-center'>
               <article className=' xl:w-2/5 xl:flex-none'>
                  <Image
                     src='/images/minority.jpeg'
                     alt='minority'
                     width={500}
                     height={500}
                     className='rounded-xl shadow-xl shadow-red-800'
                  />
               </article>
               <article className=' xl:w-2/5 xl:flex-none'>
                  <p className=' p-6 text-left text-gray-700 text-xl tracking-wide'>
                     {' '}
                     Signature Analytics is a Professional Services
                     Provider established with a purpose to deliver
                     superior analytical services in business, cost
                     estimation and financial management to the
                     Department of Defense and Federal Government. We
                     believe in customer centric service delivery with
                     intent to uncover, understand, and solve the
                     underlying problems of the true end customers for
                     our services – the military (the soldier, airman,
                     seaman and Marine) and federal service
                     professionals.{' '}
                  </p>
               </article>
            </section>
         </section>
      </>
   );
};

export default About;

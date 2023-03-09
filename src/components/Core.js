import Image from 'next/image';

const Core = () => {
   return (
      <>
         <section className=' bg-opacity-75'>
            <div className=' '>
               <h1 className=' text-5xl text-center p-10 text-white'>
                  Core Values
               </h1>
            </div>
            <section className=' xl:flex xl:flex-wrap xl:justify-evenly'>
               <article className=' xl:w-2/5 xl:flex-none'>
                  <Image
                     src='/images/team.avif'
                     alt='minority'
                     width={600}
                     height={600}
                     className='rounded-xl shadow-red-800 shadow-lg'
                  />
               </article>

               <article className=' xl:w-2/5 xl:flex-none'>
                  <div className=' flex flex-wrap py-10'>
                     <Image
                        src='/images/Dot.png'
                        alt='Dot'
                        width={100}
                        height={100}
                        className='block mx-3'
                     />

                     <h2 className=' text-4xl p-5 text-white'>
                        Ethics and Integrity
                     </h2>
                  </div>
                  <div className=' flex flex-wrap  py-10'>
                     <Image
                        src='/images/Dot.png'
                        alt='Dot'
                        width={100}
                        height={100}
                        className='block mx-3'
                     />
                     <h2 className=' text-4xl p-5 text-white'>
                        Customer Commitment
                     </h2>
                  </div>
                  <div className=' flex flex-wrap py-10 '>
                     <Image
                        src='/images/Dot.png'
                        alt='Dot'
                        width={100}
                        height={100}
                        className='block mx-3'
                     />
                     <h2 className=' text-4xl p-5 text-white'>
                        Team and Family Environment
                     </h2>
                  </div>
               </article>
            </section>
         </section>
      </>
   );
};

export default Core;

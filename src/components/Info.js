import Image from 'next/image';
import { HiEnvelope } from 'react-icons/hi2';

const Info = () => {
   return (
      <>
         <section className=' p-10'>
            <div className=' flex justify-center'>
               <Image
                  src='/images/logo.png'
                  alt='Signature Analytics'
                  width={800}
                  height={800}
               />
            </div>
            <div className='flex justify-center'>
               <HiEnvelope size={40} className=' mb-2 mr-4' />
               <span className=' text-3xl'>
                  <a
                     href='mailto:jpleasantjr@signatureanalyticshsv.com'
                     className='text-white hover:text-gold'
                  >
                     jpleasantjr@signatureanalyticshsv.com
                  </a>
               </span>
            </div>
         </section>
      </>
   );
};

export default Info;

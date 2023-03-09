import Image from 'next/image';

const Info = () => {
   return (
      <>
         <section className=''>
            <div className=' flex justify-center py-16'>
               <Image
                  src='/images/logo.png'
                  alt='Signature Analytics'
                  width={600}
                  height={600}
               />
            </div>
         </section>
      </>
   );
};

export default Info;

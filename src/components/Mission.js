import { Card } from 'flowbite-react';
import Image from 'next/image';

const Mission = () => {
   return (
      <>
         <section className=' bg-white'>
            <div className=''>
               <h1 className=' text-center text-5xl p-10 font-bold  text-red-800 '>
                  Mission Statement
               </h1>
            </div>
            <div className=' py-10 md:flex md:flex-row md:gap-5 md:justify-evenly'>
               <div className='max-w-sm py-2'>
                  <Card className=' shadow-xl'>
                     <Image
                        src='/images/handshake.png'
                        alt='Handshake'
                        width={100}
                        height={100}
                        className=' m-auto'
                     />
                     <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
                        Service
                     </h5>
                     <p className='font-normal text-gray-700 dark:text-gray-400 text-center'>
                        Signature analytics is focused on service. We
                        serve – each other, the soldier, our
                        customers, our employees, our partners, our
                        vendors, and our community. Service is at the
                        center of our Core Values and Culture.
                     </p>
                  </Card>
               </div>
               <div className='max-w-sm py-2'>
                  <Card className=' shadow-xl'>
                     <Image
                        src='/images/customer.png'
                        alt='Customer'
                        width={100}
                        height={100}
                        className=' m-auto'
                     />
                     <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
                        Customers
                     </h5>
                     <p className='font-normal text-gray-700 dark:text-gray-400 text-center'>
                        Our customers come first. Being responsive,
                        professional and reliable is why we are hired.
                        We aim to deliver on all promises, exceeding
                        customer expectations and making certain all
                        business decisions are made with the customer
                        in mind.
                     </p>
                  </Card>
               </div>
               <div className='max-w-sm py-2'>
                  <Card className=' shadow-xl'>
                     <Image
                        src='/images/employee.png'
                        alt='Employee'
                        width={100}
                        height={100}
                        className=' m-auto'
                     />
                     <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
                        Employees
                     </h5>
                     <p className='font-normal text-gray-700 dark:text-gray-400 text-center'>
                        Our employees are the face of our service.
                        They are at the front lines working with our
                        customers daily, and it is Lockwood’s duty to
                        serve our employees. This means designing a
                        culture centered around core values that
                        inspire, retain and grow the best talent.
                     </p>
                  </Card>
               </div>
            </div>
         </section>
      </>
   );
};

export default Mission;

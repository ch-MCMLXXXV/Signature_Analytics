import { Card } from 'flowbite-react';

const Mission = () => {
   return (
      <>
         <section className=''>
            <h1 className=' text-center font-bold text-3xl'>
               Mission Statement
            </h1>
            <div className=' py-5 md:flex md:flex-row md:gap-5 md:justify-evenly'>
               <div className='max-w-sm py-2'>
                  <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'>
                     <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        Service
                     </h5>
                     <p className='font-normal text-gray-700 dark:text-gray-400'>
                        Signature analytics is focused on service. We
                        serve – each other, the soldier, our
                        customers, our employees, our partners, our
                        vendors, and our community. Service is at the
                        center of our Core Values and Culture.
                     </p>
                  </Card>
               </div>
               <div className='max-w-sm py-2'>
                  <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'>
                     <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        Customers
                     </h5>
                     <p className='font-normal text-gray-700 dark:text-gray-400'>
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
                  <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'>
                     <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        Employees
                     </h5>
                     <p className='font-normal text-gray-700 dark:text-gray-400'>
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

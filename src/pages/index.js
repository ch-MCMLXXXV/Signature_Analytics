import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Experience from '@/components/Experience';
import Core from '@/components/Core';
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
         <main>
            <section>
               <Hero />
            </section>
            <section>
               <Experience />
               {/* <div>
                  <h3>Description of Experience:</h3>
                  <p>
                     20+ years of experience providing senior level
                     input and recommendations for cost estimating and
                     budget activities, inclusive of all program life
                     cycle phases IAW applicable DoD Directives, Army
                     & Missile Defense Agency regulations, and
                     policies. The following cost estimating and
                     budget activities included:
                  </p>
                  <div className=' p-10'>
                     <ul className=' list-outside list-disc'>
                        <li>
                           Drafting Independent Government Estimate
                        </li>
                        <li>Drafting Independent Cost Analyses</li>
                        <li>Program Office Estimates</li>
                        <li>
                           Cost Analysis Requirements Description
                        </li>
                        <li>Analysis of Alternatives</li>
                        <li>
                           Cost estimating activities in support of
                           the following representative areas:
                           <ul className=' list-inside list-disc'>
                              <li> Cost/acquisition teams</li>
                              <li> Design-to-Cost reviews </li>
                              <li>
                                 Source Selection Evaluation Boards
                              </li>
                              <li>
                                 Army acquisition process, to include
                                 Operating and Support (O&S) and Life
                                 Cycle Cost/Total Ownership cost
                                 activities
                              </li>
                           </ul>
                        </li>
                        <li>
                           Cost research projects to develop
                           estimating techniques for new
                           state-of-the-art technology
                        </li>
                        <li>
                           Operations research analysis in support of
                           cost effectiveness related studies, such as
                           <ul className=' list-inside list-disc'>
                              <li>Milestone Reviews</li>
                              <li>Life-Cycle Cost/Design-to-Cost</li>
                              <li>O&S Cost Reduction Analysis</li>
                              <li> Cost Risk Evaluation</li>
                              <li> Technical Risk Evaluation</li>
                              <li>
                                 {' '}
                                 Cost Estimating Relationship
                                 Methodologies
                              </li>
                              <li> Budget Preparation Support</li>
                              <li> Earned Value Management</li>
                              <li> Estimates at Completion</li>
                              <li> Analysis of variance reports</li>
                           </ul>
                        </li>
                        <li>
                           Perform risk analysis and develop program
                           risk assessment consistent with price,
                           Contractor capabilities, emerging
                           technologies, Contractor cost performance,
                           schedules, and integration requirements,
                           and incorporate Contractor cost performance
                           information into cost estimating
                           methodologies consistent with latest
                           reports.
                        </li>
                        <li>
                           Highly proficient with the using the
                           Automated Cost Estimating Integrated Tool
                           (ACEIT) to support the PM’s estimating
                           efforts.
                        </li>
                     </ul>
                  </div>
               </div> */}
            </section>
            <section>
               <Core />
               {/* <section className=' flex justify-center'>
               <div className=' outline bg-hero bg-cover bg-no-repeat w-1/5 h-40 flex items-center justify-center'>
                  <h2 className=' text-2xl'>Ethics and Integrity</h2>
               </div>
               <div className=' bg-office bg-cover w-1/5 h-40 flex items-center justify-center'>
                  <h2 className=' text-2xl'>Customer Commitment</h2>
               </div>
               <div className=' bg-office  bg-cover w-1/5 h-40 flex items-center justify-center'>
                  <h2 className=' text-2xl'>
                     Team and Family Environment
                  </h2>
               </div>
            </section> */}
            </section>
            <section className=''>
               <Mission />
               {/* <h1 className=' text-center font-bold text-3xl'>
                  Mission Statement
               </h1>
               <div className=' py-5 md:flex md:flex-row md:gap-5 md:justify-evenly'>
                  <div className='max-w-sm py-2'>
                     <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'>
                        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                           Service
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                           Signature analytics is focused on service.
                           We serve – each other, the soldier, our
                           customers, our employees, our partners, our
                           vendors, and our community. Service is at
                           the center of our Core Values and Culture.
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
                           professional and reliable is why we are
                           hired. We aim to deliver on all promises,
                           exceeding customer expectations and making
                           certain all business decisions are made
                           with the customer in mind.
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
                           They are at the front lines working with
                           our customers daily, and it is Lockwood’s
                           duty to serve our employees. This means
                           designing a culture centered around core
                           values that inspire, retain and grow the
                           best talent.
                        </p>
                     </Card>
                  </div>
               </div> */}
            </section>
            <section className=''>
               <About />
            </section>
         </main>
      </>
   );
}

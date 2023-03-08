import Image from 'next/image';

const Experience = () => {
   return (
      <>
         <section className=''>
            <div>
               <div className=' bg-red-800'>
                  <h3 className=' text-center text-5xl p-10 font-bold text-white '>
                     {' '}
                     Experience
                  </h3>
               </div>
               <p className=' tracking-tight text-center p-10 m-5'>
                  20+ years of experience providing senior level input
                  and recommendations for cost estimating and budget
                  activities, inclusive of all program life cycle
                  phases IAW applicable DoD Directives, Army & Missile
                  Defense Agency regulations, and policies. The
                  following cost estimating and budget activities
                  included:
               </p>
               <div className=' p-10 xl:flex xl:flex-wrap '>
                  <div className='py-5 xl:w-2/5 xl:flex-none xl:m-15 xl:p-5'>
                     <Image
                        src='/images/office3.avif'
                        width={500}
                        height={500}
                        alt='alt'
                        className='shadow-xl rounded-xl shadow-slate-400'
                     />
                  </div>
                  <article className='xl:w-2/5 xl:flex-none xl:m-20 p-5'>
                     <ul className=' list-outside list-square tracking-wide text-red-800'>
                        <li>
                           Drafting Independent Government Estimate
                        </li>
                        <li>Drafting Independent Cost Analyses</li>
                        <li>Program Office Estimates</li>
                        <li>
                           Cost Analysis Requirements Description
                        </li>
                        <li>Analysis of Alternatives</li>
                     </ul>
                  </article>
                  <article className='xl:w-2/5 xl:flex-none xl:m-20 p-5 '>
                     <ul className=' list-outside list-square tracking-normal'>
                        <li>
                           Cost estimating activities in support of
                           the following representative areas:
                           <ul className=' list-inside list-square tracking-wide'>
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
                     </ul>
                  </article>
                  <div className=' xl:w-2/5 xl:flex-none xl:m-10 p-5 '>
                     <Image
                        src='/images/office4.avif'
                        width={500}
                        height={500}
                        alt='alt'
                        className='shadow-xl rounded-xl shadow-slate-400'
                     />
                  </div>
                  <div className=' xl:w-2/5 xl:flex-none xl:m-15 p-5 '>
                     <Image
                        src='/images/office5.avif'
                        width={500}
                        height={500}
                        alt='alt'
                        className='shadow-xl rounded-xl shadow-slate-400'
                     />
                  </div>
                  <article className='xl:w-2/5 xl:flex-none xl:m-20 p-5'>
                     <ul className=' list-outside list-square tracking-normal'>
                        <li>
                           Cost research projects to develop
                           estimating techniques for new
                           state-of-the-art technology
                        </li>
                        <li>
                           Operations research analysis in support of
                           cost effectiveness related studies, such
                           as:
                           <ul className=' list-inside list-square tracking-wide'>
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
                     </ul>
                  </article>
                  <article className=' xl:w-2/5 xl:flex-none xl:m-20 p-5 tracking-tight '>
                     <ul className=' list-outside list-square'>
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
                  </article>
                  <div className=' xl:w-2/5 xl:flex-none xl:m-15 xl:p-5 '>
                     <Image
                        src='/images/office6.avif'
                        width={500}
                        height={500}
                        alt='alt'
                        className='shadow-xl rounded-xl shadow-slate-400'
                     />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Experience;

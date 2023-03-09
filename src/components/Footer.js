import { Footer } from 'flowbite-react';
import Image from 'next/image';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Foot = () => {
   return (
      <Footer container={true}>
         <div className=' w-full text-center '>
            <div className=' w-full justify-between sm:flex sm:items-center sm:justify-between '>
               {/* <Image
                  src='/images/logo3.png'
                  height={150}
                  width={150}
                  alt='Signature Analytics Logo'
               /> */}
               {/* <Footer.Brand
                  href='#'
                  src='/images/logo3.png'
                  height={300}
                  width={300}
                  alt='Signature Analytics Logo'
               /> */}
               {/* <Footer.LinkGroup>
                  <Footer.Link href='/About'>About</Footer.Link>
                  <Footer.Link href='/Contact'>Contact</Footer.Link>
                  <Footer.Link href='#'>Apply</Footer.Link>
               </Footer.LinkGroup> */}
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
               <Image
                  src='/images/builtbych.png'
                  height={150}
                  width={150}
                  alt='BuiltByCHarris'
               />
               <Footer.Copyright
                  by='Signature Analytics'
                  year={2023}
               />
               <div className=' mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                  <Footer.Icon href='#' icon={BsFacebook} />
                  <Footer.Icon href='#' icon={BsInstagram} />
                  <Footer.Icon href='#' icon={BsTwitter} />
               </div>
            </div>
         </div>
      </Footer>
   );
};

export default Foot;

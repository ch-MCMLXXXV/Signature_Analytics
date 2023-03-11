import React from 'react';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';

const Nav = () => {
   return (
      <Navbar fluid={true} rounded={true}>
         <Navbar.Brand href='/'>
            <Image
               src='/images/logo3.png'
               //    className='mr-3 h-6 sm:h-9'
               width={150}
               height={150}
               alt='Signature Analytics Logo'
            />
            {/* <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
               Flowbite
            </span> */}
         </Navbar.Brand>
         <div className='flex md:order-2'>
            <Navbar.Toggle />
         </div>
         <Navbar.Collapse>
            {/* <Navbar.Link href='/navbars' active={true}>
               Home
            </Navbar.Link>
            <Navbar.Link href='/navbars'>About</Navbar.Link>
            <Navbar.Link href='/navbars'>Services</Navbar.Link>
            <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
            <Navbar.Link href='/navbars'>Contact</Navbar.Link> */}
         </Navbar.Collapse>
      </Navbar>
   );
};

export default Nav;

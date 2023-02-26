import Nav from './Navbar';
import Foot from './Footer';

export default function Layout({ children }) {
   return (
      <>
         <Nav />
         {children}
         <Foot />
      </>
   );
}

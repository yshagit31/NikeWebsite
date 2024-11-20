import {  headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
   <header className='padding-x py-8 absolute w-full z-10'>
    <nav className='flex justify-between items-center max-container'>
       <a href='/'>  <img src={headerLogo} alt="logo" width={130} height={29}/> </a>
       <ul className='flex justify-center items-center flex-1 max-lg:hidden gap-16'>
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
            {item.label}
            </a>
          </li> ))}
       </ul>
      <img src={hamburger} alt="" className='h-6 w-6 lg:hidden'/>
    </nav>
   </header>
  )
}

export default Nav;

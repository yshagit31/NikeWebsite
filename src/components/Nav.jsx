import {  headerLogo} from '../assets/images';
import {close, hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {
  const [isOpen,setisOpen]=useState(false);
  return (
   <header className='padding-x py-8 absolute w-full max-lg:z-20 lg:z-10'>
    <nav className='flex justify-between items-center max-container'>
       <a href='/'>  
       <img src={headerLogo} alt="logo" width={130} height={29}/> 
       </a>
       <ul className='flex justify-center items-center flex-1 max-lg:hidden gap-16'>
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
            {item.label}
            </a>
          </li> ))}
       </ul>
      <img src={hamburger} alt="" className={`h-6 w-6 lg:hidden  ${isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}onClick={()=>(setisOpen(true))}/>

       {/* Mobile Navbar */}
      <ul className={`fixed top-0 right-0 bg-slate-200 bg-opacity-80 w-1/3 h-screen lg:hidden transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' :' translate-x-full'} `}>
      <a className='cursor-pointer' onClick={()=>(setisOpen(false))}> 
        <img src={close} alt="close icon" className='w-5 h-5 ml-auto mr-4 mt-5' /> </a>
      {navLinks.map((item)=>(
          <li key={item.label} >
            <a href={item.href} className='flex flex-col justify-evenly flex-1 font-montserrat my-10 ml-2 cursor-pointer'>
            {item.label}
            </a>
          </li> ))}
          </ul>
    </nav>
   </header>
  )
}

export default Nav;

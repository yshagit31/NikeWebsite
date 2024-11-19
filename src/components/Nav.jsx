// import {headerLogo} from '../assets/images';
import headerLogo from '../assets/images/big-shoe1'
// import {hamburger} from '../assets/images/shoe8.svg';
import {shoe8} from '../assets/images/index';

const Nav = () => {
  return (
   <header>
    <nav>
       <a href='/'>  <img href={headerLogo} alt="logo"/> </a>
    <img src={hamburger} alt="" className='h-10 w-10'/>
    </nav>
   </header>
  )
}

export default Nav;

import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';

export default function NavMobile(){
  const { openCloseNav, setOpenCloseNav, activePageIndicator } = useContext(AuthContext);

  return(
    <nav className="w-full min-h-screen absolute top-0 bg-grayColor" >
      <button 
        className='flex w-full justify-end mt-1'
        onClick={ () => setOpenCloseNav(!openCloseNav) } >
        <IoIosClose 
          size={56} color='#FFF' 
        />
      </button>

      <ul className='flex flex-col gap-11 min-h-screen items-center justify-center' >
        <li>
          <Link 
            to='/start'
            className='text-xl' 
            style={{ color: activePageIndicator === '/start' ? '#ED3237' : '#FFF' }} >
            Início
          </Link>
        </li>
        <li>
          <Link 
            to='/products'
            className='text-xl' 
            style={{ color: activePageIndicator === '/products' ? '#ED3237' : '#FFF' }} >
            Produtos
          </Link>
        </li>
        <li>
          <Link 
            to='/whoweare'
            className='text-xl' 
            style={{ color: activePageIndicator === '/whoweare' ? '#ED3237' : '#FFF' }} >
            Quem somos
          </Link>
        </li>
        <li>
          <Link 
            to='/contacts'
            className='text-xl' 
            style={{ color: activePageIndicator === '/contacts' ? '#ED3237' : '#FFF' }} >
            Contatos
          </Link>
        </li>
        <li>
          <Link 
            to='/ordernow'
            className='text-xl' 
            style={{ color: activePageIndicator === '/ordernow' ? '#ED3237' : '#FFF' }} >
            Peça Já
          </Link>
        </li>
      </ul>
    </nav>
  );
};
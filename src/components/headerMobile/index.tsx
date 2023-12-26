import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import logoImage01 from '../../assets/logo1.svg';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function HeaderMobile(){
  const { openCloseNav, setOpenCloseNav } = useContext(AuthContext);

  return(
    <header className='w-full bg-whiteColor flex items-center justify-between pl-[0.68em] pr-4' >
      <Link to='/start' >
        <img
          src={ logoImage01 }
          alt='Logo Gás Service'
        />
      </Link>

      <button onClick={ ()=> setOpenCloseNav(!openCloseNav) } >
        <FiMenu size={30} color='#000' />
      </button>
    </header>
  );
};
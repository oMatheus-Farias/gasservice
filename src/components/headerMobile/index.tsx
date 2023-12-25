import logoImage01 from '../../assets/logo1.svg';
import { FiMenu } from "react-icons/fi";

export default function HeaderMobile(){
  return(
    <header className='w-full bg-whiteColor flex items-center justify-between pl-[0.68em] pr-4' >
      <img
        src={ logoImage01 }
        alt='Logo Gás Service'
      />

      <button>
        <FiMenu size={30} color='#000' />
      </button>
    </header>
  );
};
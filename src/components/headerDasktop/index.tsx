import logoImage01 from '../../assets/logo1.svg';
import { Link } from 'react-router-dom';

export default function HeaderMobile(){
  return(
    <header className='w-full bg-whiteColor flex items-center justify-between pl-[0.68em] pr-4' >
      <img
        src={ logoImage01 }
        alt='Logo Gás Service'
      />

      <nav>
        <ul className='flex gap-5' >
          <li><Link to='/start' >Início</Link></li>
          <li><Link to='/products' >Produtos</Link></li>
          <li><Link to='/whoweare' >Quem somos</Link></li>
          <li><Link to='/contacts' >Contatos</Link></li>
          <li><Link to='/ordernow' >Peça Já</Link></li>
        </ul>
      </nav>
    </header>
  );
};
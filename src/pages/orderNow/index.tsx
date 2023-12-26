import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

import Background from '../../components/background';
import HeaderMobile from '../../components/headerMobile';
import HeaderDasktop from '../../components/headerDasktop';
import Container from '../../components/container';
import NavMobile from '../../components/navMobile';

export default function OrderNow(){
  const { screenSize, setActivePageIndicator, openCloseNav, setOpenCloseNav } = useContext(AuthContext);

  useEffect(() => {
    setActivePageIndicator('/ordernow');
    setOpenCloseNav(false);

    return () => {
      setActivePageIndicator('');
    };
  }, []);

  return(
    <Background>
      { screenSize !== null ? screenSize ? <HeaderDasktop/> : <HeaderMobile/> : ''}

      <Container>
        <div className='flex flex-col items-center h-heigthScreen' >
          <h1 className='mt-8 text-whiteColor text-2xl font-semibold' >
            Clique e
            <span className='text-redColor uppercase' > Peça agora</span>
            <span>!</span>
          </h1>

          <h2 className='text-whiteColor text-[11px] mt-5 sm:text-lg lg:text-xl' >
            Entre em contato no botão abaixo e não perca as promoções!!
          </h2>

          <div className='w-full h-full flex justify-center items-center max-w-[520px]' >
            <button className='bg-redColor w-full py-7 rounded' >
              <a className='text-whiteColor font-bold text-3xl' >Fazer meu pedido</a>
            </button>
          </div>
        </div>
      </Container>
      { !screenSize && openCloseNav && <NavMobile/> }
    </Background>
  );
};
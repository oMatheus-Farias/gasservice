import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

import Background from '../../components/background';
import HeaderMobile from '../../components/headerMobile';
import HeaderDasktop from '../../components/headerDasktop';
import Container from '../../components/container';
import NavMobile from '../../components/navMobile';

export default function Contacts(){
  const { screenSize, setActivePageIndicator, openCloseNav, setOpenCloseNav} = useContext(AuthContext);

  useEffect(() => {
    setActivePageIndicator('/contacts');
    setOpenCloseNav(false);

    return () => {
      setActivePageIndicator('');
    };
  }, []);

  return(
    <Background>
      { screenSize !== null ? screenSize ? <HeaderDasktop/> : <HeaderMobile/> : ''}

      <Container>
        <h1 className='mt-8 text-whiteColor text-lg text-center font-semibold sm:text-2xl' >
          Clique, converse e conte conosco
          <span className='text-redColor' >:</span>
        </h1>
      </Container>
      { !screenSize && openCloseNav && <NavMobile/> }
    </Background>
  );
};
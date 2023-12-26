import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

import Background from '../../components/background';
import HeaderMobile from '../../components/headerMobile';
import HeaderDasktop from '../../components/headerDasktop';
import Container from '../../components/container';
import NavMobile from '../../components/navMobile';

export default function Products(){
  const { screenSize, setActivePageIndicator, openCloseNav, setOpenCloseNav } = useContext(AuthContext);

  useEffect(() => {
    setActivePageIndicator('/products');
    setOpenCloseNav(false);

    return () => {
      setActivePageIndicator('');
    };
  }, []);

  return(
    <Background>
      { screenSize !== null ? screenSize ? <HeaderDasktop/> : <HeaderMobile/> : ''}

      <Container>
        <h1>Page Products</h1>
      </Container>
      { !screenSize && openCloseNav && <NavMobile/> }
    </Background>
  );
};
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

import Background from '../../components/background';
import HeaderMobile from '../../components/headerMobile';
import HeaderDasktop from '../../components/headerDasktop';
import Container from '../../components/container';
import NavMobile from '../../components/navMobile';

export default function WhoWeAre(){
  const { screenSize, setActivePageIndicator, openCloseNav, setOpenCloseNav } = useContext(AuthContext);

  useEffect(() => {
    setActivePageIndicator('/whoweare');
    setOpenCloseNav(false);

    return () => {
      setActivePageIndicator('');
    };
  }, []);

  return(
    <Background>
      { screenSize !== null ? screenSize ? <HeaderDasktop/> : <HeaderMobile/> : ''}

      <Container>
        <h1>Page WhoWeAre</h1>
      </Container>
      { !screenSize && openCloseNav && <NavMobile/> }
    </Background>
  );
};
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

import Background from '../../components/background';
import HeaderMobile from '../../components/headerMobile';
import HeaderDasktop from '../../components/headerDasktop';
import Container from '../../components/container';

export default function OrderNow(){
  const { screenSize, setActivePageIndicator } = useContext(AuthContext);

  useEffect(() => {
    setActivePageIndicator('/ordernow');

    return () => {
      setActivePageIndicator('');
    };
  }, []);

  return(
    <Background>
      { screenSize !== null ? screenSize ? <HeaderDasktop/> : <HeaderMobile/> : ''}

      <Container>
        <h1>Page OrderNow</h1>
      </Container>
    </Background>
  );
};
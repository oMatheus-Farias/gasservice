import Background from '../../components/background';
import HeaderMobile from '../../components/headerMobile';
import Container from '../../components/container';

export default function Start(){
  return(
    <Background>
      <HeaderMobile/>

      <Container>
        <h1>Page Start</h1>
      </Container>
    </Background>
  );
};
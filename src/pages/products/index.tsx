import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

import p13Image from '../../assets/p13.png';
import p20Image from '../../assets/p20.png';
import p45Image from '../../assets/p45.png';

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
        <h1 className='mt-8 text-whiteColor text-2xl text-center font-semibold' >
          Produtos
          <span className='text-redColor' >:</span>
        </h1>

        <div className='mt-8 w-full grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-3' >
          <section className='mx-auto' >
            <img
              src={ p13Image }
              alt='Imagem cilindro de gás p13'
            />

            <div className='max-w-[400px]' >
              <h2 className='mt-3 text-redColor' >P13:</h2>
              <p className='text-whiteColor text-justify' >O botijão de 13 quilos, popularmente conhecido como “gás de cozinha” ou “botijão doméstico”, é o formato mais conhecido de comercialização do GLP e destina-se basicamente aos lares para preparação de alimentos.</p>
            </div>
          </section>

          <section className='mx-auto' >
            <img
              src={ p20Image }
              alt='Imagem cilindro de gás p20'
            />

            <div className='max-w-[400px]' >
              <h2 className='mt-3 text-redColor' >P20:</h2>
              <p className='text-whiteColor text-justify' >Utilizado em empilhadeiras da área industrial, o P20 (20 kg) serve como um combustível eficiente e se diferencia por ficar na posição horizontal, e não na vertical, como os demais modelos.</p>
            </div>
          </section>

          <section className='mx-auto' >
            <img
              src={ p45Image }
              alt='Imagem cilindro de gás p45'
            />

            <div className='max-w-[400px]' >
              <h2 className='mt-3 text-redColor' >P45:</h2>
              <p className='text-whiteColor text-justify' >Com 3,5 vezes mais conteúdo que o P13, é o mais utilizado em estabelecimentos comerciais, principalmente restaurantes e cozinhas industriais, em que a utilização do gás é intensa.</p>
            </div>
          </section>
        </div>
      </Container>
      { !screenSize && openCloseNav && <NavMobile/> }
    </Background>
  );
};
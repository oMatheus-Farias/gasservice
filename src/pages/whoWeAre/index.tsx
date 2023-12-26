import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

import logoImage03 from '../../assets/logo3.png';

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
        <h1 className='mt-8 text-whiteColor text-2xl text-center font-semibold' >
          Quem somos
          <span className='text-redColor' >:</span>
        </h1>

        <main 
          className='w-full px-8 py-6 mt-6 bg-primary rounded flex flex-col justify-center items-center max-w-[45em] mx-auto lg:flex-row lg:max-w-[72.5em] lg:gap-28 lg:py-16' 
        >
          <img
            src={ logoImage03 }
            alt='Logo Gás Service e-commerce'
          />

          <div className='max-w-[31.25em]' >
            <p className='mt-6 text-whiteColor text-justify lg:mt-0' >
              A Gás Service é muito mais que um sistema de gás; somos a expressão da simplicidade e modernização no universo da compra de GLP. Com a recente implementação do nosso novo sistema, estamos solidificando nossa estrutura para oferecer atendimento em todo o território nacional, proporcionando conveniência e eficiência a todos os nossos clientes.
              Diferentemente de um e-commerce tradicional, a Gaservice é um sistema integrado com diversas empresas interessadas em disponibilizar seus produtos em nossa plataforma. Isso significa que não somos apenas um ponto de venda, mas sim um ecossistema conectado, unindo fornecedores e consumidores em uma experiência única.
              Nosso foco primário está no website, projetado para ser sua principal porta de entrada para a compra de gás com facilidade e segurança. Entretanto, estamos em processo de estabilização para estender nossa presença ao universo mobile, planejando em breve lançar um aplicativo para celular que oferecerá ainda mais praticidade aos nossos usuários.
              Ao escolher a Gaservice, você não está apenas adquirindo gás; está se conectando a uma rede de confiança, inovação e conveniência que abrange todo o país. Estamos aqui para simplificar sua vida e modernizar a forma como você obtém seu gás. 
            </p>

            <p className='mt-4 text-whiteColor font-semibold text-justify' >
              Fundada por, Petrick Wilker e Gian Victor.
            </p>
          </div>
        </main>
      </Container>
      { !screenSize && openCloseNav && <NavMobile/> }
    </Background>
  );
};
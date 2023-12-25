import Background from '../../components/background';
import HeaderMobile from '../../components/headerMobile';
import Container from '../../components/container';

import mainImage from '../../assets/main-image.png';
import companyImage from '../../assets/company.png';

export default function Start(){
  return(
    <Background>
      <HeaderMobile/>

      <Container>
        <p className='text-whiteColor mt-4 text-sm' >Bem-vindo(a), Matheus</p>

        <h1 className='text-redColor text-[0.81em] text-center mt-8 sm:text-xl' >
          Gás Service
          <span className='text-whiteColor' >: Onde qualidade e segurança se encontram!</span>
        </h1>

        <main className='w-full bg-redColor py-6 rounded mt-5 flex flex-col items-center' >
          <div className='px-8' >
            <img
              className='mx-auto'
              src={ mainImage }
              alt='Homem com botijão no ombro'
            />

            <p className='mt-5 text-whiteColor text-justify max-w-[700px]' >
              Na vanguarda da inovação no mercado, a Gás Service destaca-se como um modelo exemplar de excelência no engarrafamento, na distribuição e na comercialização de Gás Liquefeito de Petróleo (GLP) destinado a residências e empresas. Aqui, compromisso com a qualidade e a segurança não são apenas promessas, mas sim fundamentos que norteiam todas as nossas operações.
              Nossa busca incessante pela inovação não só nos coloca à frente das tendências do setor, mas também garante que cada cliente desfrute de serviços que transcendem as expectativas. Seja para o conforto do lar ou para atender às demandas corporativas, a Gaservice é sinônimo de confiança, eficiência e comprometimento.
            </p>
          </div>

          <div className='min-h-[0.12em] w-full bg-grayColor my-5' ></div>

          <div className='px-8' >
            <img
              className='mx-auto'
              src={ companyImage }
              alt='Empresa Gás Service'
            />

            <p className='mt-5 text-whiteColor text-justify max-w-[700px]' >
              Convidamos você a fazer parte da nossa história, onde cada botijão entregue é mais que um produto, é a garantia de um serviço que prioriza a satisfação e a tranquilidade dos nossos clientes. Sinta-se em casa na Gás Service, onde a qualidade se encontra com a segurança para proporcionar a você a melhor experiência em Gás Liquefeito de Petróleo.
            </p>
          </div>
        </main>
      </Container>
    </Background>
  );
};
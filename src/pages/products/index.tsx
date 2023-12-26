import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

import Background from '../../components/background';
import HeaderMobile from '../../components/headerMobile';
import HeaderDasktop from '../../components/headerDasktop';
import Container from '../../components/container';
import NavMobile from '../../components/navMobile';
import CardProduct from '../../components/cardProduct';

export default function Products(){
  const { screenSize, setActivePageIndicator, openCloseNav, setOpenCloseNav, products } = useContext(AuthContext);

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
          { products.map((item, index) => {
            return(
              <div className='mx-auto' key={ index } >
                <CardProduct
                  image={ item.image }
                  alternative={ item.alternative }
                  title={ item.title }
                  description={ item.description }
                />
              </div>
            )
          }) }
        </div>
      </Container>
      { !screenSize && openCloseNav && <NavMobile/> }
    </Background>
  );
};
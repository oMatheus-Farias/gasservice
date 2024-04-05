import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

import groupImage from "../../assets/group-images.png";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

import Background from "../../components/background";
import HeaderMobile from "../../components/headerMobile";
import HeaderDasktop from "../../components/headerDasktop";
import Container from "../../components/container";
import NavMobile from "../../components/navMobile";

export default function Contacts() {
  const { screenSize, setActivePageIndicator, openCloseNav, setOpenCloseNav } =
    useContext(AuthContext);

  useEffect(() => {
    setActivePageIndicator("/contacts");
    setOpenCloseNav(false);

    return () => {
      setActivePageIndicator("");
    };
  }, []);

  return (
    <Background>
      {screenSize !== null ? (
        screenSize ? (
          <HeaderDasktop />
        ) : (
          <HeaderMobile />
        )
      ) : (
        ""
      )}

      <Container>
        <h1 className="mt-8 text-whiteColor text-lg text-center font-semibold sm:text-2xl">
          Clique, converse e conte conosco
          <span className="text-redColor">:</span>
        </h1>

        <div className="md:flex md:justify-between md:items-center md:max-w-[55.62em] md:mx-auto md:mt-14">
          <section className="mt-8 flex flex-col gap-9">
            <div className="flex items-center gap-3">
              <FaWhatsapp size={48} color="#ED3237" />
              <p className="text-whiteColor text-lg">
                Whatsapp (11) 99387-9835
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook size={48} color="#ED3237" />
              <p className="text-whiteColor text-lg">
                Facebook Gasservice Oficial
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram size={48} color="#ED3237" />
              <p className="text-whiteColor text-lg">
                Instagram Gasservice Oficial
              </p>
            </div>
          </section>

          <div className="flex justify-center">
            <img
              className="mt-12"
              src={groupImage}
              alt="Imagem dupla cilindros de gás"
            />
          </div>
        </div>
      </Container>
      {!screenSize && openCloseNav && <NavMobile />}
    </Background>
  );
}

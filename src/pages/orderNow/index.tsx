import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

import Background from "../../components/background";
import HeaderMobile from "../../components/headerMobile";
import HeaderDasktop from "../../components/headerDasktop";
import Container from "../../components/container";
import NavMobile from "../../components/navMobile";
import toast from "react-hot-toast";

export default function OrderNow() {
  const productsList = [
    {
      id: 1,
      name: "Botijão de gás P13",
      value: "P13",
    },
    {
      id: 2,
      name: "Botijão de gás P20",
      value: "P20",
    },
    {
      id: 3,
      name: "Botijão de gás P45",
      value: "P45",
    },
  ];

  const { screenSize, setActivePageIndicator, openCloseNav, setOpenCloseNav } =
    useContext(AuthContext);
  //@ts-ignore
  const [productSelected, setProductSelected] = useState(productsList[0].value);
  const [quantity, setQuantity] = useState<string>("1");
  const [listProductsSelecteds, setListProdusctsSelecteds] = useState<string[]>(
    []
  );

  const handleDeleteProducts = (index: number) => {
    const newList = listProductsSelecteds.filter((_, i) => i !== index);
    setListProdusctsSelecteds(newList);
  };

  const handleProductSelected = (e: string) => {
    setProductSelected(e);
    setListProdusctsSelecteds((prev) => {
      if (prev.includes(e)) {
        return prev;
      }

      return [...prev, e];
    });
  };

  const handleQuantity = (e: string) => {
    setQuantity(e);
  };

  const message = `Olá, gostaria de fazer o seguinte pedido: Produto(s): Botijão de gás ${listProductsSelecteds.join(
    ", "
  )}, quantidade de cada: ${quantity}`;

  const handleSubmitOrderNow = () => {
    if (quantity === "" || quantity <= "0") {
      return toast.error("Digite uma quantidade válida!");
    }

    if (listProductsSelecteds.length === 0) {
      return toast.error("Selecione pelo menos um produto!");
    }

    return window.open(
      `https://wa.me/5511993879835/?text=${message}`,
      "_blank"
    );
  };

  useEffect(() => {
    setActivePageIndicator("/ordernow");
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
        <div className="flex flex-col items-center h-heigthScreen">
          <h1 className="mt-8 text-whiteColor text-2xl font-semibold">
            Clique e<span className="text-redColor uppercase"> Peça agora</span>
            <span>!</span>
          </h1>

          <h2 className="text-whiteColor text-[11px] mt-5 sm:text-lg lg:text-xl">
            Entre em contato abaixo e não perca as promoções!!
          </h2>

          <div className="w-full h-full flex flex-col justify-center items-center max-w-[520px] gap-6">
            <form className="flex flex-col w-full gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-lg text-whiteColor font-semibold">
                  Selecione os produtos que deseja
                </label>
                <select
                  className="w-full rounded py-2 px-3"
                  onChange={(e) => handleProductSelected(e.target.value)}
                >
                  {productsList.map((product) => (
                    <option key={product.id} value={product.value}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-whiteColor text-lg font-semibold">
                  Produtos selecionados
                </label>

                <div className="w-full rounded py-2 px-3 bg-whiteColor min-h-10 max-h-40 overflow-auto">
                  {listProductsSelecteds.length > 0 ? (
                    listProductsSelecteds.map((product, index) => (
                      <div key={index} className="flex justify-between">
                        <p>Botijão de gás {product}</p>
                        <span
                          className="cursor-pointer"
                          onClick={() => handleDeleteProducts(index)}
                        >
                          X
                        </span>
                      </div>
                    ))
                  ) : (
                    <p>Nenhum produto selecionado</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg text-whiteColor font-semibold">
                  Quantidade
                </label>
                <input
                  name="quantity"
                  type="number"
                  min="1"
                  placeholder="Digite a quantidade"
                  value={quantity}
                  onChange={(e) => handleQuantity(String(e.target.value))}
                  className="w-full rounded py-2 px-3"
                />
              </div>
            </form>

            <button
              className="bg-redColor p-3 rounded hover:scale-105 transition-all duration-200 text-whiteColor font-bold text-xl"
              onClick={handleSubmitOrderNow}
            >
              Fazer meu pedido
            </button>
          </div>
        </div>
      </Container>
      {!screenSize && openCloseNav && <NavMobile />}
    </Background>
  );
}

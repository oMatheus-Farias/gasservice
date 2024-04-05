import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import logoImage01 from "../../assets/logo1.svg";
import { Link } from "react-router-dom";

export default function HeaderMobile() {
  const { activePageIndicator } = useContext(AuthContext);

  return (
    <header className="h-24 w-full bg-whiteColor flex items-center justify-between pl-[0.68em] pr-4">
      <Link to="/start">
        <img src={logoImage01} alt="Logo Gás Service" className="h-24 w-24" />
      </Link>

      <nav>
        <ul className="flex gap-5 text-lg font-semibold">
          <li>
            <Link
              to="/start"
              style={{
                color: activePageIndicator === "/start" ? "#ED3237" : "#000",
              }}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              style={{
                color: activePageIndicator === "/products" ? "#ED3237" : "#000",
              }}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              to="/whoweare"
              style={{
                color: activePageIndicator === "/whoweare" ? "#ED3237" : "#000",
              }}
            >
              Quem somos
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              style={{
                color: activePageIndicator === "/contacts" ? "#ED3237" : "#000",
              }}
            >
              Contatos
            </Link>
          </li>
          <li>
            <Link
              to="/ordernow"
              style={{
                color: activePageIndicator === "/ordernow" ? "#ED3237" : "#000",
              }}
            >
              Peça Já
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

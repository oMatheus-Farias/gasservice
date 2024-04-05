import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full p-5 bg-offWhite flex flex-col justify-center items-center gap-8">
      <p className="opacity-80 lg:text-lg">
        Gásservise © todos os direitos reservados
      </p>

      <div className="flex justify-between w-full max-w-[700px]">
        <section className="flex flex-col items-center gap-1">
          <FaWhatsapp color="#ED3237" className="text-3xl lg:text-4xl" />
          <p className="text-xs sm:text-base lg:text-lg">11 94002-8922</p>
        </section>

        <section className="flex flex-col items-center gap-1">
          <FaFacebook color="#ED3237" className="text-3xl lg:text-4xl" />
          <p className="text-xs sm:text-base lg:text-lg">Gasservice Oficial</p>
        </section>

        <section className="flex flex-col items-center gap-1">
          <FaInstagram color="#ED3237" className="text-3xl lg:text-4xl" />
          <p className="text-xs sm:text-base lg:text-lg">Gasservice Oficial</p>
        </section>
      </div>
    </footer>
  );
}

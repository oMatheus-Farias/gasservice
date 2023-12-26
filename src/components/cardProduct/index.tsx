interface CardProps{
  image: string,
  alternative: string,
  title: string,
  description: string,
};

export default function CardProduct({ image, alternative, title, description }: CardProps){
  return(
    <section>
      <img
        src={ image }
        alt={ alternative }
      />

      <div className='max-w-[25em]' >
        <h2 className='mt-3 text-redColor' >{ `${title}:` }</h2>
        <p className='text-whiteColor text-justify' >{ description }</p>
      </div>
    </section>
  );
};
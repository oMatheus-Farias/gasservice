interface CardProps {
  image: string;
  alternative: string;
  title: string;
  description: string;
}

export default function CardProduct({
  image,
  alternative,
  title,
  description,
}: CardProps) {
  return (
    <section>
      <img src={image} alt={alternative} />

      <div className="max-w-[25em] flex flex-col gap-4">
        <h2 className="mt-3 text-redColor w-fit p-2 border border-solid border-white rounded-2xl text-lg">{`${title}:`}</h2>
        <p className="text-whiteColor text-start text-lg">{description}</p>
      </div>
    </section>
  );
}

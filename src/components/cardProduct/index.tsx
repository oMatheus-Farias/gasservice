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
        <h2 className="mt-3 text-whiteColor w-fit text-xl font-semibold">{`${title}:`}</h2>
        <p className="text-offWhite text-start text-lg">{description}</p>
      </div>
    </section>
  );
}

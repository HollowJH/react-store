export function Hero({first, second}) {
  return (
    <>
      <section className="h-[200px] bg-hero-img bg-cover bg-top flex justify-center">
        <article className="w-[1080px] flex flex-col items-start justify-center pl-5">
          <span className="text-white font-bold text-[40px]">{first}</span>
          <span className="text-white font-bold text-[100px]/[80px]">{second}</span>
        </article>
      </section>
    </>
  );
}

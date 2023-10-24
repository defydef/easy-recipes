import HeroImage from "./svg-images/HeroImage";

function Hero() {
  return (
    <section className="p-5 flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-xl">Cooking made simple</h1>
      <HeroImage />
    </section>
  );
}

export default Hero;

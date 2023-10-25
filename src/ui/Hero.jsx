import HeroImage from "./svg-images/HeroImage";
import ChefImage from "./svg-images/ChefImage";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center py-5 bg-gradient-to-r bg-amber-100">
      <h1 className="font-bold text-3xl font-['Oswald'] tracking-wide">
        Cooking made simple
      </h1>
      <div className="flex justify-evenly gap-x-10 items-start p-8 ">
        <HeroImage />
        <ChefImage />
      </div>
    </section>
  );
}

export default Hero;

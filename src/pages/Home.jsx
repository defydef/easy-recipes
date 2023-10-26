import Hero from "../ui/Hero";
import Recipe from "../ui/Recipe";

function Home() {
  return (
    <>
      <Hero />
      <div className="p-5 flex flex-col gap-5">
        <h1 className="font-bold text-xl">Recipes for you</h1>
        <Recipe />
      </div>
    </>
  );
}

export default Home;

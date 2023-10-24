import Hero from "../ui/Hero";
import MenuItem from "../ui/MenuItem";

function Home() {
  return (
    <>
      <Hero />
      <div className="p-5 flex flex-col gap-5">
        <h1 className="font-bold text-xl">Cooking made simple</h1>
        <MenuItem />
      </div>
    </>
  );
}

export default Home;

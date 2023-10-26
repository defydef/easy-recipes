import Hero from "../ui/Hero";
import Recipe from "../ui/Recipe";
import { useRecipe } from "../features/recipes/RecipeContext";

function Home() {
  const { recipes } = useRecipe();
  return (
    <>
      <Hero />
      <div className="p-7 flex flex-col gap-3">
        <h1 className="font-bold text-xl mb-5">Recipes for you</h1>
        <article className="grid md:grid-cols-3 md:gap-6 grid-cols-2 gap-3">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </article>
      </div>
    </>
  );
}

export default Home;

import { useRecipe } from "../features/recipes/RecipeContext";
import Recipe from "./Recipe";

function Recipes() {
  const { recipes } = useRecipe();
  return (
    <div className="p-7 flex flex-col gap-3">
      <h1 className="font-bold text-xl mb-5">Recipes for you</h1>
      <article className="grid md:grid-cols-3 md:gap-6 grid-cols-2 gap-3">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </article>
    </div>
  );
}

export default Recipes;

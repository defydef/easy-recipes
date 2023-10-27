import { useState } from "react";
import { useRecipe } from "../features/recipes/RecipeContext";
import Recipe from "./Recipe";

function Recipes() {
  const { recipes } = useRecipe();
  const [maxDisplayedItems, setMaxDisplayedItems] = useState(5);
  const displayedRecipes =
    recipes.length > maxDisplayedItems
      ? recipes.slice(0, maxDisplayedItems)
      : recipes;
  const isAllItemsDisplayed = recipes.length === displayedRecipes.length;

  return (
    <div className="p-7 flex flex-col gap-3">
      <h1 className="font-bold text-xl mb-5">Recipes for you</h1>
      <article className="grid md:grid-cols-3 md:gap-6 grid-cols-2 gap-3">
        {displayedRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
        {!isAllItemsDisplayed && (
          <button onClick={() => setMaxDisplayedItems(maxDisplayedItems + 5)}>
            Load more...
          </button>
        )}
      </article>
    </div>
  );
}

export default Recipes;

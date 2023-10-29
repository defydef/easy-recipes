import { useState } from "react";
import { useRecipe } from "../features/recipes/RecipeContext";
import Recipe from "./Recipe";
import Loader from "./Loader";
import Button from "./Button";

function Recipes() {
  const { recipes, status } = useRecipe();
  const [maxDisplayedItems, setMaxDisplayedItems] = useState(6);
  const displayedRecipes =
    recipes.length > maxDisplayedItems
      ? recipes.slice(0, maxDisplayedItems)
      : recipes;
  const isAllItemsDisplayed = recipes.length === displayedRecipes.length;

  return (
    <>
      {status === "loading" && <Loader />}
      <div className="p-5 flex flex-col gap-5">
        <h1 className="font-bold text-xl">Recipes for you</h1>
        <article className="grid md:grid-cols-3 md:gap-6 grid-cols-2 gap-4">
          {displayedRecipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </article>
        {!isAllItemsDisplayed && (
          <Button onClick={() => setMaxDisplayedItems(maxDisplayedItems + 5)}>
            Load more...
          </Button>
        )}
      </div>
    </>
  );
}

export default Recipes;

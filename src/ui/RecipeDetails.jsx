import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../features/recipes/RecipeContext";
import Loader from "./Loader";

function RecipeDetails() {
  const { id } = useParams();
  const { currentRecipe, getCurrentRecipe, status, isLoading } = useRecipe();
  const { name, ingredients, cookingTime, photoName } = currentRecipe;

  useEffect(
    function () {
      getCurrentRecipe(id);
    },
    [id, getCurrentRecipe]
  );

  if (status === "loading" || isLoading) return <Loader />;

  return (
    <section className="p-5 flex flex-col gap-3">
      <h1 className="font-bold text-3xl cursor-pointer hover:text-amber-600">
        {name}
      </h1>
      <p className="text-sm sm:text-base">
        ⏱️ Cooking time: {cookingTime} mins
      </p>
      <img src={photoName} className="w-max sm:w-7/12 rounded-md m-auto" />

      <h2 className="text-lg font-semibold">Ingredients</h2>
      <ul className="flex gap-1 flex-col">
        {ingredients?.map((ingredient, index) => (
          <li key={index} className="flex gap-x-1">
            <input type="checkbox" className="mr-3" />
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold">Instructions</h2>
    </section>
  );
}

export default RecipeDetails;

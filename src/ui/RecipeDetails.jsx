import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../features/recipes/RecipeContext";
import Loader from "./Loader";

function RecipeDetails() {
  const { id } = useParams();
  const { currentRecipe, getCurrentRecipe, status } = useRecipe();

  console.log(currentRecipe);

  useEffect(
    function () {
      getCurrentRecipe(id);
    },
    [id, getCurrentRecipe]
  );

  if (status === "loading") return <Loader />;

  return <div>recipe details {currentRecipe?.id}</div>;
}

export default RecipeDetails;

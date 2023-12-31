import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Recipe({ recipe }) {
  const currentUrl = window.location.href;
  const urlPrefix = currentUrl.endsWith("/recipes") ? "" : "recipes/";
  const isTrailingSlash = currentUrl.endsWith("/");
  return (
    <div className="flex flex-col border-stone-300 border-solid border rounded-md">
      <div className="max-h-[300px] overflow-clip">
        <img
          src={
            isTrailingSlash
              ? `${recipe.photoName}`
              : `recipes/${recipe.photoName}`
          }
          width="450px"
          className="rounded-[5px]"
        />
      </div>
      <div className="sm:p-5 p-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="font-bold sm:text-xl cursor-pointer hover:text-amber-600">
            <Link to={`${urlPrefix}${recipe.id}`}>{recipe.name}</Link>
          </div>
          <div className="hidden sm:block">
            <span className="border-solid border border-amber-800 rounded-md py-1 px-1.5 bg-amber-300 text-amber-800 text-xs sm:text-sm">
              {recipe.category}
            </span>
          </div>
        </div>
        <div className="text-stone-600 text-xs">
          ⏱️ {recipe.cookingTime} mins
        </div>
      </div>
    </div>
  );
}

export default Recipe;

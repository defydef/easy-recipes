/* eslint-disable react/prop-types */
function Recipe({ recipe }) {
  return (
    <div className="flex flex-col border-stone-300 border-solid border rounded-md">
      <div className="max-h-[180px] overflow-clip">
        <img src={recipe.photoName} width="500px" />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="font-bold text-xl">{recipe.name}</div>
          <div>
            <span className="border-solid border border-amber-800 rounded-md py-1 px-1.5 bg-amber-300 text-amber-800 font-bold text-sm">
              Category
            </span>
          </div>
        </div>
        <div className="text-stone-600 text-sm">Cooking time</div>
      </div>
    </div>
  );
}

export default Recipe;

function MenuItem() {
  return (
    <div className="flex flex-col gap-2 border-stone-300 border-solid border w-1/3 rounded-md overflow-hidden">
      <img src="recipes/brownies.jpeg" width="500px" />

      <div className="flex">
        <div>Title</div>
        <div>
          <span>Category</span>
        </div>
      </div>
      <div>Cooking time</div>
    </div>
  );
}

export default MenuItem;

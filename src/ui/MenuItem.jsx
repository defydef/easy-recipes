function MenuItem() {
  return (
    <div className="flex flex-col gap-2 border-stone-300 p-5 border-solid border">
      <img />
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

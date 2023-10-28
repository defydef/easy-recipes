function Button({ children, onClick }) {
  return (
    <button
      className="w-max px-3 py-2 bg-amber-200 rounded-md text-amber-800 hover:bg-amber-300 mx-auto my-3"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

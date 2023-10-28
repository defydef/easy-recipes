function Input({ placeholder }) {
  return (
    <input
      className="border-solid border-yellow-300 rounded shadow-sm px-2 focus:outline-none transition duration-300 all focus:shadow-lg cursor-pointer py-5 h-8 w-1/2 sm:w-72 bg-slate-200 focus:bg-slate-50 hidden sm:block"
      placeholder={placeholder}
    />
  );
}

export default Input;

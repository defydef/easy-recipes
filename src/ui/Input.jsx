function Input({ placeholder }) {
  return (
    <input
      className="border-solid border-yellow-300 rounded shadow-sm px-2 focus:outline-none transition duration-300 all focus:shadow-lg cursor-pointer py-5 h-8 w-72 focus:w-96 bg-slate-200 focus:bg-slate-50"
      placeholder={placeholder}
    />
  );
}

export default Input;

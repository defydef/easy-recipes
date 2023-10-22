function Input({ placeholder }) {
  return (
    <input
      className="border-solid border-yellow-300 rounded shadow-sm px-2 focus:outline-none transition duration-300 all focus:shadow-lg cursor-pointer py-5 h-8 w-72 focus:w-96"
      placeholder={placeholder}
    />
  );
}

/*border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem; */

export default Input;

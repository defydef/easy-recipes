function NavBar({ children }) {
  return (
    <nav className="bg-yellow-300">
      <ul className="flex items-center px-5 py-3 gap-2">
        <Logo />
        {children}
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <li className="flex">
      <span role="img">🍔&nbsp;</span>
      <h1>Easy Recipes </h1>
    </li>
  );
}

export default NavBar;

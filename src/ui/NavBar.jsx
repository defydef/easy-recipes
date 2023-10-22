import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <nav className="bg-yellow-300 py-4 px-6 items-center shadow-sm">
      <ul className="flex justify-between">
        <div className="flex items-center gap-12">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <SearchBar />
        </div>
        <div className="flex items-center gap-5 px-3">
          <NavLink to="recipes">Recipes</NavLink>
          <NavLink to="tips">Tips & Tricks</NavLink>
        </div>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <li className="flex">
      <span role="img">🍔&nbsp;&nbsp;</span>
      <h1 className="font-bold">Easy Recipes </h1>
    </li>
  );
}

export default NavBar;

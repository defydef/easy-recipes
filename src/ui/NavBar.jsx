import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import MenuIcon from "./MenuIcon";

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
        <div className="sm:flex items-center gap-5 px-3 hidden">
          <NavLink to="recipes">Recipes</NavLink>
          <NavLink to="tips">Tips & Tricks</NavLink>
        </div>
        <div className="sm:hidden flex items-center ml-2">
          <li>
            <MenuIcon />
          </li>
        </div>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <li className="flex items-center text-2xl">
      <span role="img" className="text-3xl">
        👩🏻‍🍳&nbsp;
      </span>
      <h1 className="font-bold">Easy Recipes </h1>
    </li>
  );
}

export default NavBar;

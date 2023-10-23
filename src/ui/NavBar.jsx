import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import MenuIcon from "./icons/MenuIcon";
import SideMenu from "./SideMenu";
import Logo from "./Logo";
import { useState } from "react";

function NavBar() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  function handleMenuClick() {
    setShowSideMenu((show) => !show);
  }

  return (
    <nav className="bg-yellow-300 py-4 px-6 items-center shadow-sm">
      <ul className="flex justify-between">
        <div className="flex items-center gap-12">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <SearchBar />
        </div>
        <div className="sm:flex items-center gap-5 px-3 hidden all">
          <NavLink to="recipes">Recipes</NavLink>
          <NavLink to="tips">Tips & Tricks</NavLink>
        </div>
        <li className="flex items-center ml-2">
          <span
            onClick={handleMenuClick}
            className="transition duration-2000 all"
          >
            <MenuIcon />
          </span>
          {showSideMenu && <SideMenu onToggleMenu={handleMenuClick} />}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

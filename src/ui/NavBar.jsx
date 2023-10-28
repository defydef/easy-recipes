import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import MenuIcon from "./icons/MenuIcon";
import SideMenu from "./SideMenu";
import Logo from "./Logo";
import { useState } from "react";

const underlineStyle = "hover:underline hover:underline-offset-2";

function NavBar() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  function handleMenuClick() {
    setShowSideMenu((show) => !show);
  }

  return (
    <nav className="bg-amber-500 py-4 px-6 items-center shadow-sm text-slate-800 w-screen">
      <ul className="flex justify-between">
        <div className="flex sm:gap-12 items-center justify-start">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <SearchBar />
        </div>
        <div className="sm:flex items-center gap-5 px-3 hidden all">
          <NavLink to="recipes" className={underlineStyle}>
            Recipes
          </NavLink>
          <NavLink to="tips" className={underlineStyle}>
            Tips
          </NavLink>
        </div>
        <li className="flex items-center ml-2 sm:hidden">
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

    // <nav className="bg-amber-500 py-4 px-6">Test</nav>
  );
}

export default NavBar;

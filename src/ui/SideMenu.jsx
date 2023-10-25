import { NavLink } from "react-router-dom";
import CloseIcon from "./icons/CloseIcon";
import Logo from "./Logo";

function SideMenu({ onToggleMenu }) {
  return (
    // <div className="absolute inset-0 bg-slate-200/20 backdrop-blur-sm">
    <>
      <div
        className="absolute inset-0 bg-slate-200/20 backdrop-blur-sm"
        onClick={onToggleMenu}
      ></div>
      <div className="absolute top-0 right-0 bg-slate-100 w-max h-screen">
        <div className="flex justify-between px-5 py-5 gap-10 items-start">
          <ul className="flex flex-col gap-3">
            <NavLink to="" onClick={onToggleMenu}>
              <Logo />
            </NavLink>
            <NavLink to="recipes" onClick={onToggleMenu}>
              Recipes
            </NavLink>
            <NavLink to="tips" onClick={onToggleMenu}>
              Tips & Tricks
            </NavLink>
          </ul>
          <div className="cursor-pointer" onClick={onToggleMenu}>
            <CloseIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;

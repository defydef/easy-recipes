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
      <div className="absolute top-0 right-0 bg-slate-100 w-[25vw] h-screen">
        <div className="flex justify-between px-5 py-5">
          <ul className="flex flex-col gap-3">
            <NavLink to="">
              <Logo />
            </NavLink>
            <NavLink to="recipes">Recipes</NavLink>
            <NavLink to="tips">Tips & Tricks</NavLink>
          </ul>
          <span className="cursor-pointer" onClick={onToggleMenu}>
            <CloseIcon />
          </span>
        </div>
      </div>
    </>
  );
}

export default SideMenu;

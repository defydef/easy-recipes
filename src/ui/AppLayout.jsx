import NavBar from "../ui/NavBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;

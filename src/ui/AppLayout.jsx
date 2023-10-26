import { RecipeProvider } from "../features/recipes/RecipeContext";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <RecipeProvider>
        <Outlet />
      </RecipeProvider>
    </div>
  );
}

export default AppLayout;

import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import RecipeList from "./pages/RecipeList";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          {/* <Route index element={<AppLayout />} /> */}
          <Route path="" element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="cities" />} /> */}
            {/* immediately redirect to "/cities" using Navigate */}
            <Route path="recipes" element={<RecipeList />} />
            <Route path="tips" element={<Tips />} />
            <Route path="" element={<Home />} />
            <Route path="cities/:id" element={<Home />} />
            <Route path="countries" element={<Home />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

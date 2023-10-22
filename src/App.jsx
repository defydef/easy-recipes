import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Tips from "./pages/Tips";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          {/* <Route index element={<AppLayout />} /> */}
          <Route path="" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            {/* immediately redirect to "/cities" using Navigate */}
            <Route path="recipes" element={<Recipes />} />
            <Route path="tips" element={<Tips />} />
            <Route path="cities" element={<Home />} />
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

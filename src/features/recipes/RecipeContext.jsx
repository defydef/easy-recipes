import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:8000";

const initialState = {
  recipes: [],
  // loading, error, ready, active, finished
  status: "loading",
};

// 1) Create a new Context component
const RecipeContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, recipes: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Undefined action");
  }
}

function RecipeProvider({ children }) {
  const [{ recipes, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    const controller = new AbortController();
    async function fetchRecipes() {
      try {
        const res = await fetch(`${BASE_URL}/recipes`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.Response === "False") throw new Error();
        dispatch({ type: "dataReceived", payload: data });
      } catch (e) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchRecipes();
    // cleanup function
    return function () {
      controller.abort();
    };
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        status,
        dispatch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

function useRecipe() {
  const context = useContext(RecipeContext);
  if (context === undefined) throw new Error("useRecipe is undefined");
  return context;
}

export { RecipeProvider, useRecipe };

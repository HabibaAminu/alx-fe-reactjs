import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import { Route, Router, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails"

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
        <Routes>
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

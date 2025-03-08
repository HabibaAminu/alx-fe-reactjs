import React, { useState } from "react";
import useRecipeStore from './recipeStore';
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
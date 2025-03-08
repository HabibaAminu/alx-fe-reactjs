import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ index, recipe, onCancel }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);
  const editRecipe = useRecipeStore((state) => state.editRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    editRecipe(index, updatedRecipe);
    onCancel(); // Close the form after editing
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedRecipe}
        onChange={(e) => setUpdatedRecipe(e.target.value)}
        required
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;  

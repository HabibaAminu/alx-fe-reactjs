import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (index, updatedRecipe) => set((state) => {
    const newRecipes = [...state.recipes];
    newRecipes[index] = updatedRecipe;
    return{ recipes: newRecipes };
  }),
  deleteRecipe: (index) =>
    set((state) => ({
      recipes: state.recipes.filter((_, i) => i !== index),
    })),
}));

export default useRecipeStore;
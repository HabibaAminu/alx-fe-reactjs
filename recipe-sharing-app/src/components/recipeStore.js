import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchItem: "",
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (index, updatedRecipe) =>
    set((state) => {
      const newRecipes = [...state.recipes];
      newRecipes[index] = updatedRecipe;
      return { recipes: newRecipes };
    }),
  deleteRecipe: (index) =>
    set((state) => ({
      recipes: state.recipes.filter((_, i) => i !== index),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
}));

export default useRecipeStore;

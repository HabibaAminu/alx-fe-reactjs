import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm'
import { Routes } from 'react-router-dom';



function App() {
  return( 
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <Router>
        <Routes>
          <Route path="/" element></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
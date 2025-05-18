import { useFavorites } from "./useFavorites.js";
import {IRecipe} from "../types/recipe.type";

// idRecipe — это id объекта-рецепта (recipe)
export const useIsFavorite = (idRecipe: IRecipe['id']) => {
    const { favorites } = useFavorites();
    return favorites.some(f => f.id === idRecipe);
};
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {IRecipe} from "../../types/recipe.type";

const initialState: IRecipe[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addToFavorites: (state, {payload: recipe}: PayloadAction<IRecipe>) => {
            const isExist = state.some(r => r.id === recipe.id )
            if (isExist) {
                const index = state.findIndex(r => r.id === recipe.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
            } else {
                state.push(recipe)
            }
        }
    }
})

export const actions = favoritesSlice.actions
export default favoritesSlice.reducer

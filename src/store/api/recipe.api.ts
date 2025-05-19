import {api} from "./api";
import {IRecipe, IRecipeData} from "../../types/recipe.type";

export const recipeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<IRecipe[], string | void>({
            query: (search = '') => ({
                url: '/recipes?_sort=id&_order=desc',
                params: search ? { q: search } : {},
            }),
            providesTags: [{type: 'Recipe'}],
        }),
        addRecipe: builder.mutation<void, IRecipeData>({
            query: (recipe) => ({
                url: '/recipes',
                method: 'POST',
                body: recipe,
            }),
            invalidatesTags: [{type: 'Recipe'}],
        }),
        removeRecipe: builder.mutation<void, number>({
            query: (id) => ({
                url: `/recipes/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Recipe'}],
        })
    })
})

export const {useGetRecipesQuery, useAddRecipeMutation, useRemoveRecipeMutation} = recipeApi
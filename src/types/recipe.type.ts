export interface IRecipe {
    name: string,
    id: number,
    image: string,
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {}
import styles from './RecipeItem.module.css'
import {useActions} from "../../hooks/useActions";
import { useIsFavorite } from "../../hooks/useIsFavorite";
import {useRemoveRecipeMutation} from "../../store/api/recipe.api";
import {IRecipe} from "../../types/recipe.type";

interface IRecipeItemProps {
    recipe: IRecipe
}

function RecipeItem({recipe}: IRecipeItemProps) {
    const {addToFavorites} = useActions()
    const isAdd = useIsFavorite(recipe.id);
    const [removeRecipe] = useRemoveRecipeMutation()

    return (
        <div className={styles.item}>
            <img src={recipe.image} alt={recipe.name} className={styles.image}/>
            <h3>{recipe.name}</h3>
            <button onClick={() => addToFavorites(recipe)}
            >{isAdd ? 'Remove from' : 'Add to'} favorites</button>
            <button onClick={() => removeRecipe(recipe.id)}>Remove recipe</button>
        </div>
    )

}

export default RecipeItem
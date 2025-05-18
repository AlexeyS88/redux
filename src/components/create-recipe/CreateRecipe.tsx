import React, {useState} from "react";
import styles from './CreateRecipe.module.css'
import {useAddRecipeMutation} from "../../store/api/recipe.api";
import {IRecipeData} from "../../types/recipe.type";

const defaultRecipe:IRecipeData = {
    name: '',
    image: '',
}

export default function CreateRecipe() {
    const [recipe, setRecipe] = useState<IRecipeData>(defaultRecipe)
    const [error, setError] = useState('');
    const [createRecipe] = useAddRecipeMutation()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Проверка: оба поля должны быть заполнены
        if (!recipe.name.trim() || !recipe.image.trim()) {
            setError('Пожалуйста, заполните все поля!');
            return;
        }
        setError('')
        createRecipe(recipe)
        setRecipe(defaultRecipe)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.recipe}>
                <h2>Create new recipe</h2>
                <label htmlFor={'recipe-name'}>Recipe name</label>
                <input
                    type="text"
                    id={'recipe-name'} placeholder={'Recipe name'}
                    value={recipe.name}
                    onChange={e => setRecipe({...recipe, name: e.target.value})}
                    className={error ? styles.error : ''}
                />
                <label htmlFor={'recipe-name'}>Recipe image</label>
                <input
                    type="text"
                    id={'recipe-image'} placeholder={'Recipe image'}
                    value={recipe.image}
                    onChange={e => setRecipe({...recipe, image: e.target.value})}
                    className={error ? styles.error : ''}
                />
                {error && <p className={styles.errorMessage}>{error}</p>}
                <button type='submit' className={styles.greenButton}>Create</button>
            </form>
        </div>
    )
}